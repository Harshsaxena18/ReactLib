
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';


import { Ionicons ,Octicons } from '@expo/vector-icons';
import { HomeScreen } from "../component/home";
import booklist from '../component/home/booklist';
import Payment from '../component/home/payment';
import { Setting } from '../component/home/setting';
import History from '../component/home/history';




const Tab = createBottomTabNavigator();

export function AppTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
       name="Home" 
       component={HomeScreen} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }} />
      <Tab.Screen
       name="BookList" 
       component={booklist} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="book" size={size} color={color} />
        ),
      }} />
      
      <Tab.Screen 
        name="Payment" 
        component={Payment} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Reservation" 
        component={History} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="history" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen
       name="Settings"
      component={Setting} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings" size={size} color={color} />
        ),
      }} />
    </Tab.Navigator>
  );
}