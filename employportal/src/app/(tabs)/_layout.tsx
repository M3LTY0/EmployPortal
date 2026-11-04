import {Ionicons} from '@expo/vector-icons';
import {Tabs} from 'expo-router';

export default function TabsLayout() {
  return(
    <Tabs screenOptions = {{headerTitleAlign: 'left', tabBarActiveTintColor: '#000000', tabBarInactiveTintColor: '#949191',}}>
    <Tabs.Screen name="index" options={{ title: 'Home', headerTitleStyle: { fontSize: 28, fontWeight: '700' }, tabBarIcon: ({color, size}) => (<Ionicons name="home" color={color} size={size} />),}}/>
    <Tabs.Screen name="signIn" options={{ title: 'Sign In', headerTitleStyle: { fontSize: 28, fontWeight: '700' }, tabBarIcon: ({color, size}) => (<Ionicons name="log-in" color={color} size={size} />),}}/>
    <Tabs.Screen name="signUp" options={{ title: 'Sign Up', headerTitleStyle: { fontSize: 28, fontWeight: '700' }, tabBarIcon: ({color, size}) => (<Ionicons name="person-add" color={color} size={size} />),}}/> 
    
    
    </Tabs>
  )
}
