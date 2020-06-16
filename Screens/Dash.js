import * as React from 'react';
import {
  Image
} from 'react-native';
import Browse from './Browse.js';
import Library from './Library.js';
import Explore from './Explore.js';
import Listing from '../Reusable/Listing'
import Details from '../Reusable/Details'
import Display from '../Section/Display'
import MoviesStack from '../Navigation/MovieStack.js'
import TVStack from '../Navigation/TVStack.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';


export default function Dash({navigation})
{
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator
        tabBarOptions={{
          
          activeTintColor: '#D9FFFFFF',
          activeBackgroundColor:'#192841',
          style:{backgroundColor:'#BF0000'},
          labelStyle:{fontSize:13,fontFamily:'NunitoSans-Black'}
        }}
        >
          <Tab.Screen name="MoviesStack"
            component={MoviesStack}
            
            options={{
              tabBarLabel: 'Home',
              unmountOnBlur:true,
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../icons/TabBar/Browse.png')}
                  style={{width: 30, height: 30,backgroundColor:tintColor,marginTop:6}}
                />

              ) 
            }
          }
  
          
          />
          <Tab.Screen name="TVStack"
            component={TVStack}
            options={{
              tabBarLabel: 'T.V.',
              unmountOnBlur:true,
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../icons/TabBar/Library.png')}
                  style={{width: 26, height: 26}}
                />
              ) 
            }}
          />
          <Tab.Screen name="Explore"
           component={Explore}
            options={{
              tabBarLabel: 'Setting',
              unmountOnBlur:true,
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../icons/TabBar/Explore.png')}
                  style={{width: 26, height: 26}}
                />
              ) 
            }}
          />
          {/* <Tab.Screen name="Library"
            component={Library}
            options={{
              tabBarLabel: 'Library',
              unmountOnBlur:true,
              tabBarIcon: ({ tintColor }) => (
                <Image
                  source={require('../icons/TabBar/Library.png')}
                  style={{width: 26, height: 26}}
                />
              ) 
            }}
          /> */}  
          
          
        </Tab.Navigator>



    );
}