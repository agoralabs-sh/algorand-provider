// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import BaseError from './BaseError';

export default class InvalidInputError extends BaseError {
  public readonly code: ErrorCodeEnum = ErrorCodeEnum.InvalidInputError;
  public readonly name: string = 'InvalidInputError';
}
