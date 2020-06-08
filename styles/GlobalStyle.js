import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
var windowWidth = Dimensions.get('window').height;
var windowHeight = Dimensions.get('window').width;
export default styles = StyleSheet.create({
    container: {
      flex:1,
      height: windowHeight + (Platform.OS === 'ios' ? 700 : 500),
    },
    LayeredConatiner: {
      flex:1,
      height: windowHeight + (Platform.OS === 'ios' ? 700 : 500),
      backgroundColor:'transparent',
      opacity: 0.8,
    },
    Logo: {
        marginTop: (windowWidth - (500)) / 2,
        marginLeft: (windowWidth - (550)) / 2,
        marginRight: (windowWidth - (900)) / 2,
        height:60,
        width:200,
        opacity:0.8
    },
    form: {
        flexDirection:'column',
        marginLeft: (windowWidth - (650)) / 2,
        marginRight: (windowWidth - (650)) / 2,
        marginTop:30,
    },
    inner:
    {
        borderBottomWidth:2,
        marginBottom:15,
        borderBottomColor:'white'
    },
    inputText:
    {
      fontSize:16,
      color:'white',
      fontFamily:Platform.OS==="android" ? 'NunitoSans-Bold' : 'NunitoSans-Bold',
      width:(windowWidth - (250)) / 2,
    },
    icon:{height:20,width:20,marginRight:10,marginTop:15},
    button:{marginTop:25,marginBottom:15,backgroundColor:'white',height:50,justifyContent:'center',alignItems:'center',borderRadius:10, shadowOffset: {height: 7,width:5},elevation: 10},
    buttonText:{color:'red',fontSize:15,fontFamily:Platform.OS==="android" ? 'NunitoSans-Black' : 'NunitoSans-Black'},
    outlink:{color:'white',fontSize:13,fontFamily:Platform.OS==="android" ? 'NunitoSans-Black' : 'NunitoSans-Black'},
    outtext:{color:'white',fontSize:13,fontFamily:Platform.OS==="android" ? 'NunitoSans-Bold' : 'NunitoSans-Bold'}

  });