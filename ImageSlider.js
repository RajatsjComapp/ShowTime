import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image,ScrollView,SafeAreaView } from 'react-native';
import {styles, windowHeight} from './styles/Dashboard.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Details from './Reusable/Details.js';
import { useNavigation } from '@react-navigation/native'
import {windowWidth} from './styles/Dashboard.js'
import Carousel from 'react-native-snap-carousel'
export default function ImageSlider (props) 
{
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page,setPage]= useState(1);
  const Movie= `${props.items}${page}`;
  const baseUrl='https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    fetch(Movie)
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },
   []);

  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{flex:0.33}}>
      {isLoading ? <ActivityIndicator/> : (
       <Carousel
       layout={'default'}
       data={data}
       sliderWidth={windowWidth}
       itemWidth={windowWidth/2}
       renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('Details', {
            itemId:item.id,
            otherParam:item,
          })}>
          {<Image source={{uri:baseUrl+""+item.poster_path}} style={styles.ImageCarousel}/>}
          
          </TouchableOpacity>
          )}
          autoplay={true}
          loop={true}
        />
      )}
    </View>


    </ScrollView>
    </SafeAreaView>
  );
}
