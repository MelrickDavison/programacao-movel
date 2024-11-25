import { View, Text, StyleSheet, FlatList} from 'react-native'
import { useRouter } from 'expo-router';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import  ContainerAlunos  from '../../../components/Components/alunos'
import Header from '../../../components/Components/header'
export default function participanteTurmas() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter();
  const [nomeTurma, setNomeTurma] = useState('')
  const [materia, setMateria] = useState('')
  const [nomeProf, setNomeProf] = useState('')
  const mudarPagina = async () => {
    router.replace('/(tabs)/Telas/Telaturmas'); 
  }
  return (
    <SafeAreaView style ={styles.container}>
  <StatusBar/>  
  <Header nome='Criar Turma' caminho={'/(tabs)/Telas/Telaturmas'}></Header>
    <View style={styles.buscar}>
    <View style={{paddingLeft: 12, paddingTop: 20}}>
    <TextInput
      label="Nome"
      value={nomeTurma}
      onChangeText={nomeTurma => setNomeTurma(nomeTurma)}
      style={styles.input}
    />
    </View>

    <View style={{paddingLeft: 12, paddingTop: 20}}>
    <TextInput
      label="Materia"
      value={materia}
      onChangeText={materia => setMateria(materia)}
      style={styles.input}
    />
    </View>
    
    <View style={{paddingLeft: 12, paddingTop: 20, paddingBottom: 20}}>
    <TextInput
      label="Professor"
      value={nomeProf}
      onChangeText={nomeProf => setNomeProf(nomeProf)}
      style={styles.input}
    />
    </View>
    </View>
    <View>
   
</View>

<View style={{alignItems: 'center'}}>
<Button mode="contained" style={{width: "45%"}} onPress={() => { router.replace('/(tabs)/Telas/participanteTurmas')}} >Finalizar</Button>
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
    alignItems: 'center',
    paddingTop: 20
  },

  input:{
    width: '80%',
  },

  containerAlunos:{

  }
})