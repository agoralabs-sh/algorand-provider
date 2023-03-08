/**
 * @property {Uint8Array} data - the arbitrary piece of data to sign.
 * @property {string} signer - [optional] the address to use to sign the data.
 */
interface ISignBytesOptions {
  data: Uint8Array;
  signer?: string;
}

export default ISignBytesOptions;
