// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import BaseError from './BaseError';

export default class InvalidGroupIdError extends BaseError {
  public readonly code: ErrorCodeEnum = ErrorCodeEnum.InvalidGroupIdError;
  public readonly computedGroupId: string;
  public readonly name: string = 'InvalidGroupIdError';

  constructor(computedGroupId: string, message?: string) {
    super(message || `computed group id "${computedGroupId}"`);

    this.computedGroupId = computedGroupId;
  }
}
