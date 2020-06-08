import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
var windowWidth = Dimensions.get('window').height;
var windowHeight = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    container:
    {
      flex:1,
      height: windowHeight + (Platform.OS === 'ios' ? 700 : 500),
      backgroundColor:'#192841',
    },
    Header:
    {
      height: windowHeight - (Platform.OS === 'ios' ? 700 : 500),
      backgroundColor:'#BF0000',
      alignItems:'center'
    },
    HeaderText:
    {
     fontSize:20,
     fontFamily:Platform.OS==="android" ? 'NunitoSans-Black' : 'something.ttf',
     color:'white',
     margin:6
    },
    Menu:
    {
      fontSize:20,
      fontFamily:Platform.OS==="android" ? 'NunitoSans-Black' : 'something.ttf',
      color:'yellow',
      margin:15
    },
    MoreButton:
    {
      fontSize:15,
      fontFamily:Platform.OS==="android" ? 'NunitoSans-BoldItalic' : 'something.ttf',
      color:'yellow',
      margin:15
    },
    horizontalImages:{width:110,height:200,margin:10,borderRadius:5,borderWidth:4,borderColor:'white'},
    DetailImage:
    {
      width:(windowWidth + 30 ) / 2,
      height:(windowHeight + 170 ) / 2,
      margin:5,
      borderRadius:15,
      resizeMode:'cover',
      opacity:0.6
    },
    Title:{
        position:'absolute',
        fontSize:25,
        marginTop: (windowWidth - (300)) / 2,
        marginLeft: (windowWidth - (700)) / 2,
        fontFamily:Platform.OS==="android" ? 'NunitoSans-Bold' : 'something.ttf',
        color:'white',
    },
    OverviewText:
    {
      fontSize:15,
      fontFamily:Platform.OS==="android" ? 'NunitoSans-BoldItalic' : 'something.ttf',
      color:'white',
      margin:15
    },
    infodata:{color:'white',fontWeight:'bold'},
    info:{fontSize:16,fontWeight: 'bold',color:'yellow'},
  });