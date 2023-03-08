// Types
import ISignTransaction from './ISignTransaction';

/**
 * @property {ISignTransaction[]} txns - a list of transactions to be signed.
 */
interface ISignTxnsOptions {
  txns: ISignTransaction[];
}

export default ISignTxnsOptions;
