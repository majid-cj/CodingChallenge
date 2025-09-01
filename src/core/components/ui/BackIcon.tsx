import {useTheme} from '@react-navigation/native'
import React, {FC} from 'react'
import {I18nManager} from 'react-native'

import {ArrowLeft, ArrowRight} from '~/core/resource/icons/common'

export const BackIcon: FC = () => {
  const theme = useTheme()
  const Icon = I18nManager.isRTL ? ArrowRight : ArrowLeft
  return <Icon color={theme.colors.text} size={24} />
}
