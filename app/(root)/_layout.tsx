import { Stack } from 'expo-router/stack';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
          <Stack>
            <Stack.Screen name="search" options={{headerShown : false}}/>
            <Stack.Screen name="(tabs)" options={{headerShown : false}}/>
            <Stack.Screen name="log" options={{headerShown : false}}/>
          </Stack>
  );
}
