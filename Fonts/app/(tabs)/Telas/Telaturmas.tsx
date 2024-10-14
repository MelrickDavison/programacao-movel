import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { Button, Appbar, TextInput, Avatar} from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import {useFonts} from 'expo-font' 
import { Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import { KumbhSans_500Medium } from '@expo-google-fonts/kumbh-sans';
import { useState, useEffect} from 'react';
import  ContainerTurmas  from './turmas'
import * as SplashScreen from 'expo-splash-screen';

export default function turmas() {
    SplashScreen.preventAutoHideAsync();

    const turmas  = [
      {
        id: 1,
        nome: '3° ano Médio Integrado',
        materia: 'Química',
        icone: require('../../../assets/images/telaInicialLogin/quimica 1.png'),
        cor: '#',
        professor: 'Ana Júlia',
        participantes: ['Fabricio']
      },

      {
        id: 2,
        nome: '2° ano Médio Integrado',
        materia: 'Matemática ',
        icone: require('../../../assets/images/telaInicialLogin/geometria 1.png'),
        professor: 'Elinelson',
        participantes: ['Fabricio', 'Gabriel']
      }
    ];

    const numTurmas = turmas.length

    const router = useRouter();
    const [loaded, error] = useFonts({
        Ubuntu_500Medium, 
        KumbhSans_500Medium

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

    numTurmas === 0 ? 
    <View style={styles.container}>
      <Appbar.Header style={styles.cabecalho}>
      <Appbar.BackAction onPress={() => {router.replace('/(tabs)/Telas/telaInicialLogin');}} color={'#fff'}/>
      <Appbar.Content title={<Text style={{color:'#fff', fontFamily:'Ubuntu_500Medium', fontSize: 25}}>Turmas</Text>} />
    </Appbar.Header>

    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{color: '#cccc', fontSize:25, fontFamily: 'KumbhSans_500Medium', textAlign: 'center'}}>Crie sua primeira turma!</Text>
    </View>
 
      <View style={styles.buttonAdd}>
        <Avatar.Text size={65} label="+"/>
      </View>

    </View> :  
     <View style={styles.container}>
     <Appbar.Header style={styles.cabecalho}>
     <Appbar.BackAction onPress={() => {router.replace('/(tabs)/Telas/telaInicialLogin');}} color={'#fff'}/>
     <Appbar.Content title={<Text style={{color:'#fff', fontFamily:'Ubuntu_500Medium', fontSize: 25}}>Turmas</Text>} />
   </Appbar.Header>

   <FlatList
    data={turmas}
    renderItem={({item}) =>  
    <View style={styles.containerTurma}>
      <ContainerTurmas nome={item.nome} professor={item.professor} materia={item.materia} icone={item.icone}/>
    </View>
      }
    />

     <View style={styles.buttonAdd}>
       <Avatar.Text size={65} label="+"/>
     </View>
   </View>

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#1A191A',
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

      buttonAdd: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 20,
      },
    
      containerTurma: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
      }
});