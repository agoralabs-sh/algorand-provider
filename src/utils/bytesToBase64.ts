/**
 * Converts some bytes to a base 64 encoded string.
 * @param {Uint8Array} bytes - the bytes to encode.
 * @returns {string} a base 64 encoded string of the supplied bytes.
 */
export default function bytesToBase64(bytes: Uint8Array): string {
  return btoa(String.fromCharCode.apply(null, bytes));
}
