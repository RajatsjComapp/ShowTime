import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack'
import Browse from '../Screens/Browse';
import Listing from '../Reusable/Listing'
import Details from '../Reusable/Details'
import Display from '../Section/Display'

export default function MoviesStack() {

    const MovieStack = createStackNavigator();
    return(
      <MovieStack.Navigator initialRouteName="Browse" screenOptions={{ headerShown: false, title:'Movie' }}>
        <MovieStack.Screen name="Browse" component={Browse} />
        <MovieStack.Screen name="Display" component={Display} />
        <MovieStack.Screen name="Listing" component={Listing} />
        <MovieStack.Screen name="Details" component={Details} />
      </MovieStack.Navigator>
    
    );
    }