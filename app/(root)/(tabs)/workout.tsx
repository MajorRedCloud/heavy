import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { useRootNavigationState, Redirect } from 'expo-router';

const workout = () => {

  const router = useRouter();
  const rootNavigationState = useRootNavigationState();

  return (
    <SafeAreaView className='flex flex-1 bg-black'>
      <Header type='workout'/>
      <View className='m-5 flex '>
        <Text className='text-white text-lg font-bold mt-4'>
          Quick Start
        </Text>
        <TouchableOpacity 
          className='flex flex-row space-x-3 mt-4 p-3 px-4 items-center  rounded-lg bg-zinc-900'
          onPress={() => {
            router.push('/(root)/log')
          }}
          >
        <AntDesign name="plus" size={24} color="white" />
        <Text className='text-white text-lg font-semiBold items-center'>
          Start Empty Workout
        </Text>
        </TouchableOpacity>

        <Text className='text-white text-lg font-bold my-4'>
          Routines
        </Text>

        <View className='flex flex-row space-x-3'>
          <TouchableOpacity className='bg-zinc-900 h-20 w-[48%] items-center justify-center space-y-1 rounded-lg'>
            <Feather name="clipboard" size={24} color="white" />
            <Text className='text-center text-white text-base'>
              New Routine
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-zinc-900 h-20 w-[48%] items-center justify-center space-y-1 rounded-lg'>
          <AntDesign name="search1" size={24} color="white" />
            <Text className='text-center text-white text-base'>
              Explore Routines
            </Text>
          </TouchableOpacity>
        </View>

      
      </View>
    </SafeAreaView>
  )
}

export default workout