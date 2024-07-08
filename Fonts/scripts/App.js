import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'

//Só vai utilizar uma vez
import {useFonts} from 'expo-font' 
import * as SplashScreen from 'expo-splash-screen';

//Um import para cada fonte
import {Inter_900Black} from '@expo-google-fonts/inter' //https://github.com/expo/google-fonts
import { LaBelleAurore_400Regular } from '@expo-google-fonts/la-belle-aurore'


SplashScreen.preventAutoHideAsync();


export default function App() {
     //Fazer o import de cada fonte
   const [loaded, error] = useFonts({
    Inter_900Black,
    LaBelleAurore_400Regular
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

  return (
    <View style={styles .container}>
      <Text style={styles.subtitulo} >Welcome to</Text>
      <Text style={styles.titulo} >Instudo</Text>
    </View>
  );
  
}


const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      borderWidth: 2,
      borderColor: 'blue',
      borderStyle: 'dashed',
      backgroundColor: '#8f8f8f '
  
    },
    
    subtitulo: {
      color: "#FFF06A",
      fontSize: 30,
      fontFamily: 'LaBelleAurore_400Regular'
    },
  
     titulo: {
      textAlign: 'center',
      fontFamily: 'Inter_900Black'
    }
  });