import { Stack } from 'expo-router/stack';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';

export default function Layout() {
  return (
          <Stack>
            <Stack.Screen name="(root)" options={{headerShown : false}}/>
            <Stack.Screen name="+not-found" options={{ headerShown: true }} />
          </Stack>
  );
}
