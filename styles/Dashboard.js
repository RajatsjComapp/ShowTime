import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
export var windowWidth = Dimensions.get('window').width;
export var windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container:
    {
      flex:1,
      height: windowHeight,
      backgroundColor:'#192841',
    },
    Menu:
    {
      fontSize:22,
      fontFamily:'NunitoSans-Black',
      color:'yellow',
      margin:15
    },
    MoreButton:
    {
      fontSize:15,
      fontFamily:'NunitoSans-BoldItalic',
      color:'yellow',
      margin:15
    },
    horizontalImages:{width:110,height:180,margin:10,borderRadius:5,borderWidth:4,borderColor:'white'},
    ImageCarousel:{width:windowWidth/2,height:windowHeight/3,borderRadius:5,borderWidth:4,borderColor:'white'},
    DetailImage:
    {
      width:(windowWidth),
      height:(windowHeight) /3 ,
      resizeMode:'cover',
      opacity:0.6
    },
    DetailImage2:
    {
      width:(windowWidth),
      height:(windowHeight) / 2.5,
      resizeMode:'cover',
      opacity:0.6
    },
    Title:{
        position:'absolute',
        fontSize:25,
        marginTop: (windowWidth)/2,
        marginLeft:10,
        fontFamily: 'NunitoSans-Bold',
        color:'white',
    },
    OverviewText:
    {
      fontSize:16,
      fontFamily:'NunitoSans-BoldItalic',
      color:'white',
      margin:15
    },
    infodata:{color:'white',fontWeight:'bold'},
    info:{fontSize:16,fontWeight: 'bold',color:'yellow'},
    Logoutbutton:{margin:25,backgroundColor:'white',height:50,justifyContent:'center',alignItems:'center',borderRadius:10, shadowOffset: {height: 7,width:5},elevation: 10},
    LogoutbuttonText:{color:'red',fontSize:18,fontFamily:'NunitoSans-Black'},
  });