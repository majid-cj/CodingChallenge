import {Dimensions, StyleSheet} from 'react-native'

import {Theme} from '@react-navigation/native'

const {width} = Dimensions.get('screen')

export const emptyListStyle = ({fonts, colors}: Theme) =>
  StyleSheet.create({
    container: {
      width,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      marginVertical: 56,
      padding: 56,
    },
    text: {
      ...fonts.medium,
      textAlign: 'center',
      marginTop: 4,
    },
  })

export const spinnerStyle = ({colors}: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
  })

export const toolBarStyles = ({colors}: Theme) =>
  StyleSheet.create({
    container: {
      width,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.background,
      padding: 32,
      height: width / 5,
    },
    area: {
      width: 56,
      height: 56,
    },
  })

export const spacerStyle = ({colors}: Theme, height: number = 4, visible: boolean = false) =>
  StyleSheet.create({
    container: {
      width,
      backgroundColor: visible ? colors.primary : 'transparent',
      height: height,
    },
  })
