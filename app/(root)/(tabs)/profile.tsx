import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'


const profile = () => {
  return (
    <SafeAreaView className='flex flex-1'>
      <Header />
      <Text>
        profile
      </Text>
    </SafeAreaView>
  )
}

export default profile