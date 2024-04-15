import {StatusBar, StyleSheet, Text, View, Image, TextInput, SafeAreaView, Button, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonLogin from './Components/buttonLogin';
import { useState } from 'react';

export default function App() {

  const [senha, setSenha] = useState(true);
  const [imgSenha, setImgSenha] = useState(require('./assets/Image/closeEye.png'))

  function mudarImg(){
    if(imgSenha === require('./assets/Image/closeEye.png')){
      setImgSenha(require('./assets/Image/eye.png'))
      setSenha(false)
      console.log(senha)
    }else{
      setImgSenha(require('./assets/Image/closeEye.png'))
      setSenha(true)
      console.log(senha)
    }
  }

  return (
 
    <SafeAreaView style={styles.container}>
      <StatusBar/>
  <LinearGradient
        colors={['#1A191A', 'transparent']}
        style={styles.background}
      />
      <View style={styles.logo}>
     <Image style={styles.imgLogo}  source={require('./assets/Image/logo_Instudo.png')} />
      </View>
    
  <View style={styles.form}>

    <View style={styles.campForm}>
      <Text style={styles.tagForm}>Login:</Text>
          <TextInput
            style={styles.input}
            selectTextOnFocus= {true}
            placeholder='Digite seu login'
            placeholderTextColor={"#fff"}
            selectionColor={'#fff'}
          />
    </View>

    <View style={styles.campForm}>
        <Text style={styles.tagForm}>Senha:</Text>
        <View  style={styles.showPass}>
         
        <TextInput
          style={styles.password}
          secureTextEntry={senha}
          placeholder='Digite sua senha'
          placeholderTextColor={"#fff"}
          underlineColorAndroid="transparent"
        />
         <Pressable onPress={mudarImg}>
            <Image style={styles.imgSenha} source={imgSenha}/>
          </Pressable>
        </View>
    <Text style={styles.forgetPass}>Esqueceu a Senha?</Text>
    </View>

  <View style={styles.submit}>
  <Pressable style={styles.buttonSubmit} onPress={''}>
         <Text style={styles.textButton}>Entrar</Text>
    </Pressable>
  </View>

    
  <View style={styles.loginContainer}>
    <View style={styles.lableLogin}>
    <Text style={styles.tagLogin}>Entrar com:</Text>
    </View>
   

      <ButtonLogin nome={"Google"} foto={require('./assets/Image/google.png')}/>
      <ButtonLogin nome={"Facebook"} foto={require('./assets/Image/facebook.png')}/>
      <ButtonLogin nome={"Apple"} foto={require('./assets/Image/apple.png')}/>
    </View>
  </View>


  </SafeAreaView>
   

  );
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
  logo: {
    flex: 1,
    height: 150,
    width: 155,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },

  imgLogo: {
    height: 140,
    width: 305,
    objectFit: 'contain'
  },

  input: {
    height: 27,
    width: 270,
    padding: 5,
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
    fontSize: 18
  },

  campForm:{
    color: '#fff',
  },

  submit: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  },

  buttonSubmit:{
    backgroundColor: '#67209E',
    width: 90,
    height: 30,
  },

  textButton:{
    padding: 5,
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center'
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
