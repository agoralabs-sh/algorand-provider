/**
 * @property {string[]} txnIDs - a list of 52-character base32 strings (without padding) corresponding the completed
 * transaction IDs.
 */
interface IPostTxnsResult {
  txnIDs: string[];
}

export default IPostTxnsResult;
