// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import BaseError from './BaseError';

export default class OperationCanceledError extends BaseError {
  public readonly code: ErrorCodeEnum = ErrorCodeEnum.OperationCanceledError;
  public readonly name: string = 'OperationCanceledError';
}
