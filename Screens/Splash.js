import React, {useEffect} from'react'
import {SafeAreaView,Image,Text} from 'react-native'
import splash from '../GlobalImage/Splash.jpg'
import styles from '../styles/GlobalStyle.js'

import firebase from 'firebase'
export default function Splash({navigation})
{
useEffect(()=>
{
    Authentication()
},[navigation])
function Authentication()
{
    
    setTimeout(function()
    {
        firebase.auth().onAuthStateChanged((user)=>
        {
       if(user!=null)
       {
           navigation.reset({
               index:0,
               routes:[{name:'Dash'}]
           })
       }
       else
       {
        navigation.reset({
            index:0,
            routes:[{name:'AuthStack'}]
        })
       }
})
    },1000
    )
}

    return(
        <SafeAreaView>
        <Image source={require('../GlobalImage/Splash.jpg')} style={styles.splashstyle}/>
        </SafeAreaView>
    )
}