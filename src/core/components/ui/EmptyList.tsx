import React, {FC} from 'react'
import {Text, TouchableOpacity} from 'react-native'

import {emptyListStyle} from './styles'
import {useTheme} from '@react-navigation/native'

interface EmptyListProps {
  error: string
  onPress?: () => void
}

export const EmptyList: FC<EmptyListProps> = ({error, onPress}) => {
  const theme = useTheme()
  const styles = emptyListStyle(theme)
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={onPress}>
      <Text style={styles.text} numberOfLines={2}>
        {error}
      </Text>
    </TouchableOpacity>
  )
}
