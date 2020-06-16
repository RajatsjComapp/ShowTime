import React  from 'react'
import { View,SafeAreaView,Image, Text,FlatList,StatusBar} from 'react-native'
import { styles } from '../styles/Dashboard';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Noimage from '../GlobalImage/Noimage.jpg'
import MovieTrailer from './MovieTrailer'
import TVTrailer from './TVTrailer'
import { useNavigation } from '@react-navigation/native'
const baseUrl='https://image.tmdb.org/t/p/w500';
function Detail({route}) {
  const navigation = useNavigation();
   const {otherParam}= route.params;
    return (
      <SafeAreaView style={styles.container}>
          <ScrollView>
        
        <Image source={{uri:baseUrl+""+otherParam.backdrop_path}} style={(!(otherParam.original_title)?otherParam.original_name:otherParam.original_title).length >26 ?styles.DetailImage2:styles.DetailImage}/>
   
        <Text style={styles.Title}>{!otherParam.original_title?otherParam.original_name:otherParam.original_title}</Text>
        <View style={{flexDirection:"row"}}>
        <Text style={styles.Menu}>Overview</Text>
        {!otherParam.original_name?
        <TouchableOpacity onPress={()=>navigation.navigate('MovieTrailer',otherParam.id)}>
                <Text style={styles.Menu}>
                  Watch Trailer  
        </Text></TouchableOpacity>
        :
        <TouchableOpacity onPress={()=>navigation.navigate('TVTrailer',otherParam.id)}>
                <Text style={styles.Menu}>
                  Watch Preview  
        </Text></TouchableOpacity>
        }  
        </View>


        <Text style={styles.OverviewText}>{otherParam.overview}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}> 
        <View>
         <Text style={styles.info}>User Rating</Text>
         <Text style={styles.infodata}>{otherParam.vote_average} /10
        </Text>
         </View>
         <View>
         <Text style={styles.info} >Release Date   </Text>
          <Text style={styles.infodata} > {!otherParam.release_date?otherParam.first_air_date:otherParam.release_date}  </Text>
         </View>
            <View>
            <Text style={styles.info} >Vote Count  </Text>
            <Text style={styles.infodata}>{otherParam.vote_count}
            </Text> 
            </View>
            </View>
            </ScrollView>
      </SafeAreaView>
    );
  }
export default Detail;