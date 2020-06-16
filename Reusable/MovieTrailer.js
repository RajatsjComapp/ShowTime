import React, {useEffect,useState} from 'react'
import { View,Text  } from 'react-native';
import YouTube from 'react-native-youtube';
import {Trailer1,Trailer2}  from "../utils/urls";

export default MovieTrailer =  (props) =>
{

  const [data, setData] = useState([]);
  const URL=`${Trailer1}${props.route.params}${Trailer2}`
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