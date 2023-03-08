/**
 * @property {Uint8Array[]} stxns - the list of signed transactions that is ready to be posted to the network.
 */
interface ISignTxnsResult {
  stxns: Uint8Array[];
}

export default ISignTxnsResult;
