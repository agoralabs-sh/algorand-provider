/**
 * @property {Uint8Array} signature - the signature of the signed data with the MX prefix.
 */
interface ISignBytesResult {
  signature: Uint8Array;
}

export default ISignBytesResult;
