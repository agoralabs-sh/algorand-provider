// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import BaseError from './BaseError';

export default class WalletFeatureNotAvailableError extends BaseError {
  public readonly code: ErrorCodeEnum =
    ErrorCodeEnum.WalletFeatureNotAvailableError;
  public readonly feature: string;
  public readonly id: string;
  public readonly name: string = 'WalletFeatureNotAvailableError';

  constructor(id: string, feature: string, message?: string) {
    super(
      message ||
        `wallet feature "${feature}" is not available for wallet "${id}"`
    );

    this.feature = feature;
    this.id = id;
  }
}
