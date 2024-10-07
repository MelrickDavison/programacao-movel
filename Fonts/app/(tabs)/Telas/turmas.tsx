import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Appbar, TextInput} from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import {useFonts} from 'expo-font' 
import { Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import { useState, useEffect} from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function turmas() {
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
    <View>
      <Appbar.Header style={styles.cabecalho}>
      <Appbar.BackAction onPress={() => {router.replace('/(tabs)/Telas/telaInicialLogin');}} color={'#fff'}/>
      <Appbar.Content title={<Text style={{color:'#fff', fontFamily:'Ubuntu_500Medium', fontSize: 25}}>Turmas</Text>} />
    </Appbar.Header>

      <Text>Crie sua primeira turma!</Text>

      <Button>
      </Button>
    </View>
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

    linha:{
        backgroundColor: '#9C56D3',
        width: 260,
        height: 2.5,
        marginTop: 7,
      },

});