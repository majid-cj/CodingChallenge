import {useRoute} from '@react-navigation/native'
import React, {FC} from 'react'
import {View} from 'react-native'
import {DetailRouteParams} from '~/navigation'

export const DetailScreen: FC = () => {
  const {params} = useRoute<DetailRouteParams>()
  return <View />
}
