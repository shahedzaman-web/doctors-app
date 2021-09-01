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
import Booking from './App/Screens/Booking';
import Chats from './App/Screens/Chats';
import Alarms from './App/Screens/Alarms';
import Account from './App/Screens/Account';
import Settings from './App/Screens/Settings';
import Notifications from './App/Screens/Notifications';
import ThemeMode from './App/Screens/ThemeMode';
import Languages from './App/Screens/Languages';
import DescriptionClinics from './App/Screens/DescriptionClinics';
import DescriptionDoctor from './App/Screens/DescriptionDoctor';
import BookAnAppointment from './App/Screens/BookAnAppointment';
import Checkout from './App/Screens/Checkout';
import Confirmation from './App/Screens/Confirmation';
import Specialities from './App/Screens/Specialities';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <Booking/>
    // <Chats/>
    // <Alarms/>
    // <Account/>
    // <Settings/>
    // <Notifications/>
    // <ThemeMode/>
    // <Languages />
    // <Home/>
    // <BookAnAppointment/>
    // <Checkout />
    // <Confirmation/>
    <Specialities/>
    // <DescriptionClinics/>
    // <DescriptionDoctor/>
  //   <NavigationContainer>
  //   <Stack.Navigator  screenOptions={{
  //     headerShown: false,
  //   }}  initialRouteName={"LoginHome"}>
  //     <Stack.Screen name="LoginHome" component={LoginHome} />
  //     <Stack.Screen name="Home" component={Home} />
  //     <Stack.Screen name="Login" component={Login} />
  //     <Stack.Screen name="Otp" component={Otp} />
  //     <Stack.Screen name="Register" component={Register} />
  //     <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  //     <Stack.Screen name="ProfileFilling" component={ProfileFilling} />
  //   </Stack.Navigator>
  // </NavigationContainer>

  );
}

  //  <LoginHome/>
  // <Login/>
  // <Otp/>
  // <Register/>
  // <ProfileFilling/>
  // <Home/>