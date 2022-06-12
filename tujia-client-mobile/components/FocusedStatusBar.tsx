import { StatusBar, StatusBarProps } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import React from 'react'

const FocusedStatusBar = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<StatusBar> & Readonly<StatusBarProps>) => {
  const isFocused = useIsFocused()
  return (
    isFocused ? <StatusBar animated={true} {...props} /> : null
  )
}

export default FocusedStatusBar