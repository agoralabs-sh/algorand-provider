// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import BaseError from './BaseError';

export default class WalletDoesNotExistError extends BaseError {
  public readonly code: ErrorCodeEnum = ErrorCodeEnum.WalletDoesNotExistError;
  public readonly id: string;
  public readonly name: string = 'WalletDoesNotExistError';

  constructor(id: string, message?: string) {
    super(message || `wallet "${id}" does not exist`);

    this.id = id;
  }
}
