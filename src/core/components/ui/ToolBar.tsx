import React, {FC, ReactElement} from 'react'
import {View} from 'react-native'

import {useNavigation, useTheme} from '@react-navigation/native'

import {BackButton} from '~/core/components/buttons'

import {toolBarStyles} from './styles'
import {SubTitle} from '../texts'

interface ToolBarProps {
  back?: boolean
  menuButton?: ReactElement
  leftButton?: ReactElement
  center?: ReactElement | string
}

export const ToolBar: FC<ToolBarProps> = ({back, center, menuButton, leftButton}) => {
  const theme = useTheme()
  const styles = toolBarStyles(theme)
  const {goBack} = useNavigation()

  const saveArea = <View style={styles.area} />

  return (
    <View style={styles.container}>
      {back ? <BackButton backAction={goBack} /> : leftButton || saveArea}
      {typeof center === 'string' ? <SubTitle text={center} /> : center}
      {menuButton || saveArea}
    </View>
  )
}
