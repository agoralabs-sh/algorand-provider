enum ErrorCodeEnum {
  // general errors
  UnknownError = 4000,
  NoWalletsDetectedError = 4001,
  WalletDoesNotExistError = 4002,
  WalletFeatureNotAvailableError = 4003,
  OperationCanceledError = 4004,
  NetworkNotSupportedError = 4005,
}

export default ErrorCodeEnum;
