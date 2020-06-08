import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Signup from './Screens/Signup.js'
import Signin from './Screens/Signin.js'
import Dash from './Screens/Dash.js'
import Listing from './Reusable/Listing'
import Details from './Reusable/Details'
import Display from './Section/Display'
export default function App() {

  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Dash" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Dash" component={Dash} />
      <Stack.Screen name="Listing" component={Listing} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Display" component={Display} />
    </Stack.Navigator>
  </NavigationContainer>
  );
  }