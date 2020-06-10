import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack'
import Television from '../Screens/Television';
import Listing from '../Reusable/Listing'
import Details from '../Reusable/Details'
import Display from '../Section/Display'

export default function TVStack() {

    const MovieStack = createStackNavigator();
    return(
      <MovieStack.Navigator initialRouteName="Television" screenOptions={{ headerShown: false }}>
        <MovieStack.Screen name="Television" component={Television} />
        <MovieStack.Screen name="Display" component={Display} />
        <MovieStack.Screen name="Listing" component={Listing} />
        <MovieStack.Screen name="Details" component={Details} />
      </MovieStack.Navigator>
    
    );
    }