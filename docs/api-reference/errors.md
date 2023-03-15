# Errors

## Summary

| Code | Name                                                                      | Summary                                                                     |
|------|---------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| 4000 | [`UnknownError`](#unknownerror)                                           | The default error response, usually indicates something is not quite right. |
| 4001 | [`OperationCanceledError`](#operationcancelederror)                       | When a user has rejected the operation.                                     |
| 4002 | [`NoWalletsDetectedError`](#nowalletsdetectederror)                       | No wallets have been initialized.                                           |
| 4003 | [`WalletDoesNotExistError`](#walletdoesnotexisterror)                     | The specified wallet does not exist.                                        |
| 4100 | [`UnauthorizedSignerError`](#unauthorizedsignererror)                     | The wallet has not given permission to use a specified signer.              |
| 4200 | [`WalletOperationNotSupportedError`](#walletoperationnotsupportederror)   | The wallet does not support this operation.                                 |
| 4203 | [`NetworkNotSupportedError`](#networknotsupportederror)                   | Network is not supported.                                                   |
| 4400 | [`FailedToPostSomeTransactionsError`](#failedtopostsometransactionserror) | When some transactions were not sent properly.                              |

## `UnknownError`

This error is the default error and serves as the "catch all" error. This usually occurs when something has happened that is outside the bounds of graceful handling. You can check the `UnknownError.message` string for more information.

#### Properties

| Name    | Type     | Value | Description                      |
|---------|----------|-------|----------------------------------|
| code    | `number` | 4000  | A canonical code for this error. |
| message | `string` | -     | A human readable message.        |

## `OperationCanceledError`

This error is thrown when a user has rejected or canceled the requested action on the wallet. For example, the user decides to cancel the signing of a transaction.

#### Properties

| Name    | Type     | Value | Description                      |
|---------|----------|-------|----------------------------------|
| code    | `number` | 4001  | A canonical code for this error. |
| message | `string` | -     | A human readable message.        |

## `NoWalletsDetectedError`

This can be thrown by most [`AlgorandProvider`](algorand-provider) methods and indicates that no wallets have been initialized.

#### Properties

| Name    | Type     | Value | Description                      |
|---------|----------|-------|----------------------------------|
| code    | `number` | 4002  | A canonical code for this error. |
| message | `string` | -     | A human readable message.        |

## `WalletDoesNotExistError`

This can be thrown by most [`AlgorandProvider`](algorand-provider) methods and indicates that the wallet that has been specified, by its ID, does not exist in the list of wallets.

#### Properties

| Name    | Type     | Value | Description                      |
|---------|----------|-------|----------------------------------|
| code    | `number` | 4003  | A canonical code for this error. |
| id      | `string` | -     | The ID of the wallet.            |
| message | `string` | -     | A human readable message.        |

## `UnauthorizedSignerError`

This error is thrown when a provided account has been specified, but the wallet has not given permission to use that account as a signer.

#### Properties

| Name    | Type     | Value | Description                                                    |
|---------|----------|-------|----------------------------------------------------------------|
| code    | `number` | 4100  | A canonical code for this error.                               |
| message | `string` | -     | A human readable message.                                      |
| signer  | `string` | -     | The address (public key) of the signer that is not authorized. |

## `WalletOperationNotSupportedError`

This can be thrown by most [`AlgorandProvider`](algorand-provider) methods and indicates that the wallet does not support the operation you are trying to perform.

#### Properties

| Name      | Type     | Value | Description                                      |
|-----------|----------|-------|--------------------------------------------------|
| code      | `number` | 4200  | A canonical code for this error.                 |
| id        | `string` | -     | The ID of the wallet.                            |
| message   | `string` | -     | A human readable message.                        |
| operation | `string` | -     | The name of the operation that is not supported. |

## `NetworkNotSupportedError`

This error is thrown when a provided genesis hash is not supported by the wallet.

#### Properties

| Name        | Type     | Value | Description                                            |
|-------------|----------|-------|--------------------------------------------------------|
| code        | `number` | 4203  | A canonical code for this error.                       |
| genesisHash | `string` | -     | The genesis hash of the network that is not supported. |
| message     | `string` | -     | A human readable message.                              |

## `FailedToPostSomeTransactionsError`

This error is thrown when some transactions failed to be posted to the network.

#### Properties

| Name          | Type                                 | Value | Description                                                                                                                                                                           |
|---------------|--------------------------------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code          | `number`                             | 4400  | A canonical code for this error.                                                                                                                                                      |
| message       | `string`                             | -     | A human readable message.                                                                                                                                                             |
| successTxnIDs | <code>(string  &#124; null)[]</code> | -     | This will correspond to the `stxns` list sent in `postTxns` and will contain the ID of those transactions that were successfully committed to the blockchain, or null if they failed. |
