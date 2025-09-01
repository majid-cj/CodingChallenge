import React, {FC, useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

import {Screen} from '~/core/components'
import {Spacer} from '~/core/components/ui'
import {CryptocurrencyData, CryptocurrencyList} from '~/resource'
import {AppReducer} from '~/state'
import {CryptocurrencyListView, HorizontalFilter} from './components'

export const HomeScreen: FC = () => {
  const [cryptocurrencyData, setCryptocurrencyData] = useState<CryptocurrencyData>({})
  const [currentNetwork, setCurrentNetwork] = useState<string>('')
  const {data} = useSelector((state: AppReducer) => state.cryptoList)

  useEffect(() => {}, [data])

  function groupByNetworkAndYear(list: CryptocurrencyList): CryptocurrencyData {
    return {}
  }

  const handleOnSelectNetwork = (network: string) => {}

  return (
    <Screen header={<HorizontalFilter data={[]} selected={currentNetwork} onSelect={handleOnSelectNetwork} />}>
      <CryptocurrencyListView data={[]} />
      <Spacer size={'lg'} />
    </Screen>
  )
}
