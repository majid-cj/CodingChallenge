import React, {FC, useEffect} from 'react'

import {NavigationContainer, RouteProp} from '@react-navigation/native'
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'

import {Cryptocurrency} from '~/resource/models'
import {DetailScreen} from '~/screens/detail'
import {HomeScreen} from '~/screens/home'
import {SplashScreen} from '~/screens/splash'
import {setupNetwork} from '~/service/network'

export type APP_NAVIGATION = {
  SPLASH: undefined
  HOME: undefined
  DETAIL: {currency: Cryptocurrency}
}

const {Navigator, Screen} = createNativeStackNavigator<APP_NAVIGATION>()

export type DetailRouteParams = RouteProp<APP_NAVIGATION, 'DETAIL'>

export type StackNavigation = NativeStackNavigationProp<APP_NAVIGATION, keyof APP_NAVIGATION>

export const AppNavigation: FC = () => {
  useEffect(() => {
    setupNetwork()
  }, [])

  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name={'SPLASH'} component={SplashScreen} />
        <Screen name={'HOME'} component={HomeScreen} />
        <Screen name={'DETAIL'} component={DetailScreen} />
      </Navigator>
    </NavigationContainer>
  )
}
