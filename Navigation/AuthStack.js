import React from 'react';

import {createStackNavigator} from '@react-navigation/stack'
import Signup from '../Screens/Signup.js'
import Signin from '../Screens/Signin.js'

export default function AuthStack ()
{
    const AuthStack = createStackNavigator();
    const otherStack = createStackNavigator();
    return(
      <AuthStack.Navigator initialRouteName="Signup" screenOptions={{ headerShown: false }}>
           <AuthStack.Screen name="Signup" component={Signup} />
           <AuthStack.Screen name="Signin" component={Signin}/>
      </AuthStack.Navigator>

    )
}