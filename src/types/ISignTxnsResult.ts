/**
 * @property {string[]} stxns - the list of base64 encoded signed transactions that is ready to be posted to the network.
 */
interface ISignTxnsResult {
  stxns: string[];
}

export default ISignTxnsResult;
