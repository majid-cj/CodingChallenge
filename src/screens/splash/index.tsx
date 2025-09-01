import {FC, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {useFocusEffect, useNavigation} from '@react-navigation/native'

import {StackNavigation} from '~/navigation'
import {AppReducer} from '~/state'
import {getCryptoListAction} from '~/state/currency'

export const SplashScreen: FC = () => {
  const dispatch = useDispatch()
  const {navigate} = useNavigation<StackNavigation>()
  const {error, data} = useSelector((state: AppReducer) => state.cryptoList)

  useFocusEffect(
    useCallback(() => {
      dispatch(getCryptoListAction())
    }, [dispatch])
  )

  useEffect(() => {
    if (error) {
    }

    if (data) {
      navigate('HOME')
    }
  }, [error, data, navigate])

  return null
}
