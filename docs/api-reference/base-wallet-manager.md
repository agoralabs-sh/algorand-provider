# BaseWalletManager

* [Methods](#methods)
  * [`enable([options])`](#enableoptions)
  * [`postTxns(options)`](#posttxnsoptions)
  * [`signBytes(options)`](#signbytesoptions)
  * [`signTxns(options)`](#signtxnsoptions)
* [Types](#types)
  * [`IEnableOptions`](#ienableoptions)
  * [`IEnableResult`](#ienableresult)
  * [`IPostTxnsOptions`](#iposttxnsoptions)
  * [`IPostTxnsResult`](#iposttxnsresult)
  * [`ISignBytesOptions`](#isignbytesoptions)
  * [`ISignBytesResult`](#isignbytesresult)
  * [`ISignTxnsOptions`](#isignbytesoptions)
  * [`ISignTxnsResult`](#isignbytesresult)
  * [`IWalletAccount`](#iwalletaccount)
  * [`IWalletTransaction`](#iwallettransaction)

## Methods

### `enable([options])`

> Enables to a wallet.

#### Parameters

| Name    | Type                                | Required | Default | Description                                   |
|---------|-------------------------------------|----------|---------|-----------------------------------------------|
| options | [`IEnableOptions`](#enableoptions)  | no       | -       | An object to specify which network to enable. |

#### Returns

| Type                                       | Description                                                                                      |
|--------------------------------------------|--------------------------------------------------------------------------------------------------|
| Promise<[`IEnableResult`](#ienableresult)> | An object containing the enabled accounts, the enabled network and optional session information. |

#### Throws

| Type                                                          | Description                                                                       |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`OperationCanceledError`](errors#operationcancelederror)     | If the request to enable the wallet was denied by the user.                       |
| [`NetworkNotSupportedError`](errors#networknotsupportederror) | If the network, as specified by the genesis hash, is not supported by the wallet. |

### `postTxns(options)`

> Posts a list of signed transactions to the network.

:::note

This function is optional.

:::

#### Parameters

| Name    | Type                                    | Required | Default | Description                                                             |
|---------|-----------------------------------------|----------|---------|-------------------------------------------------------------------------|
| options | [`IPostTxnsOptions`](#iposttxnsoptions) | yes      | -       | An object containing the signed transactions to be sent to the network. |

#### Returns

| Type                                           | Description                                                                             |
|------------------------------------------------|-----------------------------------------------------------------------------------------|
| Promise<[`IPostTxnsResult`](#iposttxnsresult)> | An object containing the IDs of the transactions that were committed to the blockchain. |

#### Throws

| Type                                                                            | Description                                                       |
|---------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`OperationCanceledError`](errors#operationcancelederror)                       | If the request to sign the transactions was canceled by the user. |
| [`FailedToPostSomeTransactionsError`](errors#failedtopostsometransactionserror) | If some transactions were not sent properly.                      |

### `signBytes(options)`

> Signs an arbitrary piece of data. The returned signature can be verified using [algosdk.verifyBytes](https://algorand.github.io/js-algorand-sdk/functions/verifyBytes.html).

:::note

This function is optional.

:::

#### Parameters

| Name    | Type                                      | Required | Default | Description                                            |
|---------|-------------------------------------------|----------|---------|--------------------------------------------------------|
| options | [`ISignBytesOptions`](#isignbytesoptions) | yes      | -       | An object to specify the data, and the account to use. |

#### Returns

| Type                                             | Description                                                                        |
|--------------------------------------------------|------------------------------------------------------------------------------------|
| Promise<[`ISignBytesResult`](#isignbytesresult)> | An object containing the ID of the wallet used and a signature of the signed data. |

#### Throws

| Type                                                        | Description                                           |
|-------------------------------------------------------------|-------------------------------------------------------|
| [`OperationCanceledError`](errors#operationcancelederror)   | If the request to sign data was canceled by the user. |
| [`UnauthorizedSignerError`](errors#unauthorizedsignererror) | If supplied signer is not authorized by the wallet.   |

### `signTxns(options)`

> Sends a list of transactions to be signed. The transactions must conform to [ARC-0001](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0001.md).

:::note

This function is optional.

:::

#### Parameters

| Name    | Type                                    | Required | Default | Description                                                          |
|---------|-----------------------------------------|----------|---------|----------------------------------------------------------------------|
| options | [`ISignTxnsOptions`](#isigntxnsoptions) | yes      | -       | An object containing a list of transaction information to be signed. |

#### Returns

| Type                                           | Description                                                                     |
|------------------------------------------------|---------------------------------------------------------------------------------|
| Promise<[`ISignTxnsResult`](#isigntxnsresult)> | An object containing the signed transactions ready to be posted to the network. |

#### Throws

| Type                                                        | Description                                                                              |
|-------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`OperationCanceledError`](errors#operationcancelederror)   | If the request to sign the transactions was canceled by the user.                        |
| [`UnauthorizedSignerError`](errors#unauthorizedsignererror) | If supplied signer is not authorized by the wallet.                                      |
| [`InvalidGroupIdError`](errors#invalidgroupiderror)         | If computed group ID for the supplied transactions does not match the assigned group ID. |

## Types

### `IEnableOptions`

| Name        | Type     | Required | Default | Description                                                                                                                                                                                                                                  |
|-------------|----------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| genesisHash | `string` | no       | -       | The genesis hash of the network. If this is not specified, it is the wallet's decision to choose an appropriate network. See Algorand's [networks](https://developer.algorand.org/docs/get-details/algorand-networks/) for more information. |

### `IEnableResult`

| Name        | Type                                  | Required | Default | Description                                                  |
|-------------|---------------------------------------|----------|---------|--------------------------------------------------------------|
| accounts    | [`IWalletAccount[]`](#iwalletaccount) | yes      | -       | A list of available accounts for the wallet.                 |
| genesisHash | `string`                              | yes      | -       | The genesis hash of the network the wallet enabled.          |
| genesisId   | `string`                              | yes      | -       | The genesis ID of the network the wallet enabled.            |
| sessionId   | `string`                              | no       | -       | A unique identifier for this session provided by the wallet. |

### `IPostTxnsOptions`

| Name  | Type       | Required  | Default | Description                                                             |
|-------|------------|-----------|---------|-------------------------------------------------------------------------|
| stxns | `string[]` | yes       | -       | A list of base64 encoded signed transactions to be sent to the network. |

### `IPostTxnsResult`

| Name   | Type       | Required | Default | Description                                                                                          |
|--------|------------|----------|---------|------------------------------------------------------------------------------------------------------|
| txnIDs | `string[]` | yes      | -       | A list of 52-character base32 strings (without padding) corresponding the completed transaction IDs. |

### `ISignBytesOptions`

| Name   | Type         | Required | Default | Description                          |
|--------|--------------|----------|---------|--------------------------------------|
| data   | `Uint8Array` | yes      | -       | The arbitrary piece of data to sign. |
| signer | `string`     | no       | -       | The address to use to sign the data. |

### `ISignBytesResult`

| Name      | Type         | Required | Default | Description                                          |
|-----------|--------------|----------|---------|------------------------------------------------------|
| signature | `Uint8Array` | yes      | -       | The signature of the signed data with the MX prefix. |

### `ISignTxnsOptions`

| Name | Type                                          | Required | Default | Description                                                                                                                                       |
|------|-----------------------------------------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| txns | [`IWalletTransaction[]`](#iwallettransaction) | yes      | -       | A list of transactions to be signed as well as extra data used; if any accounts are re-keyed, are multisig or is part of a group of transactions. |

### `ISignTxnsResult`

| Name  | Type                                 | Required | Default | Description                                                                                                                                                                                                                                 |
|-------|--------------------------------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| stxns | <code>(string  &#124; null)[]</code> | yes      | -       | The list of base64 encoded signed transactions that is ready to be posted to the network. If any of the transactions were not signed by the wallet, and no `stxns` were supplied, then null will be in the place of the signed transaction. |

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
