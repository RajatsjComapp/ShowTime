import React from 'react';
import {Text, View,Image,ScrollView,SafeAreaView } from 'react-native';
import {PopularTV,TVOntheAir,TVAiringToday} from '../utils/urls.js'
import {styles} from '../styles/Dashboard.js'
import Display from '../Section/Display.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Listing from '../Reusable/Listing.js';
import Details from '../Reusable/Details';
import ImageSlider from '../ImageSlider.js';
export default function Television ({navigation})
{

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.Header}>
        <Text style={styles.HeaderText}>Television</Text>
      </View>
      <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Menu}>Popular</Text> 
      <TouchableOpacity onPress={()=>{navigation.navigate('Listing',PopularTV)}}>
        <Text style={styles.MoreButton}>More</Text></TouchableOpacity>
        </View>
      { <ImageSlider items={PopularTV}/> }


      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Menu}>OnTheAir</Text> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Listing',TVOntheAir)}}>
        <Text style={styles.MoreButton}>More</Text></TouchableOpacity>
        </View>
        { <Display items={TVOntheAir}  /> }
    <View>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.Menu}>Airing Today</Text> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Listing',TVAiringToday)}}>
        <Text style={styles.MoreButton}>More</Text></TouchableOpacity>
        </View>
        { <Display items={TVAiringToday}  /> }
    </View>
    
    </ScrollView>
    </SafeAreaView>
  );
};