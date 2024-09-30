import { View, Text, StatusBar, StyleSheet, Image, SafeAreaView, Pressable, Alert, ImageBackground} from 'react-native'
import React from 'react';
import { auth } from '../../../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { LinearGradient } from 'expo-linear-gradient';
import ButtonLogin from '../../../components//Components/buttonLogin';
import { useState, useEffect} from 'react';
import { Button, Appbar, TextInput} from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
//Só vai utilizar uma vez
import {useFonts} from 'expo-font' 
import * as SplashScreen from 'expo-splash-screen';

//Um import para cada fonte
import {Inter_900Black} from '@expo-google-fonts/inter' //https://github.com/expo/google-fonts
import { LaBelleAurore_400Regular } from '@expo-google-fonts/la-belle-aurore'
import { Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import { KumbhSans_500Medium } from '@expo-google-fonts/kumbh-sans';
import { Nunito_700Bold  } from '@expo-google-fonts/nunito'
import { Raleway_600SemiBold } from '@expo-google-fonts/raleway'
import { async } from '@firebase/util';
import { FirebaseApp, FirebaseError} from 'firebase/app';


export default function telaLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaState, setSenhaState] = useState(true);
  const [imgSenha, setImgSenha] = useState(require('../../../assets/images/ImagesLogin/closeEye.png'))
  const [carregamento, setCarregamento] = useState(false)
  const router = useRouter();
  function mudarImg(){
    if(imgSenha === require('../../../assets/images/ImagesLogin/closeEye.png')){
      setImgSenha(require('../../../assets/images/ImagesLogin/eye.png'))
      setSenhaState(false)
    }else{
      setImgSenha(require('../../../assets/images/ImagesLogin/closeEye.png'))
      setSenhaState(true)
    }
  }

SplashScreen.preventAutoHideAsync();

     //Fazer o import de cada fonte
   const [loaded, error] = useFonts({
    LaBelleAurore_400Regular,
    Ubuntu_500Medium,
    KumbhSans_500Medium,
    Nunito_700Bold,
    Raleway_600SemiBold
  });

//Controle da Splash Screen
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync(); //Se a fonte for carregada ou tiver um erro vai esconder a splash screen
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


    const handleLogin = async () => {
      try {
        setCarregamento(true)
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;
        console.log(user);
        router.replace('/(tabs)/Telas/home');

      } catch (error : any) {
      if(error.code == 'auth/invalid-email'){
        setCarregamento(false)
        Alert.alert('Invalid Email', 'Email invalid, try again', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);    
      }
      if(error.code == 'auth/invalid-credential'){
        setCarregamento(false)
        Alert.alert('Invalid Credential', 'Credential invalid, try again', [

          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);

        
      }
         
      }
    }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>

        
    <Appbar.Header style={styles.cabecalho}>
      <Appbar.BackAction onPress={() => {router.replace('/(tabs)/Telas/telaInicialLogin');}} color={'#fff'}/>
      <Appbar.Content title={<Text style={{color:'#fff', fontFamily:'Ubuntu_500Medium', fontSize: 25}}>Login</Text>} />
    </Appbar.Header>

     
<View style={styles.form}>
  <View style={{paddingLeft: 12, paddingTop: 20}}>
        <TextInput
           mode="flat"
           label="Login"
           placeholder="Email ou Usuário"
        />
  </View>

  <View style={{paddingLeft: 12, paddingTop: 20}}>
      <TextInput
      label="Password"
      secureTextEntry={senhaState}
      right={<TextInput.Icon icon={imgSenha} onPress={mudarImg}/>}
    />

<Text style={styles.forgetPass}>Esqueceu a Senha?</Text>
</View>


       



 <ImageBackground source={require('./../../../assets/images/ImagesLogin/imageBack.png')} style={{flex: 1, width: "100%", height: "100%" }}> 
 
    <View style={styles.loginContainer}>
    <Button loading={carregamento} buttonColor={'#67209E'} mode="contained" onPress={handleLogin} style={styles.submit}>Entrar</Button>
        <View style={styles.lableLogin}>
          <Text style={styles.tagLogin}>Entrar com:</Text>
        </View>
    

        <ButtonLogin nome={"Google"} foto={require('../../../assets/images/ImagesLogin/google.png')}/>
        <ButtonLogin nome={"Facebook"} foto={require('../../../assets/images/ImagesLogin/facebook.png')}/>
        <ButtonLogin nome={"Apple"} foto={require('../../../assets/images/ImagesLogin/apple.png')}/>
  
   </View>
   </ImageBackground>


  </View>

  </SafeAreaView>
   

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1A191A'
  },
  cabecalho:{
    backgroundColor:'transparent',
    borderBottomWidth: 2,
    borderColor: '#67209E'
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 4500
  },

  campForm:{
    color: '#fff',
  },

  optionForm: {
    color: '#fff',
  },

  input: {
    height: 30,
    width: 270,
    paddingLeft: 15,
    color: '#fff',
    backgroundColor: '#67209E',
    borderRadius: 30,

  },

  password: {
    height: 30,
    color: '#fff',
    paddingLeft: 15,
    width: 130,
    flexDirection: 'row',
    flex: 1,
  },

  form: {
    flex: 2,
    marginTop: 20,
  },

  tagForm: {
    color: '#fff',
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'Nunito_700Bold'
  },

  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
    height: 'auto',
    width: 'auto',
  },

  loginContainer: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },

  lableLogin:{
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagLogin: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Raleway_600SemiBold'
  },

  showPass:{
    backgroundColor: '#67209E',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 30,
    width: 230,
    height: 27,
    color: '#fff',
  },
  imgSenha: {
    height: 25,
    width: 25,
    marginRight: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  forgetPass:{
    color: "#fff",
    fontWeight: 'bold',
    padding: 5,
    textDecorationLine: 'underline'
  }
});
