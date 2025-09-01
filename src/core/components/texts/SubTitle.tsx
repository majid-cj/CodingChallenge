import React, {FC} from 'react'
import {StyleSheet, Text, TextProps} from 'react-native'

import {Theme, useTheme} from '@react-navigation/native'

interface SubTitleProps extends TextProps {
  text: string
  numberOfLines?: number
}

export const SubTitle: FC<SubTitleProps> = ({text, style, numberOfLines = 1, ...rest}) => {
  const theme = useTheme()
  const styles = subTitleStyle(theme)

  return (
    <Text style={StyleSheet.flatten([styles.text, style])} numberOfLines={numberOfLines} {...rest}>
      {text}
    </Text>
  )
}

const subTitleStyle = ({colors, fonts}: Theme) =>
  StyleSheet.create({
    text: {
      ...fonts.medium,
      textAlign: 'left',
      textAlignVertical: 'center',
      color: colors.text,
      flexWrap: 'wrap',
    },
  })
