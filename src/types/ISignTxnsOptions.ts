// Types
import IWalletTransaction from './IWalletTransaction';

/**
 * @property {IWalletTransaction[]} txns - a list of transactions to be signed.
 */
interface ISignTxnsOptions {
  txns: IWalletTransaction[];
}

export default ISignTxnsOptions;
