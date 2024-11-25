import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import { Button, Appbar, TextInput, Avatar} from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import {useFonts} from 'expo-font' 
import { Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import { KumbhSans_500Medium } from '@expo-google-fonts/kumbh-sans';
import { useState, useEffect} from 'react';
import  ContainerTurmas  from '../../../components/Components/turmas'
import Header from '../../../components/Components/header'
import * as SplashScreen from 'expo-splash-screen';

export default function turmas() {
    SplashScreen.preventAutoHideAsync();
    const router = useRouter();
    const turmas  = [
      {
        id: 1,
        nome: '3° ano Médio Integrado',
        materia: 'Química',
        icone: require('../../../assets/images/telaInicialLogin/quimica 1.png'),
        cor: '#A60000',
        professor: 'Ana',
        participantes: ['Fabricio', 'Gabriel', 'Kemylly', 'Ellen', 'Daniel', 'João']
      },

      {
        id: 2,
        nome: '2° ano Médio Integrado',
        materia: 'Matemática ',
        icone: require('../../../assets/images/telaInicialLogin/geometria 1.png'),
        cor: '#6700A6',
        professor: 'Eli',
        participantes: ['Fabricio', 'Gabriel', 'Vitor', 'Melrick', 'Polyana', 'Michael']
      },

      {
        id: 3,
        nome: 'PIBIT',
        materia: 'Matemática ',
        icone: require('../../../assets/images/telaInicialLogin/geometria 1.png'),
        cor: '#1700A6',
        professor: 'Edel',
        participantes: ['Fabricio', 'Gabriel', 'Helysson', 'Augusto', 'Pedrin', 'Pepo']
      },

      {
        id: 4,
        nome: 'PIBIC - Educageo',
        materia: 'Geografia',
        icone: require('../../../assets/images/telaInicialLogin/globo 1.png'),
        cor: '#A60000',
        professor: 'Clécio',
        participantes: ['Fabricio', 'Gabriel', 'Helysson', 'Melrick', 'Ana', 'Jorge', 'Frederico', 'Sérgio']
      },

      {
        id: 5,
        nome: 'IFAL - RL 912A',
        materia: 'Química',
        icone: require('../../../assets/images/telaInicialLogin/quimica 1.png'),
        cor: '#1700A6',
        professor: 'Mikael',
        participantes: ['Fabricio', 'Gabriel', 'Helysson', 'Melrick', 'Ana', 'Matheus', 'Vitória', 'Luiza']
      },

      {
        id: 6,
        nome: 'PIBIC - história',
        materia: 'História',
        icone: require('../../../assets/images/telaInicialLogin/historia 1.png'),
        cor: '#6700A6',
        professor: 'Bruno',
        participantes: ['Fabricio', 'Gabriel', 'Helysson', 'Melrick', 'Ana', 'Jorge', 'Frederico', 'Sérgio', 'Melrick', 'Vitor', 'Davi']
      }
    ];

    const numTurmas = turmas.length
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
      const mudarPagina = async () => {
      router.replace('/(tabs)/Telas/criarTurma'); 
    }
  return ( 

    numTurmas === 0 ? 
    <View style={styles.container}>
    <Header nome='Turmas' caminho={'/(tabs)/Telas/telaLogin'}></Header>

    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{color: '#cccc', fontSize:25, fontFamily: 'KumbhSans_500Medium', textAlign: 'center'}}>Crie sua primeira turma!</Text>
    </View>
 
      <Pressable style={styles.buttonAdd} onPress={mudarPagina} >
        <Avatar.Text size={65} label="+" />
      </Pressable>

    </View> :  
     <View style={styles.container}>
      <Header nome='Turmas' caminho={'/(tabs)/Telas/telaLogin'}></Header>

   <FlatList
    data={turmas}
    renderItem={({item}) =>  
    <View style={styles.containerTurma}>
      <ContainerTurmas nome={item.nome} professor={item.professor} materia={item.materia} icone={item.icone} cor={item.cor}/>
    </View>
      }
    />
 <Pressable style={styles.buttonAdd} onPress={mudarPagina} >
        <Avatar.Text size={65} label="+" />
      </Pressable>
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
        borderRadius: 100,
        justifyContent: 'flex-end',
        paddingRight: 20,
        paddingBottom: 10
      },
    
      containerTurma: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        height: 130
      }
});