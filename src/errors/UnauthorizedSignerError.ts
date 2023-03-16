// Enums
import { ErrorCodeEnum } from '../enums';

// Errors
import BaseError from './BaseError';

export default class UnauthorizedSignerError extends BaseError {
  public readonly code: ErrorCodeEnum = ErrorCodeEnum.UnauthorizedSignerError;
  public readonly signer: string;
  public readonly name: string = 'UnauthorizedSignerError';

  constructor(signer: string, message?: string) {
    super(message || `signer "${signer}" not authorized`);

    this.signer = signer;
  }
}
