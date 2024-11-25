import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { KumbhSans_500Medium } from '@expo-google-fonts/kumbh-sans';
import { useState, useEffect} from 'react';
import { Avatar } from 'react-native-paper';
import {useFonts} from 'expo-font' 
import * as SplashScreen from 'expo-splash-screen';
 
export default function ContainerAlunos ({nome}) {
  SplashScreen.preventAutoHideAsync();
//Fazer o import de cada fonte
const [loaded, error] = useFonts({
KumbhSans_500Medium
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
    <View style={styles.container}>  
      <Avatar.Image size={40} source={require('../../assets/images/telaAlunos/perfil.png')} />
      <View style={styles.containerTitle}>
      <Text style={styles.nome}>{nome}</Text>    
      </View>

      <Pressable style={styles.buttonAdicionarAlunos}>
       <Text style={{color: '#fff'}}>+</Text> 
      </Pressable>
      </View>

  )


}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-around',

    },

    containerTitle:{
      backgroundColor: '#9C56D3',
    },

    nome: {
      color: '#fff',
      fontFamily: 'KumbhSans_500Medium',
      fontSize: 20,
      paddingLeft: 10,
      width: 250,
      paddingBottom: 5,
    },

    buttonAdicionarAlunos:{
      borderRadius: 100,
      width: 25,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#71BBFF',
    },

    subtitle: {
      color: '#fff',
      paddingLeft: 10,
    },

    icone: {
      height: 35,
      width: 35,
    }

  })