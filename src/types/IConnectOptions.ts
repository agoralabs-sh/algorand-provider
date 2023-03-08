// Types
import IBaseConnectOptions from './IBaseConnectOptions';

/**
 * @property {string} id - [optional] the id of the wallet to connect to. If this is not defined, the default wallet is
 * used.
 */
interface IConnectOptions extends IBaseConnectOptions {
  id?: string;
}

export default IConnectOptions;
