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
  Alert,
} from 'react-native';
import image from '../GlobalImage/BackgroundImage.jpg'
import image1 from '../GlobalImage/RedImage.jpg'
import styles from '../styles/GlobalStyle.js'
import Signin from './Signin.js';
import firebase from 'firebase'
import 'firebase/firestore';
import FirebaseConnectivity from '../utils/firebaseAuth.js'

FirebaseConnectivity();

export default function Signup({navigation}) 
{
  const [username, setUser] = useState("");
  const [Password, setPassword] = useState(" ");
  const [ConfirmPassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");
  const [Error,seterror] = useState("Email Already Exist")
  const [ConfirmSecureTextEntry,UpdateSecureTextEntry]=useState(true)

  const ShowPassword = () => {
    UpdateSecureTextEntry(!ConfirmSecureTextEntry)
    }

storeData=()=> {
      firebase.auth().createUserWithEmailAndPassword(email,Password)
      .then(()=>
      {
        alert('Welcome to the Application')
        navigation.navigate('Dash')
        
      })
      .catch(()=>{
        alert(Error)
      }
      )
}

btnSignUpTapped = () =>
{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+).{5,}$/;
    const regName = /^[^!-\/:-@\[-`{-~]*$/;
    var message = "";
    if (username.trim()==='') {
      Alert.alert("Signup Failed",'Username Must Not be Empty')
    } else if (regName.test(username.trim()) != true) {
      Alert.alert("Username",'Chosse Correct Username')
    } else if (Password.trim()==='') {
      Alert.alert("Signup Failed",'Password must not be empty')
    } else if (regPassword.test(Password.trim()) != true) {
      Alert.alert("Password",'Must be 8 Charcter long and Contain number')
    } else if (ConfirmPassword.trim()==='') {
      Alert.alert("Confirm Password",'Confirm Password is blank.?')
    } else if (ConfirmPassword != Password) {
      Alert.alert("Confirm Password",'Passwod and Confirm Password did not match')
    } else if (email.trim()==='') {
      Alert.alert("Email",'Email must not be empty')
    } else if (reg.test(email.trim()) != true) {
      Alert.alert("Email",'Email Format: abc@abc.com')
    }else {
      storeData()
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
                placeholder="UserName"
                keyboardType='default'
                onChangeText={(username) => setUser(username)}
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
        <View style={styles.inner}>
        <View style={{flexDirection:"row"}}>
          <Image source={require('../icons/password.png')} style={styles.icon}/>
          <TextInput style ={styles.inputText}
                placeholder="Confirm Password"
                keyboardType='default'
                secureTextEntry={ConfirmSecureTextEntry?true:false}
                onChangeText={(ConfirmPassword) => setCPassword(ConfirmPassword)}
              />
          </View>
        </View>
                <View style={styles.inner}>
                <View style={{flexDirection:"row"}}>
          <Image source={require('../icons/email.png')} style={styles.icon}/>
          <TextInput style ={styles.inputText}
                placeholder="Email"
                keyboardType='email-address'
                onChangeText={(email) => setEmail(email)}
              />
            
          </View>          
                </View>
          <TouchableOpacity style={styles.button} onPress={()=>btnSignUpTapped()}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Text style={styles.outtext}>Already Have An Account ? </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Signin')}> 
            <Text style={styles.outlink}>SignIn</Text>
          </TouchableOpacity>
          </View>

        </ScrollView>
     
      </SafeAreaView>
    );
  }