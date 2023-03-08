import { faker } from '@faker-js/faker';
import { Account, generateAccount } from 'algosdk';
import { randomBytes } from 'crypto';

// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import {
  NetworkNotSupportedError,
  NoWalletsDetectedError,
  OperationCanceledError,
  UnauthorizedSignerError,
  WalletDoesNotExistError,
  WalletFeatureNotAvailableError,
} from '../errors';

// Services
import AlgorandProvider from './AlgorandProvider';
import BaseWalletManager from './BaseWalletManager';

// Types
import {
  IEnableOptions,
  IEnableResult,
  ISignBytesOptions,
  ISignBytesResult,
} from '../types';

class TestWalletManager extends BaseWalletManager {
  public async enable(options?: IEnableOptions): Promise<IEnableResult> {
    return {
      accounts: [],
      genesisHash: options?.genesisHash || randomBytes(32).toString('base64'),
      genesisId: 'jest-test-v1.0',
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

  describe(`${AlgorandProvider.name}#enable`, () => {
    it('should throw an error if no wallets are detected', async () => {
      try {
        // Arrange
        // Act
        await algorandProvider.enable();
      } catch (error) {
        // Assert
        expect((error as NoWalletsDetectedError).code).toBe(
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
        await algorandProvider.enable({
          id: faker.datatype.uuid(), // use some random id
        });
      } catch (error) {
        // Assert
        expect((error as WalletDoesNotExistError).code).toBe(
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
        .spyOn(TestWalletManager.prototype, 'enable')
        .mockImplementationOnce(() =>
          Promise.reject(new NetworkNotSupportedError(genesisHash))
        );
      algorandProvider.addWallet(wallet);

      try {
        // Act
        await algorandProvider.enable({
          id: wallet.id,
          genesisHash: genesisHash,
        });
      } catch (error) {
        // Assert
        expect((error as NetworkNotSupportedError).code).toBe(
          ErrorCodeEnum.NetworkNotSupportedError
        );

        return;
      }

      throw new Error('should have thrown a network not supported error');
    });

    it('should throw an error if the operation was canceled by the user', async () => {
      // Arrange
      jest
        .spyOn(TestWalletManager.prototype, 'enable')
        .mockImplementationOnce(() =>
          Promise.reject(
            new OperationCanceledError('operation canceled by user')
          )
        );
      algorandProvider.addWallet(wallet);

      try {
        // Act
        await algorandProvider.enable({
          id: wallet.id,
        });
      } catch (error) {
        // Assert
        expect((error as OperationCanceledError).code).toBe(
          ErrorCodeEnum.OperationCanceledError
        );

        return;
      }

      throw new Error('should have thrown an operation canceled error');
    });

    it('should successfully enable the wallet', async () => {
      // Arrange
      let result: IEnableResult;

      algorandProvider.addWallet(wallet);

      // Act
      result = await algorandProvider.enable();

      // Assert
      expect(result).toBeDefined();
    });
  });

  describe(`${AlgorandProvider.name}#signBytes`, () => {
    it('should throw an error if no wallets are detected', async () => {
      try {
        // Arrange
        // Act
        await algorandProvider.signBytes({
          data: new Uint8Array(randomBytes(32)),
          id: wallet.id,
        });
      } catch (error) {
        // Assert
        expect((error as NoWalletsDetectedError).code).toBe(
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
        await algorandProvider.signBytes({
          id: faker.datatype.uuid(), // use some random id
          data: new Uint8Array(randomBytes(32)),
        });
      } catch (error) {
        // Assert
        expect((error as WalletDoesNotExistError).code).toBe(
          ErrorCodeEnum.WalletDoesNotExistError
        );

        return;
      }

      throw new Error('should have thrown a wallet does not exist error');
    });

    it('should throw an error if the feature is not available in the wallet', async () => {
      // Arrange
      algorandProvider.addWallet(wallet);

      try {
        // Act
        await algorandProvider.signBytes({
          id: wallet.id,
          data: new Uint8Array(randomBytes(32)),
        });
      } catch (error) {
        // Assert
        expect((error as WalletFeatureNotAvailableError).code).toBe(
          ErrorCodeEnum.WalletFeatureNotAvailableError
        );

        return;
      }

      throw new Error(
        'should have thrown a wallet feature not available error'
      );
    });

    it('should throw an error if the operation was canceled by the user', async () => {
      // Arrange
      wallet.signBytes = () =>
        Promise.reject(
          new OperationCanceledError('operation canceled by user')
        );

      algorandProvider.addWallet(wallet);

      try {
        // Act
        await algorandProvider.signBytes({
          id: wallet.id,
          data: new Uint8Array(randomBytes(32)),
        });
      } catch (error) {
        // Assert
        expect((error as OperationCanceledError).code).toBe(
          ErrorCodeEnum.OperationCanceledError
        );

        return;
      }

      throw new Error('should have thrown an operation canceled error');
    });

    it('should throw an error if the signer is not authorized', async () => {
      // Arrange
      const unknownSignerAccount: Account = generateAccount();

      wallet.signBytes = ({ signer }: ISignBytesOptions) =>
        Promise.reject(
          new UnauthorizedSignerError(signer || 'should be a value')
        );

      algorandProvider.addWallet(wallet);

      try {
        // Act
        await algorandProvider.signBytes({
          id: wallet.id,
          data: new Uint8Array(randomBytes(32)),
          signer: unknownSignerAccount.addr,
        });
      } catch (error) {
        // Assert
        expect((error as UnauthorizedSignerError).code).toBe(
          ErrorCodeEnum.UnauthorizedSignerError
        );
        expect((error as UnauthorizedSignerError).signer).toBe(
          unknownSignerAccount.addr
        );

        return;
      }

      throw new Error('should have thrown an unauthorized signer error');
    });

    it('should sign the data', async () => {
      // Arrange
      const signature: Uint8Array = new Uint8Array(randomBytes(32));
      let result: ISignBytesResult;

      wallet.signBytes = () =>
        Promise.resolve({
          signature,
        });

      algorandProvider.addWallet(wallet);

      // Act
      result = await algorandProvider.signBytes({
        id: wallet.id,
        data: new Uint8Array(randomBytes(32)),
      });

      // Assert
      expect(result.signature).toEqual(signature);
    });
  });
});
