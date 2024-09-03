import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import { FlashList } from "@shopify/flash-list";
import WorkoutCard from '@/components/WorkoutCard';

const mockData : DataType[] = [
  {
    id: 132895789324,
    userName: 'Eurotrash',
    userProfile: "https://picsum.photos/seed/picsum/200/300",
    duration: 71,
    volumeLifted: 12000,
    volumeUnit: 'lbs',
    timeCreated: new Date(),
    workouts: [
      {
        id: 123,
        name: "Pull Up",
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        sets: 2, 
        reps: [10,12] 
      },
      {
        id: 124,
        name: "Push Up",
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        sets: 3, 
        reps: [10,12,15] 
      },
      {
        id: 125,
        name: "Squat",
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        sets: 3, 
        reps: [10,12,15] 
      }
  ]
  },
  {
    id: 132895789324,
    userName: 'Eurotrash',
    userProfile: "https://picsum.photos/seed/picsum/200/300",
    duration: 71,
    volumeLifted: 12000,
    volumeUnit: 'lbs',
    timeCreated: new Date(),
    workouts: [
      {
        id: 123,
        name: "Pull Up",
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        sets: 2, 
        reps: [10,12] 
      },
      {
        id: 124,
        name: "Push Up",
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        sets: 3, 
        reps: [10,12,15] 
      },
      {
        id: 125,
        name: "Squat",
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        sets: 3, 
        reps: [10,12,15] 
      }
  ]
  },
  {
    id: 132895789324,
    userName: 'Eurotrash',
    userProfile: "https://picsum.photos/seed/picsum/200/300",
    duration: 71,
    volumeLifted: 12000,
    volumeUnit: 'lbs',
    timeCreated: new Date(),
    workouts: [
      {
        id: 123,
        name: "Pull Up",
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        sets: 2, 
        reps: [10,12] 
      },
      {
        id: 124,
        name: "Push Up",
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        sets: 3, 
        reps: [10,12,15] 
      },
      {
        id: 125,
        name: "Squat",
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        sets: 3, 
        reps: [10,12,15] 
      }
  ]
  },
]

const home = () => {
  return (
    <SafeAreaView className='flex flex-1 bg-zinc-900'>
      <Header />
      <View className='flex flex-1 mt-5'>
      <FlashList
        data={mockData}
        estimatedItemSize={58}
        renderItem={({item}) => <WorkoutCard item={item} />}
      />
      </View>
    </SafeAreaView>
  )
}

export default home