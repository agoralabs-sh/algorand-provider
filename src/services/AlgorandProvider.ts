// Entities
import BaseWalletManager from './BaseWalletManager';

// Errors
import { NoWalletsDetectedError, WalletDoesNotExistError } from '../errors';

// Types
import {
  IAddWalletOptions,
  IBaseConnectResult,
  IConnectOptions,
  IConnectResult,
} from '../types';

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
   * Connects to a wallet. If the ID of the wallet is specified, that wallet is used, otherwise the default wallet is
   * used to connect.
   * @param {IConnectOptions} options - [optional] an object containing connection information such as which wallet to
   * connect to and which chain to use.
   * @returns {IConnectResult} an object containing which wallet was used, chain information, available accounts and
   * optional connection information.
   * @throws {ConnectRequestDeniedError} if the connect request was denied by the user.
   * @throws {NoWalletsDetectedError} if no wallets have been added.
   * @throws {WalletDoesNotExistError} if the specified wallet does not exist.
   */
  public async connect(options?: IConnectOptions): Promise<IConnectResult> {
    let connectResult: IBaseConnectResult;
    let wallet: BaseWalletManager | null;

    if (this.wallets.length <= 0) {
      throw new NoWalletsDetectedError(`no wallets detected`);
    }

    wallet = this.getWallet();

    if (options?.id) {
      wallet = this.getWallet(options.id);

      if (!wallet) {
        throw new WalletDoesNotExistError(options.id);
      }
    }

    if (!wallet) {
      throw new NoWalletsDetectedError(`no wallets detected`);
    }

    connectResult = await wallet.connect({ genesisHash: options?.genesisHash });

    return {
      ...connectResult,
      id: wallet.id,
    };
  }

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
   * Gets the wallet as specified by its ID, or the default wallet if no ID is provided.
   * @param {string} id - [optional] the ID of the wallet.
   * @returns {BaseWalletManager | null} the wallet if it exists, null otherwise.
   */
  public getWallet(id?: string): BaseWalletManager | null {
    if (this.wallets.length <= 0) {
      return null;
    }

    // if an id is provided, try to find it.
    if (id) {
      return this.wallets.find((value) => value.id === id) || null;
    }

    // if the default provider index is out of bounds, reset to 0.
    if (this.defaultWalletIndex > this.wallets.length - 1) {
      this.defaultWalletIndex = 0;
    }

    return this.wallets[this.defaultWalletIndex] || null;
  }

  /**
   * Gets all the wallets.
   * @returns {BaseWalletManager[]} gets all the providers.
   */
  public getWallets(): BaseWalletManager[] {
    return this.wallets;
  }

  /**
   * Sets the default wallet by ID. If the wallet does not exist, the default wallet is left unchanged.
   * @param {string} id - the ID of the wallet to set to default.
   */
  public setDefaultWallet(id: string): void {
    const index: number = this.wallets.findIndex((value) => value.id === id);

    this.defaultWalletIndex = index < 0 ? this.defaultWalletIndex : index;
  }
}
