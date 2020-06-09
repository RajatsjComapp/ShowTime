import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
var windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container:
  {
    flex:1,
    height: windowHeight,
    backgroundColor:'#192841',
  },
    items: {
        flexDirection:'column',
        margin:15
      },
      separator: {
        height: 0.5,
        backgroundColor: 'black',
      },
      text: {
        margin:10,
        flexDirection:'column',
        color: 'white',
        fontSize:15,
        width:'70%',
        fontFamily:Platform.OS==="android" ? 'NunitoSans-BlackItalic' : 'BlackItalic',
      },
      Header:
      {
        height: (windowHeight)/14,
        backgroundColor:'#BF0000',
        alignItems:'center'
      },
      HeaderText:
      {
       fontSize:25,
       fontFamily:'NunitoSans-Black',
       color:'white',
       margin:6
      },
      footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      loadMoreBtn: {
        padding: 10,
        backgroundColor: '#800000',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontFamily:Platform.OS==="android" ? 'NunitoSans-BlackItalic' : 'NunitoSans-BlackItalic',
      },
    });