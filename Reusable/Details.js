import React  from 'react'
import { View,SafeAreaView,Image, Text,FlatList} from 'react-native'
import { styles } from '../styles/Dashboard';
import { ScrollView } from 'react-native-gesture-handler';

const baseUrl='https://image.tmdb.org/t/p/w500';


function Detail({route}) {
   
   const {otherParam}= route.params;
    return (
      <SafeAreaView style={styles.container}>
          <ScrollView>
        <Image source={{uri:baseUrl+""+otherParam.backdrop_path}} style={styles.DetailImage}/>
   
        <Text style={styles.Title}>{!otherParam.original_title?otherParam.original_name:otherParam.original_title}</Text>

        <Text style={styles.Menu}>Overview</Text>
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