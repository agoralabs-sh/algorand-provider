import { faker } from '@faker-js/faker';
import { randomBytes } from 'crypto';

// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import {
  BaseError,
  NetworkNotSupportedError,
  NoWalletsDetectedError,
  OperationCanceledError,
} from '../errors';

// Services
import AlgorandProvider from './AlgorandProvider';
import BaseWalletManager from './BaseWalletManager';

// Types
import { IConnectOptions, IConnectResult } from '../types';

class TestWalletManager extends BaseWalletManager {
  public async connect(options?: IConnectOptions): Promise<IConnectResult> {
    return {
      accounts: [],
      genesisHash: options?.genesisHash || randomBytes(32).toString('base64'),
      genesisId: 'jest-test-v1',
      sessionId: faker.datatype.uuid(),
    };
  }
}

describe(AlgorandProvider.name, () => {
  let wallet: BaseWalletManager;
  let algorandProvider: AlgorandProvider;

  beforeEach(() => {
    wallet = new TestWalletManager({
      id: faker.datatype.uuid(),
    });
    algorandProvider = new AlgorandProvider();
  });

  describe(`${AlgorandProvider.name}#addWallet`, () => {
    it('should add a wallet', () => {
      // Arrange
      let walletIds: string[];

      // Act
      algorandProvider.addWallet(wallet);

      // Assert
      walletIds = algorandProvider.getWallets();

      expect(walletIds.find((value) => value === wallet.id)).toBe(wallet.id);
    });

    it('should replace an exising wallet', () => {
      // Arrange
      const updatedWallet: TestWalletManager = new TestWalletManager({
        id: wallet.id,
      });
      let walletIds: string[];

      // add the existing wallet
      algorandProvider.addWallet(wallet);

      // Act
      algorandProvider.addWallet(updatedWallet, {
        replace: true, // set it to replace the previous wallet
      });

      // Assert
      walletIds = algorandProvider.getWallets();

      expect(walletIds.filter((value) => value === wallet.id)).toHaveLength(1); // there can be only one!
    });
  });

  describe.only(`${AlgorandProvider.name}#connect`, () => {
    it('should throw an error if no wallets are detected', async () => {
      try {
        // Arrange
        // Act
        await algorandProvider.connect();
      } catch (error) {
        // Assert
        expect((error as BaseError).code).toBe(
          ErrorCodeEnum.NoWalletsDetectedError
        );

        return;
      }

      throw new Error('should have thrown a no wallet detected error');
    });

    it('should throw an error if the specified wallet does not exist', async () => {
      // Arrange
      algorandProvider.addWallet(wallet);

      try {
        // Act
        await algorandProvider.connect({
          id: faker.datatype.uuid(), // use some random id
        });
      } catch (error) {
        // Assert
        expect((error as BaseError).code).toBe(
          ErrorCodeEnum.WalletDoesNotExistError
        );

        return;
      }

      throw new Error('should have thrown a wallet does not exist error');
    });

    it('should throw an error if the specified genesis hash is not supported', async () => {
      // Arrange
      const genesisHash: string = randomBytes(32).toString('base64');

      jest
        .spyOn(TestWalletManager.prototype, 'connect')
        .mockImplementationOnce(() =>
          Promise.reject(new NetworkNotSupportedError(genesisHash))
        );
      algorandProvider.addWallet(wallet);

      try {
        // Act
        await algorandProvider.connect({
          id: wallet.id,
          genesisHash: genesisHash,
        });
      } catch (error) {
        // Assert
        expect((error as BaseError).code).toBe(
          ErrorCodeEnum.NetworkNotSupportedError
        );

        return;
      }

      throw new Error('should have thrown a network not supported error');
    });

    it('should throw an error if the operation was canceled by the user', async () => {
      // Arrange
      jest
        .spyOn(TestWalletManager.prototype, 'connect')
        .mockImplementationOnce(() =>
          Promise.reject(
            new OperationCanceledError('operation canceled by user')
          )
        );
      algorandProvider.addWallet(wallet);

      try {
        // Act
        await algorandProvider.connect({
          id: wallet.id,
        });
      } catch (error) {
        // Assert
        expect((error as BaseError).code).toBe(
          ErrorCodeEnum.OperationCanceledError
        );

        return;
      }

      throw new Error('should have thrown a network not supported error');
    });

    it('should successfully connect to the wallet', async () => {
      // Arrange
      let result: IConnectResult;

      algorandProvider.addWallet(wallet);

      // Act
      result = await algorandProvider.connect();

      // Assert
      expect(result).toBeDefined();
    });
  });
});
