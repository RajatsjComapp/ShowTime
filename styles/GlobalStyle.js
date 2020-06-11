import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
    container: {
      flex:1,
      height: windowHeight,
      width: windowWidth
    },
    splashstyle: {
      height: windowHeight,
      width: windowWidth
    },
    LayeredConatiner: {
      flex:1,
      height: windowHeight,
      backgroundColor:'transparent',
      opacity: 0.8,
    },
    Logo: {
        marginTop: (windowHeight) / 6,
        marginLeft: (windowWidth) / 4,
        marginRight: (windowWidth) / 4,
        height:60,
        width:200,
        opacity:0.8
    },
    form: {
        flexDirection:'column',
        margin: (windowWidth) /9,
        marginTop:'5%'
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
      fontFamily:'NunitoSans-Bold',
      width:'85%'
    },
    icon:{height:20,width:20,marginRight:5,marginTop:15},
    button:{marginTop:25,marginBottom:15,backgroundColor:'white',height:50,justifyContent:'center',alignItems:'center',borderRadius:10, shadowOffset: {height: 7,width:5},elevation: 10},
    buttonText:{color:'red',fontSize:18,fontFamily:'NunitoSans-Black'},
    outlink:{color:'white',fontSize:15,fontFamily:'NunitoSans-Black'},
    outtext:{color:'white',fontSize:15,fontFamily:'NunitoSans-Bold'}

  });