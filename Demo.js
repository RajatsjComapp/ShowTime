import React from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';
import {useSelector,useDispatch} from 'react-redux'

export default function Demo ()
{
    const dispatch = useDispatch()
    const {data,loading} = useSelector((state)=>
    {
        return state
    })
    dispatch({type:"Add-Data",payload:"Rajat"})
return(

    <SafeAreaView>
    <Text>{data}{loading}</Text>
    </SafeAreaView>
    )
}