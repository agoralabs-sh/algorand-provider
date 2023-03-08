// Types
import IWalletAccount from './IWalletAccount';

/**
 * @property {IWalletAccount[]} accounts - a list of available accounts on the wallet.
 * @property {string} genesisHash - the genesis hash of the chain the wallet is connected to.
 * @property {string} genesisId - the genesis ID of the chain the wallet is connected to.
 * @property {string} sessionId - [optional] a unique identifier for this session provided by the wallet.
 */
interface IBaseConnectResult {
  accounts: IWalletAccount[];
  genesisHash: string;
  genesisId: string;
  sessionId?: string;
}

export default IBaseConnectResult;
