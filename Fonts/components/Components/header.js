import { View, Text, StyleSheet, Image} from 'react-native'
import { Link, useRouter } from 'expo-router';
import {useFonts} from 'expo-font' 
import { Button, Appbar, TextInput, Avatar} from 'react-native-paper';
import { Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import { useState, useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';


export default function Header({nome}) {
    SplashScreen.preventAutoHideAsync();

    const router = useRouter();
    const [loaded, error] = useFonts({
        Ubuntu_500Medium, 
      });
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync(); //Se a fonte for carregada ou tiver um erro vai esconder a splash screen
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }
    
  return (
    <Appbar.Header style={styles.cabecalho}>
    <Appbar.BackAction onPress={() => {router.replace('/(tabs)/Telas/telaInicialLogin');}} color={'#fff'}/>
    <Appbar.Content title={
        <View style={styles.containerHeader}>
          <Text style={{color:'#fff', fontFamily:'Ubuntu_500Medium', fontSize: 25}}>{nome}</Text>
          <Image style={styles.imageHeader} source={require('../../assets/images/ImagesLogin/logoHeader.png')}/>
        </View>

    }/>
  </Appbar.Header>
  )
}

const styles = StyleSheet.create({
    containerHeader:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cabecalho:{
        backgroundColor:'transparent',
        borderBottomWidth: 2,
        borderColor: '#67209E'
      },

      imageHeader:{
        width: 65,
        height: 30,
        marginRight: 20,
        marginTop: 10,
      }
})