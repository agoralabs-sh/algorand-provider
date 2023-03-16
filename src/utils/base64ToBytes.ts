/**
 * Decodes a base 64 encoded string to bytes.
 * @param {string} encodedData - the base 64 encoded string.
 * @returns {Uint8Array} the decoded bytes of the base 64 string.
 */
export default function base64ToBytes(encodedData: string): Uint8Array {
  return new Uint8Array(
    encodedData.split('').map((value) => value.charCodeAt(0))
  );
}
