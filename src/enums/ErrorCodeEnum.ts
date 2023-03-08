enum ErrorCodeEnum {
  // general errors
  UnknownError = 4000,
  NoWalletsDetectedError = 4001,
  WalletDoesNotExistError = 4002,
  // wallet errors
  WalletFeatureNotAvailableError = 4100,
  OperationCanceledError = 4101,
  NetworkNotSupportedError = 4102,
  UnauthorizedSignerError = 4103,
}

export default ErrorCodeEnum;
