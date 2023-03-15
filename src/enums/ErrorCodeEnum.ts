enum ErrorCodeEnum {
  // provider errors
  UnknownError = 4000,
  OperationCanceledError = 4001,
  NoWalletsDetectedError = 4002,
  WalletDoesNotExistError = 4003,
  UnauthorizedSignerError = 4100,
  WalletOperationNotSupportedError = 4200,
  NetworkNotSupportedError = 4203,
  FailedToPostSomeTransactionsError = 4400,
}

export default ErrorCodeEnum;
