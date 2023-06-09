
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';


import { Ionicons ,Octicons } from '@expo/vector-icons';
import AdminHome from '../component/admin/dashboard';
import AdBookList from '../component/admin/adbooklist';
import { AdminSetting } from '../component/admin/adminsetting';
import AdminFine from '../component/admin/adfine';
import Adminreserve from '../component/admin/adReserve';




const Tab = createBottomTabNavigator();

export function AdminTabs() {
  return (
    <Tab.Navigator options>
      <Tab.Screen
       name="Dashboard" 
       component={AdminHome} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }} />
      <Tab.Screen
       name="Books" 
       component={AdBookList} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="book" size={size} color={color} />
        ),
      }} />
      
      <Tab.Screen 
        name="fine" 
        component={AdminFine} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Issued" 
        component={Adminreserve} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="history" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen
       name="Settings"
      component={AdminSetting} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings" size={size} color={color} />
        ),
      }} />
    </Tab.Navigator>
  );
}