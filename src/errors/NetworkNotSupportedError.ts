// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import BaseError from './BaseError';

export default class NetworkNotSupportedError extends BaseError {
  public readonly code: ErrorCodeEnum = ErrorCodeEnum.NetworkNotSupportedError;
  public readonly genesisHash: string;
  public readonly name: string = 'NetworkNotSupportedError';

  constructor(genesisHash: string, message?: string) {
    super(
      message ||
        `wallet does not support network with genesis hash "${genesisHash}"`
    );

    this.genesisHash = genesisHash;
  }
}
