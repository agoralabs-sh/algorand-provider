# AlgorandProvider

* [Methods](#methods)
  * [`addWallet(wallet, [options])`](#addwalletwallet-options)
  * [`enable([options])`](#enableoptions)
  * [`getWallets()`](#getwallets)
  * [`setDefaultWallet(id)`](#setdefaultwalletid)
  * [`signBytes(options)`](#signbytesoptions)
  * [`signTxns(options)`](#signtxnsoptions)
* [Types](#types)
  * [`IAddWalletOptions`](#iaddwalletoptions)
  * [`IEnableOptions`](#ienableoptions)
  * [`IEnableResult`](#ienableresult)
  * [`ISignBytesOptions`](#isignbytesoptions)
  * [`ISignBytesResult`](#isignbytesresult)
  * [`ISignTxnsOptions`](#isignbytesoptions)
  * [`ISignTxnsResult`](#isignbytesresult)
  * [`IWalletAccount`](#iwalletaccount)
  * [`IWalletTransaction`](#iwallettransaction)

## Methods

### `addWallet(wallet, [options])`

> Adds a wallet, or if the `replace` option is set, will replace any existing wallet matched by the wallet's ID.

#### Parameters

| Name    | Type                                       | Required | Default | Description                                                       |
|---------|--------------------------------------------|----------|---------|-------------------------------------------------------------------|
| wallet  | [`BaseWalletManager`](base-wallet-manager) | yes      | -       | An initialized [`BaseWalletManager`](base-wallet-manager) to add. |
| options | [`IAddWalletOptions`](#iaddwalletoptions)  | no       | -       | An object to specify how the wallet is added.                     |

#### Returns

| Type   | Description |
|--------|-------------|
| `void` | -           |

### `enable([options])`

> Enables to a wallet. If the ID of the wallet is specified, that wallet is used, otherwise the default wallet is enabled.

#### Parameters

| Name    | Type                                | Required | Default | Description                                              |
|---------|-------------------------------------|----------|---------|----------------------------------------------------------|
| options | [`IEnableOptions`](#enableoptions)  | no       | -       | An object to specify which wallet and network to enable. |

#### Returns

| Type                                       | Description                                                                                      |
|--------------------------------------------|--------------------------------------------------------------------------------------------------|
| Promise<[`IEnableResult`](#ienableresult)> | An object containing the enabled accounts, the enabled network and optional session information. |

#### Throws

| Type                                                               | Description                                                                       |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`NoWalletsDetectedError`](errors#4001-nowalletsdetectederror)     | If no wallets have been added.                                                    |
| [`WalletDoesNotExistError`](errors#4002-walletdoesnotexisterror)   | If the wallet, as specified by its ID, does not exist.                            |
| [`OperationCanceledError`](errors#4101-operationcancelederror)     | If the request to enable the wallet was denied by the user.                       |
| [`NetworkNotSupportedError`](errors#4102-networknotsupportederror) | If the network, as specified by the genesis hash, is not supported by the wallet. |

### `getWallets()`

> Gets a list of all the wallets by their IDs.

#### Returns

| Type       | Description               |
|------------|---------------------------|
| `string[]` | A list of the wallet IDs. |

### `setDefaultWallet(id)`

> Sets the default wallet by ID. If the wallet does not exist, the default wallet is left unchanged.

#### Parameters

| Name    | Type     | Required | Default | Description                             |
|---------|----------|----------|---------|-----------------------------------------|
| id      | `string` | yes      | -       | The ID of the wallet to set to default. |

#### Returns

| Type   | Description |
|--------|-------------|
| `void` | -           |

### `signBytes(options)`

> Signs an arbitrary piece of data. The returned signature can be verified using [algosdk.verifyBytes](https://algorand.github.io/js-algorand-sdk/functions/verifyBytes.html).

#### Parameters

| Name    | Type                                      | Required | Default | Description                                                          |
|---------|-------------------------------------------|----------|---------|----------------------------------------------------------------------|
| options | [`ISignBytesOptions`](#isignbytesoptions) | yes      | -       | An object to specify the data, the account and which wallet to use.  |

#### Returns

| Type                                             | Description                                                                        |
|--------------------------------------------------|------------------------------------------------------------------------------------|
| Promise<[`ISignBytesResult`](#isignbytesresult)> | An object containing the ID of the wallet used and a signature of the signed data. |

#### Throws

| Type                                                                           | Description                                            |
|--------------------------------------------------------------------------------|--------------------------------------------------------|
| [`NoWalletsDetectedError`](errors#4001-nowalletsdetectederror)                 | If no wallets have been added.                         |
| [`WalletDoesNotExistError`](errors#4002-walletdoesnotexisterror)               | If the wallet, as specified by its ID, does not exist. |
| [`WalletFeatureNotAvailableError`](errors#4100-walletfeaturenotavailableerror) | If the wallet does not support the signing of data.    |
| [`OperationCanceledError`](errors#4101-operationcancelederror)                 | If the request to sign data was canceled by the user.  |
| [`UnauthorizedSignerError`](errors#4103-unauthorizedsignererror)               | If supplied signer is not authorized by the wallet.    |

### `signTxns(options)`

> Sends a list of transactions to be signed. The transactions must conform to [ARC-0001](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0001.md).

#### Parameters

| Name    | Type                                    | Required | Default | Description                                                                                     |
|---------|-----------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------|
| options | [`ISignTxnsOptions`](#isigntxnsoptions) | yes      | -       | An object containing any wallet information and a list of transaction information to be signed. |

#### Returns

| Type                                           | Description                                                                                                |
|------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Promise<[`ISignTxnsResult`](#isigntxnsresult)> | An object containing the wallet information and the signed transactions ready to be posted to the network. |

#### Throws

| Type                                                                           | Description                                                       |
|--------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`NoWalletsDetectedError`](errors#4001-nowalletsdetectederror)                 | If no wallets have been added.                                    |
| [`WalletDoesNotExistError`](errors#4002-walletdoesnotexisterror)               | If the wallet, as specified by its ID, does not exist.            |
| [`WalletFeatureNotAvailableError`](errors#4100-walletfeaturenotavailableerror) | If the wallet does not support the signing of transactions.       |
| [`OperationCanceledError`](errors#4101-operationcancelederror)                 | If the request to sign the transactions was canceled by the user. |
| [`UnauthorizedSignerError`](errors#4103-unauthorizedsignererror)               | If supplied signer is not authorized by the wallet.               |

## Types

### `IAddWalletOptions`

| Name        | Type      | Required | Default | Description                                                      |
|-------------|-----------|----------|---------|------------------------------------------------------------------|
| makeDefault | `boolean` | no       | `false` | Sets the added/replaced wallet as the default wallet.            |
| replace     | `boolean` | no       | `false` | Determines whether a matching wallet, by ID, should be replaced. |

### `IEnableOptions`

| Name        | Type     | Required | Default | Description                                                                                                                                                                                                                                  |
|-------------|----------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id          | `string` | no       | -       | The ID of the wallet to enable. If none is specified, then the default wallet is used.                                                                                                                                                       |
| genesisHash | `string` | no       | -       | The genesis hash of the network. If this is not specified, it is the wallet's decision to choose an appropriate network. See Algorand's [networks](https://developer.algorand.org/docs/get-details/algorand-networks/) for more information. |

### `IEnableResult`

| Name        | Type                                  | Required | Default | Description                                                  |
|-------------|---------------------------------------|----------|---------|--------------------------------------------------------------|
| accounts    | [`IWalletAccount[]`](#iwalletaccount) | yes      | -       | A list of available accounts for the wallet.                 |
| genesisHash | `string`                              | yes      | -       | The genesis hash of the network the wallet enabled.          |
| genesisId   | `string`                              | yes      | -       | The genesis ID of the network the wallet enabled.            |
| id          | `string`                              | yes      | -       | The ID of the wallet that was used.                          |
| sessionId   | `string`                              | no       | -       | A unique identifier for this session provided by the wallet. |

### `ISignBytesOptions`

| Name   | Type         | Required | Default | Description                                                                                          |
|--------|--------------|----------|---------|------------------------------------------------------------------------------------------------------|
| data   | `Uint8Array` | yes      | -       | The arbitrary piece of data to sign.                                                                 |
| id     | `string`     | no       | -       | The ID of the wallet to use to sign the data. If none is specified, then the default wallet is used. |
| signer | `string`     | no       | -       | The address to use to sign the data.                                                                 |

### `ISignBytesResult`

| Name        | Type                                  | Required | Default | Description                                          |
|-------------|---------------------------------------|----------|---------|------------------------------------------------------|
| id          | `string`                              | yes      | -       | The ID of the wallet that was used.                  |
| signature   | `Uint8Array`                          | yes      | -       | The signature of the signed data with the MX prefix. |

### `ISignTxnsOptions`

| Name | Type                                          | Required | Default | Description                                                                                                                                       |
|------|-----------------------------------------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| id   | `string`                                      | no       | -       | The ID of the wallet to use to sign the transactions. If none is specified, then the default wallet is used.                                      |
| txns | [`IWalletTransaction[]`](#iwallettransaction) | yes      | -       | A list of transactions to be signed as well as extra data used; if any accounts are re-keyed, are multisig or is part of a group of transactions. |

### `ISignTxnsResult`

| Name  | Type       | Required | Default | Description                                                                               |
|-------|------------|----------|---------|-------------------------------------------------------------------------------------------|
| id    | `string`   | yes      | -       | The ID of the wallet that was used.                                                       |
| stxns | `string[]` | yes      | -       | The list of base64 encoded signed transactions that is ready to be posted to the network. |

### `IWalletAccount`

| Name    | Type     | Required | Default | Description                              |
|---------|----------|----------|---------|------------------------------------------|
| address | `string` | yes      | -       | The address (public key) of the account. |
| name    | `string` | no       | -       | A human-readable name for this account.  |

### `IWalletTransaction`

| Name                                                                                                                                                                                                                      | Type                                                                                              | Required | Default | Description                                                                                                                                                                                                                                                                                            |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| authAddr                                                                                                                                                                                                                  | `string`                                                                                          | no       | -       | The auth address if the sender has rekeyed.                                                                                                                                                                                                                                                            |
| msig                                                                                                                                                                                                                      | [`MultisigMetadata`](https://algorand.github.io/js-algorand-sdk/interfaces/MultisigMetadata.html) | no       | -       | Extra metadata needed when sending multisig transactions.                                                                                                                                                                                                                                              |
| signers                                                                                                                                                                                                                   | `string[]`                                                                                        | no       | -       | A list of addresses to sign with (defaults to the sender in the transaction).                                                                                                                                                                                                                          |
| stxn                                                                                                                                                                                                                      | `string`                                                                                          | no       | -       | If this is part of a group of transactions, some of which are already signed you must also provide these signed transactions and the signers array MUST be undefined or empty, as per [ARC-0001](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0001.md#semantic-of-wallettransaction). |                                                                                                   |          |         |                                                                               |
| txn                                                                                                                                                                                                                       | `string`                                                                                          | yes      | -       | The base64 encoded unsigned transaction.                                                                                                                                                                                                                                                               |
