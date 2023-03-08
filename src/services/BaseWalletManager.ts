// Types
import { INewBaseWalletManagerOptions } from '../types';

export default abstract class BaseWalletManager {
  public id: string;

  constructor({ id }: INewBaseWalletManagerOptions) {
    this.id = id;
  }
}
