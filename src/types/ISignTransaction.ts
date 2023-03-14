import { MultisigMetadata } from 'algosdk';

/**
 * @property {string} authAddr - [optional] the auth address if the sender has rekeyed.
 * @property {MultisigMetadata} msig - [optional] extra metadata needed when sending multisig transactions See {@link https://algorand.github.io/js-algorand-sdk/interfaces/MultisigMetadata.html algosdk.MultisigMetadata}.
 * @property {string[]} signers - [optional] a list of addresses to sign with (defaults to the sender in the transaction).
 * @property {Uint8Array} stxn - [optional] if this is part of a group of transactions, some of which are already signed
 * you must also provide these signed transactions, as per {@link https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0001.md ARC-0001}.
 * @property {Uint8Array} txn - the unsigned transaction. See {@link https://algorand.github.io/js-algorand-sdk/classes/Transaction.html#toByte algosdk.Transaction.toBytes} on how to get a transaction.
 */
interface ISignTransaction {
  authAddr?: string;
  msig?: MultisigMetadata;
  txn: Uint8Array;
  signers?: string[];
  stxn?: Uint8Array;
}

export default ISignTransaction;
