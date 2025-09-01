import React, {FC} from 'react'
import {ActivityIndicator, View} from 'react-native'

import {spinnerStyle} from './styles'
import {useTheme} from '@react-navigation/native'

interface SpinnerProps {
  size?: number
}

export const Spinner: FC<SpinnerProps> = ({size = 125}) => {
  const theme = useTheme()
  const styles = spinnerStyle(theme)

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={theme.colors.notification} />
    </View>
  )
}
