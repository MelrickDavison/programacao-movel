import { View, Text, StyleSheet, FlatList} from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Searchbar, Button } from 'react-native-paper';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { db } from '../../../firebaseConfig';
import  ContainerAlunos  from '../../../components/Components/alunos'
import { collection, getDocs, QuerySnapshot, DocumentData, addDoc, serverTimestamp, doc, deleteDoc } from 'firebase/firestore'
import Header from '../../../components/Components/header'
export default function participanteTurmas() {
  const [searchQuery, setSearchQuery] = useState('');
  const [participantes, setParticipantes] = useState<string[]>([]); 
  const {nome, materiaTurma, prof} = useLocalSearchParams()
  const collectionRef = collection(db, 'turmas');
  const [carregamento, setCarregamento] = useState(false)
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
    }
  ]
  const toggleParticipante = (nome: string) => {
    setParticipantes((prevParticipantes) => {
      if (prevParticipantes.includes(nome)) {
        return prevParticipantes.filter((participante) => participante !== nome); // Remove se já estiver selecionado
      } else {
        return [...prevParticipantes, nome]; // Adiciona o aluno à lista de participantes
      }
    });
  };

const submitTurma = async () => {
  setCarregamento(true)
console.log(participantes)
    try {
      await addDoc(collectionRef, {
        nome: nome,
        materia: materiaTurma,
        professor: prof,
        cor: '#6700A6',
        participantes: participantes
      })
    } catch (err) {
      console.log(err);
    }
    router.replace('/(tabs)/Telas/Telaturmas')
    setCarregamento(false)
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
          data={alunos.filter((aluno) =>
            aluno.nome.toLowerCase().includes(searchQuery.toLowerCase())
          )}
          renderItem={({ item }) => (
            <View style={styles.containerAlunos}>
              <ContainerAlunos
                nome={item.nome}
                isSelected={participantes.includes(item.nome)} // Passa se o aluno está selecionado
                onPress={() => toggleParticipante(item.nome)} // Alterna a seleção
              />
            </View>
          )}
          keyExtractor={(item) => item.nome} // Usa o nome como chave única
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Button
          mode="contained"
          loading={carregamento}
          style={{ width: '45%' }}
          onPress={submitTurma}
        >
          Finalizar
        </Button>
      </View>
    </SafeAreaView>
  );
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