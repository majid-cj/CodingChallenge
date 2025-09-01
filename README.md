using this API `https://api.moonpay.com/v3/currencies`

i want you to list all currency and create a filter where you filter currency based on network code `networkCode`

we are using these types

```
export interface CryptocurrencyMetadata {
  contractAddress: string
  coinType: string
  chainId: string
  networkCode: string
}

export interface Cryptocurrency {
  id: string
  createdAt: string
  updatedAt: string
  type: string
  name: string
  code: string
  precision: number
  decimals: number
  icon: string
  maxAmount: number | null
  minAmount: number | null
  minBuyAmount: number
  maxBuyAmount: number | null
  isSellSupported: boolean
  isUtxoCompatible: boolean
  notAllowedUSStates: string[]
  notAllowedCountries: string[]
  addressRegex: string
  testnetAddressRegex: string
  supportsAddressTag: boolean
  addressTagRegex: string | null
  supportsTestMode: boolean
  supportsLiveMode: boolean
  isSuspended: boolean
  isStableCoin: boolean
  minSellAmount: number
  maxSellAmount: number
  isSwapBaseSupported: boolean
  isSwapQuoteSupported: boolean
  isBaseAsset: boolean
  isSupportedInUS: boolean
  metadata: CryptocurrencyMetadata
}

export type CryptocurrencyList = Cryptocurrency[]

export interface CryptocurrencyData {
  [key: string]: Cryptocurrency[]
}

```

from `CryptocurrencyList` i want to create a list of all `networkCode` and use this list to fliter `CryptocurrencyData`


the solution should be dynamic for any length
and not breaking the current views

first group crypto list based on network code as follow

and using the selected filtered item render the array from that object

```
{
  polygon: [],
  ethereum,: [],
}
```

1- when we pic one item the list should be filtered
2- default selection of first item when you recieve the `CryptocurrencyList`