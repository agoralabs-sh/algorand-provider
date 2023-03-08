// Entities
import BaseWalletManager from './BaseWalletManager';

// Types
import { IAddWalletOptions } from '../types';

export default class AlgorandProvider {
  private defaultWalletIndex: number = 0;
  private wallets: BaseWalletManager[];

  constructor() {
    this.wallets = [];
  }

  /**
   * Public functions
   */

  /**
   * Adds a wallet, or if the `replace` option is set, will replace any existing wallet matching by ID.
   * @param {BaseWalletManager} wallet - the wallet to add/replace.
   * @param {IAddWalletOptions} options - [optional] options that change the behavior when adding a wallet.
   */
  public addWallet(
    wallet: BaseWalletManager,
    options?: IAddWalletOptions
  ): void {
    const existingWallet: BaseWalletManager | null = this.getWallet(wallet.id);

    // if no provider exists, just add it
    if (!existingWallet) {
      this.wallets.push(wallet);
    }

    if (existingWallet && options?.replace) {
      this.wallets = this.wallets.map((value) =>
        value.id === wallet.id ? wallet : value
      );
    }

    if (options?.makeDefault) {
      this.setDefaultWallet(wallet.id);
    }
  }

  /**
   * Gets the default wallet.
   * @returns {BaseWalletManager | null} the default wallet or null if no wallets exist.
   */
  public getDefaultWallet(): BaseWalletManager | null {
    if (this.wallets.length <= 0) {
      return null;
    }

    // if the default provider index is out of bounds, reset to 0.
    if (this.defaultWalletIndex > this.wallets.length - 1) {
      this.defaultWalletIndex = 0;
    }

    return this.wallets[this.defaultWalletIndex] || null;
  }

  /**
   * Gets the wallet as specified by its ID.
   * @param {string} id - the ID of the wallet.
   * @returns {BaseWalletManager | null} the wallet if it exists, null otherwise.
   */
  public getWallet(id: string): BaseWalletManager | null {
    return this.wallets.find((value) => value.id === id) || null;
  }

  /**
   * Gets all the wallets.
   * @returns {BaseWalletManager[]} gets all the providers.
   */
  public getWallets(): BaseWalletManager[] {
    return this.wallets;
  }

  /**
   * Sets the default wallet by ID. If the wallet does not exist, the default wallet is letf unchanged.
   * @param {string} id - the ID of the wallet to set to default.
   */
  public setDefaultWallet(id: string): void {
    const index: number = this.wallets.findIndex((value) => value.id === id);

    this.defaultWalletIndex = index < 0 ? this.defaultWalletIndex : index;
  }
}
