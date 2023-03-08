// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import BaseError from './BaseError';

export default class ConnectRequestDeniedError extends BaseError {
  public readonly code: ErrorCodeEnum = ErrorCodeEnum.ConnectRequestDeniedError;
  public readonly name: string = 'ConnectRequestDeniedError';
}
