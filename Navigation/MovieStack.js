import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack'
import Movies from '../Screens/Browse.js';
import Listing from '../Reusable/Listing'
import Details from '../Reusable/Details'
import Display from '../Section/Display'
import MovieTrailer from "../Reusable/MovieTrailer.js";

export default function MoviesStack() {

    const MovieStack = createStackNavigator();
    return(
      <MovieStack.Navigator initialRouteName="Movies" screenOptions={{
        headerStyle: {
          backgroundColor: '#BF0000',
        },
        headerTitleAlign:'center',
        headerTitleStyle:
        {
          fontFamily:'NunitoSans-Black',
        },
        headerTintColor: '#fff',
      }}>
        <MovieStack.Screen name="Movies" component={Movies}  />
        <MovieStack.Screen name="Display" component={Display} />
        <MovieStack.Screen name="Listing" component={Listing} />
        <MovieStack.Screen name="Details" component={Details} />
        <MovieStack.Screen name="MovieTrailer" component={MovieTrailer} />
      </MovieStack.Navigator>
    
    );
    }