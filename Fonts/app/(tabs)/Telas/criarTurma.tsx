import { View, StyleSheet} from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Button, TextInput, Text } from 'react-native-paper';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from '../../../components/Components/header'

import turmas from './Telaturmas';

export default function participanteTurmas() {

  const [turma, setTurma] = useState([])
  const router = useRouter();
  const [nomeTurma, setNomeTurma] = useState('')
  const [materia, setMateria] = useState('')
  const [nomeProf, setNomeProf] = useState('')
  const { nome, materiaTurma, prof } = useLocalSearchParams()

const criarTurma = () => {
  let turmaNova = {
    nome: nomeTurma,
    materia: materia,
    professor: nomeProf
  }
  console.log(turmaNova)

  

  router.push({
    pathname: '/(tabs)/Telas/participanteTurmas',
    params: { nome: nomeTurma, materiaTurma: materia, prof: nomeProf}
  })
 
}

  return (
    <SafeAreaView style ={styles.container}>  
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
<Button mode="contained" style={{width: "45%"}} onPress={criarTurma} >Finalizar</Button>
</View>

  
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#1a191a",
  },

  buscar: {
    alignItems: 'center',
    paddingTop: 20
  },

  input:{
    width: 270,
    color: '#fff',
  },

  containerAlunos:{

  }
})

