import { Stack } from 'expo-router/stack';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';

export default function Layout() {
  return (
        <NavigationContainer theme={DarkTheme} independent={true}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown : false}}/>
            <Stack.Screen name="+not-found" options={{ headerShown: true }} />
          </Stack>
        </NavigationContainer>
  );
}
