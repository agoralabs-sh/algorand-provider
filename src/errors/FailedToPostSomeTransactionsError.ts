// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import BaseError from './BaseError';

export default class FailedToPostSomeTransactionsError extends BaseError {
  public readonly code: ErrorCodeEnum =
    ErrorCodeEnum.FailedToPostSomeTransactionsError;
  public readonly name: string = 'FailedToPostSomeTransactionsError';
  public readonly successTxnIDs: (string | null)[];

  constructor(successTxnIDs: (string | null)[], message: string) {
    super(message);

    this.successTxnIDs = successTxnIDs;
  }
}
