/**
 * @property {string} address - the address of the account.
 * @property {string} name - [optional] a human-readable name for this account.
 */
interface IWalletAccount {
  address: string;
  name?: string;
}

export default IWalletAccount;
