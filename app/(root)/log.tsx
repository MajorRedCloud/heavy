import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'

const log = () => {

  // xx make it dynamic
  const workoutCount = 0

  const router = useRouter()

  return (
    <SafeAreaView className='flex flex-1 bg-black'>
      <Header type='log'/>
      <View className='flex flex-row justify-around space-x-4 mt-7'>
        <View className='flex flex-col space-y-1 items-center justify-center min-w-[33%] '>
          <Text className='text-gray-600 text-sm'>
            Duration
          </Text>
          <Text className='text-base text-blue-600'>
            1h 30m
          </Text>
        </View>

        <View className='flex flex-col space-y-1 items-center justify-center min-w-[32%] '>
          <Text className='text-gray-600 text-sm'>
            Volume
          </Text>
          <Text className='text-base text-white'>
            0 lbs
          </Text>
        </View>

        <View className='flex flex-col space-y-1 items-center justify-center min-w-[32%] '>
          <Text className='text-gray-600 text-sm'>
            Sets
          </Text>
          <Text className='text-base text-white'>
            0
          </Text>
        </View>
      </View>

      <View className='border-[0.5px] border-gray-800 flex my-3'/>

        {workoutCount === 0 ? (
          <View className='my-10 mx-4 flex items-center justify-center'>
            <FontAwesome5 name="dumbbell" size={50} color="white" />
            <Text className='text-white text-xl font-semibold mt-8'>
              Get Started
            </Text>
            <Text className='text-gray-600 text-lg mt-1 font-medium'>
              Add an exercise to get started
            </Text>
            <TouchableOpacity 
              className='flex flex-row space-x-4 w-full py-2 px-5 items-center justify-center bg-blue-500 mt-3 rounded-xl'
              onPress={() => router.push('/(root)/search')}
              >
            <AntDesign name="plus" size={24} color="white" />
              <Text className='text-white font-medium text-lg'>
                Add Exercise
              </Text>
            </TouchableOpacity>

            <View className='flex flex-row space-x-3 mt-4 w-full justify-between'>
              <TouchableOpacity className='h-10 w-[48%] bg-zinc-900 justify-center items-center rounded-xl'>
                <Text className='text-white text-base font-medium text-center'>
                  Settings
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className='h-10 w-[48%] bg-zinc-900 justify-center items-center rounded-xl'>
                <Text className='text-red-500 text-center font-medium text-base'>
                  Discard Workout
                </Text>
              </TouchableOpacity>
            </View>

          </View>
          
        ) : (
          // xx add list of exercises
          <View>
            <Text>
              hel
            </Text>
          </View>
        )}



    </SafeAreaView>
  )
}

export default log