// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import BaseError from './BaseError';

export default class NoWalletsDetectedError extends BaseError {
  public readonly code: ErrorCodeEnum = ErrorCodeEnum.NoWalletsDetectedError;
  public readonly name: string = 'NoWalletDetectedError';
}
