enum ErrorCodeEnum {
  // general errors
  UnknownError = 4000,
  NoWalletsDetectedError = 4001,
  WalletDoesNotExistError = 4002,
  WalletFeatureNotAvailableError = 4003,

  // connect
  ConnectRequestDeniedError = 4100,
}

export default ErrorCodeEnum;
