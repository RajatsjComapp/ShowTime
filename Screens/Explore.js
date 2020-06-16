import React from 'react';
import {Text, View,Image,ScrollView,SafeAreaView,Alert } from 'react-native';
import {DailyMovie,WeeklyMovie,UpcomingMovie,TopRatedMovie,PopularMovie} from '../utils/urls.js'
import {styles} from '../styles/Dashboard.js'
import Display from '../Section/Display.js'
import {useSelector,useDispatch} from 'react-redux'
import {AuthStack} from '../Navigation/AuthStack.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase'
import Listing from '../Reusable/Listing.js';
export default function Explore ({navigation})
{
  const logout = async() => {
    try{
      await firebase.auth().signOut()
    }catch(e)
    {
      console.log(e)
    }
}
  return (
  
    <SafeAreaView style={styles.container}>
       <View style={styles.Logoutbutton}>
        <TouchableOpacity onPress={()=>logout()}>
          <Text style={styles.LogoutbuttonText}>Logout</Text></TouchableOpacity>
        </View>


    </SafeAreaView>
  );
};