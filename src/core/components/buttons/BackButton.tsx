import React, {FC} from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'

import {useNavigation, useTheme} from '@react-navigation/core'
import {Theme} from '@react-navigation/native'

import {BackIcon} from '../ui'

interface Props {
  backAction?: () => void
}

export const BackButton: FC<Props> = ({backAction}) => {
  const {goBack} = useNavigation()
  const theme = useTheme()

  const styles = backButtonStyle(theme)
  return (
    <TouchableOpacity onPress={backAction ? backAction : goBack} style={styles.container} activeOpacity={0.9}>
      <BackIcon />
    </TouchableOpacity>
  )
}

const backButtonStyle = ({colors}: Theme) =>
  StyleSheet.create({
    container: {
      width: 48,
      height: 48,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
