// Entities
import BaseWalletManager from './BaseWalletManager';

// Errors
import {
  NoWalletsDetectedError,
  WalletDoesNotExistError,
  WalletOperationNotSupportedError,
} from '../errors';

// Types
import {
  IAddWalletOptions,
  IBaseOptions,
  IBaseResult,
  IEnableOptions,
  IEnableResult,
  IPostTxnsOptions,
  IPostTxnsResult,
  ISignBytesOptions,
  ISignBytesResult,
  ISignTxnsOptions,
  ISignTxnsResult,
} from '../types';

export default class AlgorandProvider {
  private defaultWalletIndex: number = 0;
  private wallets: BaseWalletManager[];

  constructor() {
    this.wallets = [];
  }

  /**
   * Private functions
   */

  /**
   * Gets the wallet as specified by its ID, or the default wallet if no ID is provided.
   * @param {string} id - [optional] the ID of the wallet.
   * @returns {BaseWalletManager | null} the wallet if it exists, null otherwise.
   */
  private getWallet(id?: string): BaseWalletManager | null {
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
   * Convenience function that simply gets the wallet specified by the ID (or the default if ID is not provided), or
   * throws an error.
   * @param {string} id - [optional] the ID of the wallet.
   * @returns {BaseWalletManager} the wallet, as specified by the ID, or the default wallet.
   * @throws {NoWalletsDetectedError} if no wallets have been added.
   * @throws {WalletDoesNotExistError} if the specified wallet does not exist.
   * @private
   */
  private getWalletOrThrowError(id?: string): BaseWalletManager {
    let wallet: BaseWalletManager | null;

    if (this.wallets.length <= 0) {
      throw new NoWalletsDetectedError(`no wallets detected`);
    }

    wallet = this.getWallet();

    if (id) {
      wallet = this.getWallet(id);

      if (!wallet) {
        throw new WalletDoesNotExistError(id);
      }
    }

    if (!wallet) {
      throw new NoWalletsDetectedError(`no wallets detected`);
    }

    return wallet;
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
   * Connects to a wallet. If the ID of the wallet is specified, that wallet is used, otherwise the default wallet is
   * used to connect.
   * @param {IBaseOptions & IEnableOptions} options - [optional] an object containing connection information such as
   * which wallet to connect to and which chain to use.
   * @returns {IBaseResult & IEnableResult} an object containing which wallet was used, chain information, available
   * accounts and optional connection information.
   * @throws {NoWalletsDetectedError} if no wallets have been added.
   * @throws {WalletDoesNotExistError} if the specified wallet does not exist.
   * @throws {NetworkNotSupportedError} if the wallet does not support the network defined by the genesis hash.
   * @throws {OperationCanceledError} if the connect request was denied by the user.
   */
  public async enable(
    options?: IBaseOptions & IEnableOptions
  ): Promise<IBaseResult & IEnableResult> {
    let result: IEnableResult;
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

    result = await wallet.enable({ genesisHash: options?.genesisHash });

    return {
      ...result,
      id: wallet.id,
    };
  }

  /**
   * Gets a list of all the wallets by their IDs.
   * @returns {string[]} a list of the wallet IDs.
   */
  public getWallets(): string[] {
    return this.wallets.map((value) => value.id);
  }

  /**
   * Posts a list of signed transactions to the network.
   * @param {IBaseOptions & IPostTxnsOptions} options - an object containing the wallet information and the signed
   * transactions to be sent to the network.
   * @returns {IBaseResult & IPostTxnsResult} an object containing the wallet information and the IDs of the
   * transactions that were committed to the blockchain.
   * @throws {NoWalletsDetectedError} if no wallets have been added.
   * @throws {WalletDoesNotExistError} if the specified wallet does not exist.
   * @throws {WalletOperationNotSupportedError} if the wallet does not support the posting of transactions.
   * @throws {OperationCanceledError} if the request was denied by the user.
   * @throws {FailedToPostSomeTransactionsError} if some transactions were not sent properly.
   */
  public async postTxns({
    id,
    ...postTxnsOptions
  }: IBaseOptions & IPostTxnsOptions): Promise<IBaseResult & IPostTxnsResult> {
    const wallet: BaseWalletManager = this.getWalletOrThrowError(id);
    let result: IPostTxnsResult;

    if (!wallet.postTxns) {
      throw new WalletOperationNotSupportedError(wallet.id, 'postTxns');
    }

    result = await wallet.postTxns?.(postTxnsOptions);

    return {
      id: wallet.id,
      ...result,
    };
  }

  /**
   * Sets the default wallet by ID. If the wallet does not exist, the default wallet is left unchanged.
   * @param {string} id - the ID of the wallet to set to default.
   */
  public setDefaultWallet(id: string): void {
    const index: number = this.wallets.findIndex((value) => value.id === id);

    this.defaultWalletIndex = index < 0 ? this.defaultWalletIndex : index;
  }

  /**
   * Signs an arbitrary piece of data. The returned signature can be verified using {@link https://algorand.github.io/js-algorand-sdk/functions/verifyBytes.html algosdk.verifyBytes}
   * @param {IBaseOptions & ISignBytesOptions} options - an object containing the wallet information and the arbitrary
   * piece of data to sign.
   * @returns {IBaseResult & ISignBytesResult} an object containing the wallet information and the signature of the data
   * with the MX prefix.
   * @throws {NoWalletsDetectedError} if no wallets have been added.
   * @throws {WalletDoesNotExistError} if the specified wallet does not exist.
   * @throws {WalletOperationNotSupportedError} if the wallet does not support the signing of data.
   * @throws {OperationCanceledError} if the request was denied by the user.
   * @throws {UnauthorizedSignerError} if supplied signer is not authorized by the wallet.
   */
  public async signBytes({
    id,
    ...signBytesOptions
  }: IBaseOptions & ISignBytesOptions): Promise<
    IBaseResult & ISignBytesResult
  > {
    const wallet: BaseWalletManager = this.getWalletOrThrowError(id);
    let result: ISignBytesResult;

    if (!wallet.signBytes) {
      throw new WalletOperationNotSupportedError(wallet.id, 'signBytes');
    }

    result = await wallet.signBytes?.(signBytesOptions);

    return {
      id: wallet.id,
      ...result,
    };
  }

  /**
   * Sends a list of transactions to be signed. The transactions must conform to
   * {@link https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0001.md ARC-0001}.
   * @param {IBaseOptions & ISignTxnsOptions} options - an object containing the wallet information and the transactions
   * to be signed.
   * @returns {IBaseResult & ISignTxnsResult} an object containing the wallet information and the signed transactions
   * ready to be posted to the network.
   * @throws {NoWalletsDetectedError} if no wallets have been added.
   * @throws {WalletDoesNotExistError} if the specified wallet does not exist.
   * @throws {WalletOperationNotSupportedError} if the wallet does not support the signing of transactions.
   * @throws {OperationCanceledError} if the request was denied by the user.
   * @throws {UnauthorizedSignerError} if supplied signer is not authorized by the wallet.
   * @throws {InvalidGroupIdError} if computed group ID for the supplied transactions does not match the assigned group ID.
   */
  public async signTxns({
    id,
    ...signTxnsOptions
  }: IBaseOptions & ISignTxnsOptions): Promise<IBaseResult & ISignTxnsResult> {
    const wallet: BaseWalletManager = this.getWalletOrThrowError(id);
    let result: ISignTxnsResult;

    if (!wallet.signTxns) {
      throw new WalletOperationNotSupportedError(wallet.id, 'signTxns');
    }

    result = await wallet.signTxns?.(signTxnsOptions);

    return {
      id: wallet.id,
      ...result,
    };
  }
}
