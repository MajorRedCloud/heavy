import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const home = () => {
  return (
    <SafeAreaView className='flex flex-1 h-max bg-black'>
      <Text>home</Text>
    </SafeAreaView>
  )
}

export default home