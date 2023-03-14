# Errors

| Code | Name                                                                     | Summary                                                                     |
|------|--------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| 4000 | [`UnknownError`](#4000-unknownerror)                                     | The default error response, usually indicates something is not quite right. |
| 4001 | [`NoWalletsDetectedError`](#4001-nowalletsdetectederror)                 | No wallets have been initialized.                                           |
| 4002 | [`WalletDoesNotExistError`](#4002-walletdoesnotexisterror)               | The specified wallet does not exist.                                        |
| 4100 | [`WalletFeatureNotAvailableError`](#4100-walletfeaturenotavailableerror) | The wallet does not support this feature.                                   |
| 4101 | [`OperationCanceledError`](#4101-operationcancelederror)                 | When a user has rejected the action.                                        |
| 4102 | [`NetworkNotSupportedError`](#4102-networknotsupportederror)             | Network is not supported.                                                   |
| 4103 | [`UnauthorizedSignerError`](#4103-unauthorizedsignererror)               | The wallet has not given permission to use a specified signer.              |

## 4000 `UnknownError`

This error is the default error and serves as the "catch all" error. This usually occurs when something has happened that is outside the bounds of graceful handling. You can check the `UnknownError.message` string for more information.

## 4001 `NoWalletsDetectedError`

This can be thrown by most [`AlgorandProvider`](algorand-provider) methods and indicates that no wallets have been initialized.

## 4002 `WalletDoesNotExistError`

This can be thrown by most [`AlgorandProvider`](algorand-provider) methods and indicates that the wallet that has been specified, by its ID, does not exist in the list of wallets.

## 4100 `WalletFeatureNotAvailableError`

This can be thrown by most [`AlgorandProvider`](algorand-provider) methods and indicates that the wallet does not support the method you are trying to perform.

## 4101 `OperationCanceledError`

This error is thrown when a user has rejected or canceled the requested action on the wallet. For example, the user decides to cancel the signing of a transaction.

## 4102 `NetworkNotSupportedError`

This error is thrown when a provided genesis hash is not supported by the wallet.

## 4103 `UnauthorizedSignerError`

This error is thrown when a provided account has been specified, but the wallet has not given permission to use that account as a signer.
