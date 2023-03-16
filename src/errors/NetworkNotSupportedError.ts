// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import BaseError from './BaseError';

export default class NetworkNotSupported extends BaseError {
  public readonly code: ErrorCodeEnum = ErrorCodeEnum.NetworkNotSupportedError;
  public readonly genesisHash: string;
  public readonly name: string = 'NetworkNotSupported';

  constructor(genesisHash: string, message?: string) {
    super(
      message ||
        `wallet does not support network with genesis hash "${genesisHash}"`
    );

    this.genesisHash = genesisHash;
  }
}
