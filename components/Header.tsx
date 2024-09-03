import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView>
      <View className="w-full h-14 bg-zinc-900 flex flex-row justify-between items-center absolute ">
        <TouchableOpacity className="bg-zinc-800 w-[100px] px-4 mx-4 flex flex-row space-x-1.5 items-center rounded-md py-0.5">
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
};

export default Header;
