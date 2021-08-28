import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import LoginHome from './App/Screens/LoginHome';
import Login from './App/Screens/Login';
import Otp from './App/Screens/Otp';
import Register from './App/Screens/Register';
import ProfileFilling from './App/Screens/ProfileFilling';
import Home from './App/Screens/Home';
import ForgotPassword from './App/Screens/ForgotPassword';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{
      headerShown: false,
    }}  initialRouteName={"LoginHome"}>
      <Stack.Screen name="LoginHome" component={LoginHome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ProfileFilling" component={ProfileFilling} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}

  //  <LoginHome/>
  // <Login/>
  // <Otp/>
  // <Register/>
  // <ProfileFilling/>
  // <Home/>