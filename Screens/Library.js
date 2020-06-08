import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image,ScrollView,SafeAreaView } from 'react-native';
import {styles} from '../styles/Dashboard.js'
export default function App ()
{
  const baseUrl='https://image.tmdb.org/t/p/w500';
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const Movie='https://api.themoviedb.org/3/movie/now_playing?api_key=49f1812525f0689d9aac69682489db56&language=en-US&page=1';
  
  useEffect(() => {
    fetch(Movie)
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },
   []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{flex:0.33}}>
      <Text style={styles.Heading}>Trending Daily</Text>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList horizontal={true}
        showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
          <View>
          { <Image source={{uri:baseUrl+""+item.poster_path}} style={{width:100,height:150,margin:5,borderRadius:15}}/>}
          <Text>{item.title}</Text>
          </View>
          )}
        />
      )}
    </View>

    </ScrollView>
    </SafeAreaView>
  );
};