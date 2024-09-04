import { Tabs } from 'expo-router'; 
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
            tabBarActiveTintColor: '#407ee3',
            tabBarShowLabel: true,
            tabBarStyle: {
              backgroundColor: 'rgb(39 39 42)',
              borderWidth: 0,
              borderColor: 'transparent',
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 5
            },
            tabBarLabelStyle:{
              fontWeight: '600',
              fontSize: 12,
              marginBottom: 5,
            }
        }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({focused}) => <Octicons name="home" size={20} color={focused ? '#407ee3' : '#8f8f8f'}/>,
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
            title: 'Workout',
            headerShown: false,
            tabBarIcon: ({focused}) => <FontAwesome6 name="dumbbell" size={20} color={focused ? '#407ee3' : '#8f8f8f'}/>,
          }}
      />
      <Tabs.Screen
        name="profile"
        options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({focused}) => <AntDesign name="user" size={22} color={focused ? '#407ee3' : '#8f8f8f'}/>,
          }}
      />
    </Tabs>
  );
}
