import {StatusBar, StyleSheet, Text, View, Image, TextInput, SafeAreaView, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonLogin from './Components/buttonLogin';

export default function App() {
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
            selectionColor={'#fff'}
          />
    </View>

    <View style={styles.campForm}>
        <Text style={styles.tagForm}>Senha:</Text>
        <TextInput
          style={[styles.input, styles.password]}
          secureTextEntry={true}
          placeholder='Digite sua senha'
        />
    </View>
  </View>

  <View style={styles.submit}>
    <Button style={styles.buttonSubmit} title="Entrar" color='#9C56D3'/>
  </View>

    
  <View style={styles.loginContainer}>
    <Text style={styles.tagLogin}>Entrar com:</Text>

      <ButtonLogin nome={"Google"} foto={require('./assets/Image/google.png')}/>
      <ButtonLogin nome={"Facebook"} foto={require('./assets/Image/facebook.png')}/>
      <ButtonLogin nome={"Apple"} foto={require('./assets/Image/apple.png')}/>
    </View>

  </SafeAreaView>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C56D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 4500,
  },
  logo: {
    position: 'absolute',
    top: 30,
    height: 150,
    width: 155,
    marginRight: 140,

  },

  imgLogo: {
    height: 140,
    width: 305,
    objectFit: 'contain'
  },

  input: {
    height: 45,
    margin: 6,
    padding: 5,
    color: '#fff',
    backgroundColor: '#67209E',
    borderRadius: 30,
    width: 270,
    zIndex: 1,
  },

  password: {
    width: 170,
  },

  form: {
    flexDirection: "column",
    marginTop: 160,
  },

  tagForm: {
    color: '#fff',
    fontSize: 18
  },

  campForm:{
    color: '#fff'
  },

  submit: {
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 20,
  },

  loginContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  tagLogin: {
    color: '#9C56D3',
    fontSize: 20,

  },
});
