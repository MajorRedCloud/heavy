import { useRootNavigationState, Redirect } from 'expo-router';
import { Appearance, useColorScheme } from 'react-native';


export default function InitalRouting() {
  const rootNavigationState = useRootNavigationState();
  
  if (!rootNavigationState?.key) return null;

  return <Redirect href={'/(tabs)/home'} />
}