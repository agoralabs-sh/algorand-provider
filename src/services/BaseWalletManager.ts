// Types
import {
  IConnectOptions,
  IConnectResult,
  INewBaseWalletManagerOptions,
  ISignBytesOptions,
  ISignBytesResult,
} from '../types';

export default abstract class BaseWalletManager {
  public id: string;

  constructor({ id }: INewBaseWalletManagerOptions) {
    this.id = id;
  }

  /**
   * Request for a dApp to connect to a wallet. This can be called multiple times and is the responsibility of the
   * wallet to handle multiple request and "reconnect" the dApp.
   * @param {IConnectOptions} options - [optional] an object containing which chain to connect to.
   * @returns {IConnectResult} an object containing the chain information, available accounts and optional connection
   * information.
   * @throws {NetworkNotSupportedError} if the wallet does not support the network defined by the genesis hash.
   * @throws {OperationCanceledError} if the connect request was denied by the user.
   */
  public abstract connect(options?: IConnectOptions): Promise<IConnectResult>;

  /**
   * Signs an arbitrary piece of data. The returned signature can be verified using {@link https://algorand.github.io/js-algorand-sdk/functions/verifyBytes.html algosdk.verifyBytes}
   * @param {ISignBytesOptions} options - an object containing the arbitrary piece of data to sign.
   * @returns {ISignBytesResult} an object containing the signature of the data with the MX prefix.
   * @throws {OperationCanceledError} if the request was denied by the user.
   */
  public signBytes?(options: ISignBytesOptions): Promise<ISignBytesResult>;
}
