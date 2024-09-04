import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";

const Header = ({ type }: { type: string }) => {

  const router = useRouter();

   if (type==='home') return (
    <SafeAreaView>
      <View className="w-full h-14 bg-zinc-900 flex flex-row justify-between items-center absolute ">
        <TouchableOpacity 
          className="bg-zinc-800 w-[100px] px-4 mx-4 flex flex-row space-x-1.5 items-center rounded-md py-0.5"
          >
          <Text className="text-white text-lg">Home</Text>
          <MaterialIcons name="keyboard-arrow-down" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="mx-6">
          {/* xx implement search functionality */}
          <MaterialIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  if(type === 'workout') return (
    <SafeAreaView>
      <View className="w-full h-14 bg-zinc-900 flex flex-row items-center absolute justify-center">
        <Text className="text-white font-semibold text-lg">Workout</Text>
      </View>
      </SafeAreaView>
  )
  if(type === 'log') return (
    <SafeAreaView>
      <View className="w-full h-14 bg-zinc-900 flex flex-row items-center absolute justify-between">
        <View className="flex flex-row ml-4 space-x-3 items-center">
          <TouchableOpacity>
            <MaterialIcons name="keyboard-arrow-down" size={28} color="white" />
          </TouchableOpacity>
          <Text className="text-white font-medium text-lg">
            Log Workout
          </Text>
        </View>
        
        <View className="flex flex-row mr-5 items-center justify-between space-x-4">
        <AntDesign name="clockcircleo" size={24} color="white" />
        <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-md">
          <Text className="text-white font-medium text-base">Finish</Text>
        </TouchableOpacity>
        </View>
      
      </View>
    </SafeAreaView>
  )

  if(type == 'search') return (
    <SafeAreaView>
      <View className="w-full h-14 bg-zinc-900 flex flex-row items-center absolute justify-between">
        <TouchableOpacity onPress={() => router.push('/(root)/log')}>
          <Text className="text-sm text-blue-500 ml-4">
            cancel
          </Text>
        </TouchableOpacity>
        <Text className="text-white font-semibold text-base">Add Workout</Text>
        <TouchableOpacity>
          <Text className="text-sm text-blue-500 mr-4">
            create
          </Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
  )
};

export default Header;
