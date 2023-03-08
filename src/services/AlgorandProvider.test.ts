import { faker } from '@faker-js/faker';

// Services
import AlgorandProvider from './AlgorandProvider';
import BaseWalletManager from './BaseWalletManager';

// Types
import { IConnectOptions, IConnectResult } from '../types';

class TestWalletManager extends BaseWalletManager {
  public async connect(options?: IConnectOptions): Promise<IConnectResult> {
    return {
      accounts: [],
      genesisHash: faker.datatype.hexadecimal(32),
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
});
