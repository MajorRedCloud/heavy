import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const WorkoutCard = ({item} : WorkoutCardType) => {

  return (
    <TouchableWithoutFeedback>
        {/* xx implement touch */}
        <View className={`flex flex-col m-1 mb-5 overflow-hidden bg-black px-3 py-3`}>
        <View className='flex flex-row ml-2'>
            <Image 
                source={{uri: item.userProfile}}
                className='h-12 w-12 rounded-full'
                resizeMode='cover'
            />
            <View className='flex flex-col ml-4 items-start'>
                <Text className='text-white text-lg font-medium'>{item.userName}</Text>
                {/* xx make it dynamic */}
                <Text className='text-gray-600 text-sm'>a year ago</Text>
            </View>
        </View>

        {/* View for workout title display */}
        <View className='ml-2 mt-3'>
            <Text className='font-bold text-white text-xl'>
                {/* xx dynamic calcullation */}
                Evening Workout 🏋️‍♂️
            </Text>
        </View>

        {/* View for time, volume and records */}
        <View className='flex flex-row flex-1 ml-2 mt-4 items-center justify-start space-x-5'>
            <View className='flex flex-col min-w-[80px] overflow-hidden'>
                <Text className='text-gray-400 text-sm'>
                    Time
                </Text>
                <Text className='text-white text-lg'>
                    {item.duration} mins
                </Text>
            </View>
            <View className='flex flex-col min-w-[80px] overflow-hidden'>
                <Text className='text-gray-400 text-sm'>
                    Volume
                </Text>
                <Text className='text-white text-lg'>
                    {item.volumeLifted} {item.volumeUnit}
                </Text>
            </View>
            <View className='flex flex-col min-w-[80px] overflow-hidden'>
                <Text className='text-gray-400 text-sm'>
                    Records
                </Text>
                <Text className='text-white text-lg'>
                    10 🥇
                </Text>
            </View>
        </View>

        <View className='border-[0.5px] border-gray-800 my-4 mx-1'/>

        <View className='ml-2 flex flex-col flex-1'>
            <Text className='text-gray-400 text-lg font-medium'>
                Workout
            </Text>

            <View className='flex flex-row w-full space-x-4 mt-2 items-center'>
                <Image 
                    source={{uri: item.workouts[0].imageUrl}}
                    resizeMode='cover'
                    className='h-11 w-11 rounded-full'
                />
                <Text className='text-white font-normal text-lg'>
                    {item.workouts[0].sets} sets {item.workouts[0].name}
                </Text>
            </View>
            <View className='flex flex-row w-full space-x-4 mt-3 items-center'>
                <Image 
                    source={{uri: item.workouts[1].imageUrl}}
                    resizeMode='cover'
                    className='h-11 w-11 rounded-full'
                />
                <Text className='text-white font-normal text-lg'>
                    {item.workouts[1].sets} sets {item.workouts[1].name}
                </Text>
            </View>
            <View className='flex flex-row w-full space-x-4 mt-3 items-center'>
                <Image 
                    source={{uri: item.workouts[2].imageUrl}}
                    resizeMode='cover'
                    className='h-11 w-11 rounded-full'
                />
                <Text className='text-white font-normal text-lg'>
                    {item.workouts[2].sets} sets {item.workouts[2].name}
                </Text>
            </View>

            {item.workouts.length > 3 && (
            <View className=' mt-2 w-full flex flex-row items-center justify-center'>
                <Text className='text-gray-500 font-medium'>
                    See {item.workouts.length - 3} more workouts
                </Text>
            </View>
            )}

            <View className='border-[0.5px] border-gray-800 mt-4 mx-1'/>

            <View className='flex flex-1 flex-row mt-3 items-center justify-around '>
                <TouchableOpacity>
                <AntDesign name="like2" size={24} color="white" />
                </TouchableOpacity>
                <Text className='text-gray-800 font-bold text-2xl'>
                    |
                </Text>
                <TouchableOpacity>
                <Ionicons name="share-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>

        </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default WorkoutCard