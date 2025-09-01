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
