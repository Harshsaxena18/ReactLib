import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppTabs } from './tabs/apptabs';


import LoginScreen from './component/auth/login';
import RegistrationScreen from './component/auth/register';
import SplashScreen from './component/auth/splash';
import AdminLogin from './component/auth/adlogin';
import AdminHome from './component/admin/dashboard';
import { AdminTabs } from './tabs/adminTabs';
import CIssue from './component/admin/issue';



const Stack = createStackNavigator();


function AppStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerStyle: {
        height: 35, 
      },
    }}>
      <Stack.Screen name="Welcome" component={SplashScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="AdLogin" component={AdminLogin} options={{ headerShown: false }}/>
      <Stack.Screen name="AdTabs" component={AdminTabs} options={{ headerShown: false }}/>



      <Stack.Screen name="Registration" component={RegistrationScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AppTabs" component={AppTabs} options={{ headerShown: false }} />


      <Stack.Screen name="CIssue" component={CIssue} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
