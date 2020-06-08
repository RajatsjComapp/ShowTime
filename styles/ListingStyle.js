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
        fontFamily:Platform.OS==="android" ? 'NunitoSans-BlackItalic' : 'something.ttf',
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
        fontFamily:Platform.OS==="android" ? 'NunitoSans-BlackItalic' : 'something.ttf',
      },
    });