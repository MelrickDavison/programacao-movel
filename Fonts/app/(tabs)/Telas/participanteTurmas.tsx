import { View, Text, StyleSheet, FlatList} from 'react-native'
import { useRouter } from 'expo-router';
import { Searchbar, Button } from 'react-native-paper';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import  ContainerAlunos  from '../../../components/Components/alunos'
import Header from '../../../components/Components/header'
export default function participanteTurmas() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter();
  const alunos = [
    {
      nome: "Powder"
    },
    {
      nome: "Jinx"
    },
    {
      nome: "Ekko"
    },
    {
      nome: "Vander"
    },
    {
      nome: "Silco"
    },
    {
      nome: "Sevika"
    },
    {
      nome: "Aisha"
    },
    {
      nome: "Jayce"
    },
    {
      nome: "Viktor"
    },
    {
      nome: "Ambessa"
    },
    {
      nome: "Mel"
    },
    {
      nome: "Singed"
    },
    {
      nome: "Caitlyn"
    },
    {
      nome: "Maddie"
    },
  ]
  const mudarPagina = async () => {
    router.replace('/(tabs)/Telas/Telaturmas'); 
  }
  return (
    <SafeAreaView style ={styles.container}>
  <StatusBar/>  
  <Header nome='Participantes' caminho={'/(tabs)/Telas/criarTurma'}></Header>
    <View style={styles.buscar}>
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
    </View>

    <View>
    <FlatList
    data={alunos}
    renderItem={({item}) =>  
    <View style={styles.containerAlunos}>
      <ContainerAlunos nome={item.nome}/>
    </View>
    }
    />
</View>

<View style={{alignItems: 'center'}}>
<Button mode="contained" style={{width: "45%"}} onPress={() => { router.replace('/(tabs)/Telas/Telaturmas')}} >Finalizar</Button>
</View>

  
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor : "#1a191a",
    paddingTop: 30,
  },

  buscar: {
    paddingTop: 20
  },

  containerAlunos:{

  }
})