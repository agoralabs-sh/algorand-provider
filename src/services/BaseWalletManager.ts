// Types
import {
  IEnableOptions,
  IEnableResult,
  INewBaseWalletManagerOptions,
  IPostTxnsOptions,
  IPostTxnsResult,
  ISignBytesOptions,
  ISignBytesResult,
  ISignTxnsOptions,
  ISignTxnsResult,
} from '../types';

export default abstract class BaseWalletManager {
  public id: string;

  constructor({ id }: INewBaseWalletManagerOptions) {
    this.id = id;
  }

  /**
   * Requests for a wallet to enable a dApp. This can be called multiple times and is the responsibility of the
   * wallet to handle multiple request and "re-enable" the dApp.
   * @param {IEnableOptions} options - [optional] an object containing which chain to connect to.
   * @returns {IEnableResult} an object containing the chain information, available accounts and optional connection
   * information.
   * @throws {NetworkNotSupportedError} if the wallet does not support the network defined by the genesis hash.
   * @throws {OperationCanceledError} if the connect request was denied by the user.
   */
  public abstract enable(options?: IEnableOptions): Promise<IEnableResult>;

  /**
   * Posts a list of signed transactions to the network.
   * @param {IPostTxnsOptions} options - an object containing the signed transactions to be sent to the network.
   * @returns {IPostTxnsResult} an object containing the IDs of the transactions that were committed to the blockchain.
   * @throws {OperationCanceledError} if the request was denied by the user.
   * @throws {FailedToPostSomeTransactionsError} if some transactions were not sent properly.
   */
  public postTxns?(options: IPostTxnsOptions): Promise<IPostTxnsResult>;

  /**
   * Signs an arbitrary piece of data. The returned signature can be verified using
   * {@link https://algorand.github.io/js-algorand-sdk/functions/verifyBytes.html algosdk.verifyBytes}
   * @param {ISignBytesOptions} options - an object containing the arbitrary piece of data to sign.
   * @returns {ISignBytesResult} an object containing the signature of the data with the MX prefix.
   * @throws {OperationCanceledError} if the request was denied by the user.
   * @throws {UnauthorizedSignerError} if the supplied signer is not authorized by the wallet.
   */
  public signBytes?(options: ISignBytesOptions): Promise<ISignBytesResult>;

  /**
   * Sends a list of transactions to be signed. The transactions must conform to
   * {@link https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0001.md ARC-0001}.
   * @param {IBaseOptions & ISignTxnsOptions} options - an object containing the transactions to be signed.
   * @returns {IBaseResult & ISignTxnsResult} an object containing the signed transactions ready to be posted to the
   * network.
   * @throws {OperationCanceledError} if the request was denied by the user.
   * @throws {UnauthorizedSignerError} if the supplied signer is not authorized by the wallet.
   * @throws {InvalidGroupIdError} if computed group ID for the supplied transactions does not match the assigned group ID.
   */
  public signTxns?(options: ISignTxnsOptions): Promise<ISignTxnsResult>;
}
