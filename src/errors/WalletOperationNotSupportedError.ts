// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import BaseError from './BaseError';

export default class WalletOperationNotSupportedError extends BaseError {
  public readonly code: ErrorCodeEnum =
    ErrorCodeEnum.WalletOperationNotSupportedError;
  public readonly operation: string;
  public readonly id: string;
  public readonly name: string = 'WalletOperationNotSupportedError';

  constructor(id: string, operation: string, message?: string) {
    super(
      message ||
        `wallet operation "${operation}" is not supported for wallet "${id}"`
    );

    this.operation = operation;
    this.id = id;
  }
}
