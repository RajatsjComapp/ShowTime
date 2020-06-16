import React, {useEffect,useState} from 'react'
import { View,Text } from 'react-native';
import YouTube from 'react-native-youtube';
import {Preview1,Preview2}  from "../utils/urls";

export default TVTrailer =  (props) =>
{

  const [data, setData] = useState([]);
  const URL=`${Preview1}${props.route.params}${Preview2}`
  useEffect(() => {
    fetch(`${URL}`)
    .then(response => response.json())  
    .then((json) => setData(json.results[0]))
    .catch((error) => console.error(error))
  },
   []);
   const VideoKey=data.key
    return(
  <View>
  <YouTube
  apiKey="AIzaSyDgljgA52MfmY_PFRMe4Y4cppLeP36Y9Z4"
  videoId= {VideoKey}
  play={true}
  fullscreen={false}
  style={{ alignSelf: 'stretch', height: 300 }}
  />
  </View>
  )
}