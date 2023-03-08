// Types
import {
  IBaseConnectOptions,
  IBaseConnectResult,
  INewBaseWalletManagerOptions,
} from '../types';

export default abstract class BaseWalletManager {
  public id: string;

  constructor({ id }: INewBaseWalletManagerOptions) {
    this.id = id;
  }

  /**
   * Request for a dApp to connect to a wallet. This can be called multiple times and is the responsibility of the
   * wallet to handle multiple request and "reconnect" the dApp.
   * @param {IBaseConnectOptions} options - [optional] an object containing which chain to connect to.
   * @returns {IBaseConnectResult} an object containing the chain information, available accounts and optional connection
   * information.
   * @throws {ConnectRequestDeniedError} if the connect request was denied by the user.
   */
  public abstract connect(
    options?: IBaseConnectOptions
  ): Promise<IBaseConnectResult>;
}
