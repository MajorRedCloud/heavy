import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import { FlashList } from '@shopify/flash-list';
import exercises from '@/constants/exercises';
import { filterExercises } from '@/lib/utils';

const search = () => {

    const [query, setQuery] = useState('')
    const [data, setData] = useState(exercises)

    useEffect(() => {
        const filteredData = filterExercises(data, query)
        setData(filteredData)

        if(query === ''){
            setData(exercises)
        }
    }, [query])

  return (
    <SafeAreaView className='flex flex-1 bg-black'>
        <Header type='search'/>
        <View className='mt-9 mx-3 flex flex-1'>
            <View className='flex flex-row bg-zinc-900 px-4 py-2 rounded-md space-x-3 items-center'>
                <AntDesign name="search1" size={24} color="#6b7280" />
                <TextInput 
                    value={query}
                    onChangeText={setQuery}
                    placeholder='Search for exercises'
                    placeholderTextColor={'#6b7280'}
                    className='text-white placeholder:text-base w-full'
                />
            </View>

            {/* xx implement filters for all muscles */}

            {/* xx implement recent exercises, fetch details from database */}
            <Text className='text-gray-500 font-medium mt-6'>
                All Exercises
            </Text>

        
            <FlashList
            data={data}
            estimatedItemSize={48}
            contentContainerStyle={{paddingTop: 10}}
            renderItem={({item}) => {
                return(
                    <>
                    <TouchableOpacity className='flex flex-row space-x-3 my-4'
                        onPress={() => console.log(item.name)}
                    >      
                        <View>
                            <Image 
                                source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
                                resizeMode='cover'
                                className='h-14 w-14 rounded-full'
                            />
                        </View>
                        <View className='flex flex-col justify-around'>
                            <Text className='text-white text-lg font-semibold'>
                                {item.name}
                            </Text>
                            <Text className='text-gray-300 text-base font-medium'>
                                {item.category}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View className='border-[0.5px] w-full border-gray-900'/>

                    </>
                )
            }}

            />
            
        </View>
    </SafeAreaView>
  )
}

export default search