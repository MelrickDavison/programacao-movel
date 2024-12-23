import { View, Text, StyleSheet, FlatList} from 'react-native'
import { useRouter } from 'expo-router';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from '../../../components/Components/header'
import { collection, addDoc, getDocs} from 'firebase/firestore'
import { db } from '../../../firebaseConfig';

export default function participanteTurmas() {
  const [searchQuery, setSearchQuery] = useState('')
  const collectionRef = collection(db, 'turmas');
  const [turma, setTurma] = useState([])
  const router = useRouter();
  const [nomeTurma, setNomeTurma] = useState('')
  const [materia, setMateria] = useState('')
  const [nomeProf, setNomeProf] = useState('')
  
  getDocs(collectionRef).then((turma) => {
    let todoData = turma.docs.map((doc, id) => ({ ...doc.data(), id: id }))
    setTurma(todoData)
    }).catch((err) => {
      console.log(err);
    })

let flagCor = 0
let cor1 = "#A60000"
let cor2 = "#6700A6"

  const verificarNomeTurma = () => {
    var flag = true
    for(let i = 0; i < turma.length; i++){
      turma[i].nome == nomeTurma ? flag = false : flag = true
      turma[i].id % 2 == 0 ? flagCor = 1 : flagCor = 2
    }
    return flag
  }

const submitTurma = async () => {
  if(verificarNomeTurma()){
    if(flagCor == 1){
    try {
      await addDoc(collectionRef, {
        nome: nomeTurma,
        materia: materia,
        professor: nomeProf,
        cor: cor1
      })
    } catch (err) {
      console.log(err);
    }
  }
    else{
      try {
        await addDoc(collectionRef, {
          nome: nomeTurma,
          materia: materia,
          professor: nomeProf,
          cor: cor2
        })
      } catch (err) {
        console.log(err);
      }
    router.replace('/(tabs)/Telas/participanteTurmas')
  }
  } else{
    console.log("error")
  }
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
<Button mode="contained" style={{width: "45%"}} onPress={submitTurma} >Finalizar</Button>
</View>

  
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#1a191a",
    paddingTop: 30,
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