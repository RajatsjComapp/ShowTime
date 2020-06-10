import React from 'react';
import {Text, View,ScrollView,SafeAreaView } from 'react-native';
import {DailyMovie,WeeklyMovie,UpcomingMovie,TopRatedMovie,PopularMovie} from '../utils/urls.js'
import {styles} from '../styles/Dashboard.js'
import Display from '../Section/Display.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Listing from '../Reusable/Listing.js';
import Details from '../Reusable/Details';
import ImageSlider from '../ImageSlider.js';
import { createStackNavigator } from '@react-navigation/stack';

export default function Browse ({navigation})
{

  return (

    <SafeAreaView style={styles.container}>
       <View style={styles.Header}>
        <Text style={styles.HeaderText}>Movie</Text>
      </View>
      <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Menu}>Popular</Text> 
      <TouchableOpacity onPress={()=>{navigation.navigate('Listing',PopularMovie)}}>
        <Text style={styles.MoreButton}>More</Text></TouchableOpacity>
        </View>
      { <ImageSlider items={PopularMovie}/> }
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Menu}>Trending Daily</Text> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Listing',DailyMovie)}}>
        <Text style={styles.MoreButton}>More</Text></TouchableOpacity>
        </View>
        { <Display items={DailyMovie}  /> }
    <View>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Menu}>Trending Weekly</Text> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Listing',WeeklyMovie)}}>
        <Text style={styles.MoreButton}>More</Text></TouchableOpacity>
        </View>
        { <Display items={WeeklyMovie}  /> }
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Menu}>Top Rated</Text> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Listing',TopRatedMovie)}}>
        <Text style={styles.MoreButton}>More</Text></TouchableOpacity>
        </View>
        { <Display items={TopRatedMovie}  /> }
    
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Menu}>Upcoming</Text> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Listing',UpcomingMovie)}}>
        <Text style={styles.MoreButton}>More</Text></TouchableOpacity>
        </View>
        { <Display items={UpcomingMovie}  /> }


    </ScrollView>
    </SafeAreaView>
  );
};