import { View, Text, Button, StatusBar, StyleSheet, Image, TextInput, SafeAreaView, Pressable, Alert, ActivityIndicator} from 'react-native'
import React from 'react';
import { auth } from '../../../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LinearGradient } from 'expo-linear-gradient';
import ButtonLogin from '../../../components//Components/buttonLogin';
import { useState, useEffect} from 'react';
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
  const [senhaRepeat, setSenhaRepeat] = useState('');
  const [carregamento, setCarregamento] = useState(false)

  const [senhaState, setSenhaState] = useState(true);
  const [imgSenha, setImgSenha] = useState(require('../../../assets/images/ImagesLogin/closeEye.png'))
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
        if(senha === senhaRepeat){
            setCarregamento(true)
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            console.log(user);
            router.replace('/(tabs)/Telas/home'); 
            setCarregamento(true)   
        }else{
            throw new Error('Senhas não coincidem')
        }
       
      } catch (error : any) {
        console.log(error.code)
        console.log(error.message)
        if(error.message == 'Senhas não coincidem'){
            Alert.alert('Senhas não coincidem', 'Senhas não coincidem', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);   
        return
        }
        switch (error.code) {
            case 'auth/invalid-email':
                Alert.alert('Invalid Email', 'Email invalid, try again', [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);    
                break;
            case 'auth/weak-password': 
               Alert.alert('Weak Password', 'Weak password (less than 6 chars)', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);    
            case 'auth/email-already-in-use':
                Alert.alert('Email Exists', 'Email Exists, try another', [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);  
            default:
                Alert.alert('Invalid Credentials', 'Invalid Credentials, try again', [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]); 
                break;
        }
      }
    }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>

     
        <LinearGradient
          colors={['#1A191A', 'transparent']}
          style={styles.background}
        />

        <View style={styles.containerTitulo}>
          <Text style={styles.subtitulo} >Welcome to</Text>
          <View style={styles.logo}>
          <Image 
            style={styles.imagemLogo}
            source={require('../../../assets/images/telaInicialLogin/logoInstudo.png')}/>
          <Text style={styles.titulo} >Instudo</Text>
          </View>
          <View style={styles.linha}></View>
      </View>
        
       

     
        <View style={styles.form}>

<View>
  <Text style={styles.tagForm}>Login:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        selectTextOnFocus= {true}
        placeholder='Digite seu login'
        placeholderTextColor={"#fff"}
        selectionColor={'#fff'}
      />

    <Text style={styles.tagForm}> Definir senha:</Text>
    <View  style={styles.showPass}>
     
    <TextInput
      style={styles.password}
      secureTextEntry={senhaState}
      onChangeText={setSenha}
      placeholder='Digite sua senha'
      placeholderTextColor={"#fff"}
      underlineColorAndroid="transparent"
    />
     <Pressable onPress={mudarImg}>
        <Image style={styles.imgSenha} source={imgSenha}/>
      </Pressable>
    </View>

    <Text style={styles.tagForm}>Repetir senha:</Text>
    <View  style={styles.showPass}>
     
    <TextInput
      style={styles.password}
      secureTextEntry={senhaState}
      onChangeText={setSenhaRepeat}
      placeholder='Digite sua senha'
      placeholderTextColor={"#fff"}
      underlineColorAndroid="transparent"
    />
     <Pressable onPress={mudarImg}>
        <Image style={styles.imgSenha} source={imgSenha}/>
      </Pressable>
    </View>
</View>
<ActivityIndicator size={'large'} animating={carregamento}/>
    <View style={styles.submit}>
        <Pressable style={styles.buttonSubmit} onPress={handleLogin}>
         <Text style={styles.textButton}>Cadastrar</Text>
        </Pressable>

    </View>

    
    <View style={styles.loginContainer}>
      <View style={styles.lableLogin}>
        <Text style={styles.tagLogin}>Entrar com:</Text>
      </View>
   

      <ButtonLogin nome={"Google"} foto={require('../../../assets/images/ImagesLogin/google.png')}/>
      <ButtonLogin nome={"Facebook"} foto={require('../../../assets/images/ImagesLogin/facebook.png')}/>
      <ButtonLogin nome={"Apple"} foto={require('../../../assets/images/ImagesLogin/apple.png')}/>
    </View>
  </View>

  </SafeAreaView>
   

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C56D3',
    
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 4500,
  },

  containerTitulo:{
    paddingHorizontal: 22,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  imagemLogo:{
    marginLeft: 5,
  },
  
  logo:{
    marginTop: -15
  },

  subtitulo: {
    color: "#FFF06A",
    marginTop: 50,
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'LaBelleAurore_400Regular',
    marginLeft: 5,
  },

  campForm:{
    color: '#fff',
  },

  optionForm: {
    color: '#fff',
  },

   titulo: {
    textAlign: 'center',
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 60,
    color: '#fff',
    marginTop: -20,
  },

  linha:{
    backgroundColor: '#9C56D3',
    width: 260,
    height: 2.5,
    marginTop: 7,
  },
  imgLogo: {
    height: 140,
    width: 305,
    objectFit: 'contain'
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
    color: '#fff',
    marginLeft: 8,
    width: 130,
    flexDirection: 'row',
    flex: 1,
  },

  form: {
    flex: 2,
    padding: 20,

  },

  tagForm: {
    color: '#fff',
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'Nunito_700Bold'
  },

  submit: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  },

  buttonSubmit:{
    backgroundColor: '#9C56D3',
    width: 90,
    height: 30,
  },

  textButton:{
    padding: 5,
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'KumbhSans_500Medium'
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
