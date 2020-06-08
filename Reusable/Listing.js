
import React, { Component,useState,useEffect} from 'react';


import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native';
import {styles} from '../styles/ListingStyle.js'
import { useNavigation } from '@react-navigation/native'
export default Listing = (props) => 
{
  const navigation = useNavigation();
  const[loading,setLoading]=useState(true);
  const[serverData,setserverData]=useState([]);
  const[fetching_from_server,setfetching_from_server]=useState(false);
  const[page,setPage]=useState(1)
  const baseUrl='https://image.tmdb.org/t/p/w500';
  const URL = props.route.params;
  useEffect(() => {
    fetch(`${URL}${page}`)
    .then(response => response.json())
    .then(responseJson =>setserverData([...serverData, ...responseJson.results]))
    .then( setPage(page+1))
    
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  },
   []);


  const loadMoreData = () => {
    
     fetch(`${URL}${page}`)
        .then(response => response.json())
        .then(responseJson =>setserverData([...serverData, ...responseJson.results]))
        .then(setfetching_from_server(true))
        .then( setPage(page+1))
        .then(setfetching_from_server(false))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false),);
         [];
      }
 const renderFooter= () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={()=>loadMoreData()}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {fetching_from_server ? (
            <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }

    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            keyExtractor={(item, index) => index}
            data={serverData}
            renderItem={({ item, index }) => (
              <View style={styles.items}>
              <TouchableOpacity style={{flexDirection:"row"}}onPress={()=>navigation.navigate('Details', {
                itemId:item.id,
                otherParam:item,
              })}>
             <Image source={{uri:baseUrl+""+item.poster_path}} style={{width:100,height:100,borderRadius:15}}/>
              <Text style={styles.text}>{!item.original_title?item.original_name:item.original_title}({!item.release_date?item.first_air_date:item.release_date})</Text> 
             </TouchableOpacity>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={renderFooter()}
      />
        )}
      </View>
    )
}