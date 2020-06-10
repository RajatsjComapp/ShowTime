import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Dash from './Screens/Dash.js'
import {createStore} from 'redux'
import AuthStack from './Navigation/AuthStack.js'
import { Provider } from 'react-redux';
import { Reducer } from './Reducer/Reducer.js';

const store = createStore(Reducer);
export default function App() {

  const Stack = createStackNavigator();
  return(
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="AuthStack"  screenOptions={{ headerShown: false}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="Dash" component={Dash} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
  }