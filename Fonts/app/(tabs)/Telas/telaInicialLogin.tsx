import { View, Text, StyleSheet , Pressable, Image, ImageBackground} from 'react-native'
import React, {useState, useEffect} from 'react'
import { useRouter } from 'expo-router'
//Só vai utilizar uma vez
import {useFonts} from 'expo-font' 
import * as SplashScreen from 'expo-splash-screen';

//Um import para cada fonte
import {Inter_900Black} from '@expo-google-fonts/inter' //https://github.com/expo/google-fonts
import { LaBelleAurore_400Regular } from '@expo-google-fonts/la-belle-aurore'
import { Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import { KumbhSans_500Medium } from '@expo-google-fonts/kumbh-sans';
import { prependOnceListener } from 'process';


SplashScreen.preventAutoHideAsync();


export default function App() {
     //Fazer o import de cada fonte
   const [loaded, error] = useFonts({
    Inter_900Black,
    LaBelleAurore_400Regular,
    Ubuntu_500Medium,
    KumbhSans_500Medium
  });

  const router = useRouter();

  function goToLogin(){
    router.navigate('/(tabs)/Telas/telaLogin')
  }

  function goToCadastro(){
    router.navigate('/(tabs)/Telas/telaCadastro')
  }

//Controle da Splash Screen
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync(); //Se a fonte for carregada ou tiver um erro vai esconder a splash screen
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
<View style={styles .container}>
      <View style={styles.containerLogin}>
        <Pressable style={styles.botaoLogin} onPress={goToLogin}>
          <Text style={styles.textoLogin}>Login</Text>
        </Pressable>
        <Pressable style={styles.botaoSign}  onPress={goToCadastro}>
          <Text style={styles.textoSign}>Sign in</Text>
        </Pressable>
      </View>
      <View style={styles.containerTitulo}>
        <Text style={styles.subtitulo} >Welcome to</Text>
        <View style={styles.logo}>
        <Image 
        style={styles.imagemLogo}
        source={require('../../../assets/images/telaInicialLogin/logoInstudo.png')}/>
        <Text style={styles.titulo} >Instudo</Text>
        </View>
        <View style={styles.linha}>
        </View>
      </View>


  <ImageBackground source={require('./../../../assets/images/telaInicialLogin/backImage.png')} style={styles.imageBack}>
    <View style={styles.colunaImagens}>
      <View style={styles.linhaImagensDireita}>
        <Image source={require('./../../../assets/images/telaInicialLogin/quimica 1.png')} style={styles.imageColuna}/>
      </View>
      <View>
        <Image source={require('./../../../assets/images/telaInicialLogin/historia 1.png')} style={styles.imageColuna}/>
      </View>
      <View style={styles.linhaImagensDireita}>
        <Image source={require('./../../../assets/images/telaInicialLogin/globo 1.png')} style={styles.imageColuna}/>
      </View>
      <View>
        <Image source={require('./../../../assets/images/telaInicialLogin/geometria 1.png')} style={styles.imageColuna}/>
      </View>
      <View style={styles.linhaImagensDireita}>
        <Image source={require('./../../../assets/images/telaInicialLogin/ciencia 1.png')} style={styles.imageColuna}/>
      </View>
    </View>

  </ImageBackground>

</View>

  
  );
  
}


const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      backgroundColor: '#1A191B',
      flex: 1,
  
    },
    
    subtitulo: {
      color: "#FFF06A",
      marginTop: 50,
      fontSize: 30,
      textAlign: 'center',
      fontFamily: 'LaBelleAurore_400Regular',
      marginLeft: 5,
    },
  
     titulo: {
      textAlign: 'center',
      fontFamily: 'Ubuntu_500Medium',
      fontSize: 60,
      color: '#fff',
      marginTop: -20,
    },

    botaoLogin: {
      backgroundColor: '#1A191B',
      borderWidth: 2,
      borderColor: '#9C56D3',
      padding: 6,
      width: 90,
      borderRadius: 10,
      marginRight: 2,
    },

    textoLogin: {
      color: '#9C56D3',
      fontFamily: 'KumbhSans_500Medium',
      fontSize: 17,
      textAlign: 'center'
    },

    botaoSign: {
      backgroundColor: '#9C56D3',
      padding: 6,
      width: 90,
      borderRadius: 10,
      marginLeft: 12,
      marginRight: 12,
    },

    textoSign: {
      color: '#FFFFFF',
      fontFamily: 'KumbhSans_500Medium',
      fontSize: 17,
      textAlign: 'center'
    },
    
    containerLogin: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 12,
      padding: 12
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

    linha:{
      backgroundColor: '#9C56D3',
      width: 260,
      height: 2.5,
      marginTop: 7,
    },

    colunaImagens:{ 
      flex:1, 
      flexDirection:'column', 
      alignItems: 'flex-end',
      paddingRight: 30,
      justifyContent: 'center'
  },

  linhaImagensDireita:{
    width: 138,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  linhaImagensEsquerda:{
    width: 138,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

    imageColuna:{
      marginTop: 20,
      height: 58,
      width: 58
  },

  imageBack:{
    flex: 1
  }

  });