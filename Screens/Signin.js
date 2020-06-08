import React,{useState} from 'react';
import {
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import image from '../GlobalImage/BackgroundImage.jpg'
import image1 from '../GlobalImage/RedImage.jpg'
import styles from '../styles/GlobalStyle.js'
import firebase from 'firebase'

export default function Signin({navigation}) {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [Error,seterror] = useState("Email or Password is Incorrect")
  const [ConfirmSecureTextEntry,UpdateSecureTextEntry]=useState(true)

const ShowPassword = () => {
    UpdateSecureTextEntry(!ConfirmSecureTextEntry)
    }


fetchData=()=> {
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(()=>
      {
        Alert.alert("Successfully Logged In",'Welcome to the DashBoard')
        navigation.navigate('Dash')
        
      })
      .catch(()=>{
        Alert.alert(Error)
      }
      )
    }
    

btnLoginTapped = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+).{5,}$/;
    const regName = /^[^!-\/:-@\[-`{-~]*$/;
    var message = "";
    if (email.trim()==='') {
      Alert.alert("Signin Failed",'Email must not be empty')
    } else if (reg.test(email.trim()) != true) {
      Alert.alert("Email",'Email Format: abc@abc.com')
    } else if (password.trim()==='') {
      Alert.alert("Password",'Password Should not be Blank')
    } else {
      fetchData(); 
    }
  }
    return (
      <SafeAreaView>
        <ImageBackground source={image} style={styles.container}>
        </ImageBackground>
        <View style={styles.LayeredConatiner}>
        <ImageBackground source={image1} style={styles.container}>
        </ImageBackground>
        </View>
        <Image source={require('../GlobalImage/Logo.png')} style={styles.Logo}/>
        <ScrollView style={styles.form}>
        <View style={styles.inner}>
        <View style={{flexDirection:"row"}}>
          <Image source={require('../icons/username.png')} style={styles.icon}/>
          <TextInput style ={styles.inputText}
                placeholder="Email"
                keyboardType='default'
                onChangeText={(email) => setEmail(email)}
              />
          </View>

          </View>
          <View style={styles.inner}>
          <View style={{flexDirection:"row"}}>
          <Image source={require('../icons/password.png')} style={styles.icon}/>
          <TextInput style ={styles.inputText}
                placeholder="Password"
                keyboardType='default'
                secureTextEntry={ConfirmSecureTextEntry?true:false}
                onChangeText={(password) => setPassword(password)}

              />
                     <TouchableOpacity onPress={()=>ShowPassword()} >
                     
                     <Image source={require('../icons/eye.png')} style={styles.icon}/>
     
                     </TouchableOpacity>
          </View>
        </View>    
          <TouchableOpacity style={styles.button} onPress={()=>btnLoginTapped()}>
            <Text style={styles.buttonText}>SignIn</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Text style={styles.outtext}>Create An Account ? </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Signup')}> 
            <Text style={styles.outlink}>Signup</Text>
          </TouchableOpacity>
          </View>

        </ScrollView>
     
      </SafeAreaView>
    );
  }