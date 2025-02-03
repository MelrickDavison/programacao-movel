import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import { Button, Appbar, TextInput, Avatar, ActivityIndicator, MD2Colors} from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import {useFonts} from 'expo-font' 
import { Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import { KumbhSans_500Medium } from '@expo-google-fonts/kumbh-sans';
import { useState, useEffect} from 'react';
import  ContainerTurmas  from '../../../components/Components/turmas'
import Header from '../../../components/Components/header'
import * as SplashScreen from 'expo-splash-screen';
import { collection, getDocs, QuerySnapshot, DocumentData, updateDoc, addDoc, serverTimestamp, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig';

export default function turmas() {
    SplashScreen.preventAutoHideAsync();
    const router = useRouter();
    const collectionRef = collection(db, 'turmas');
    const [carregamento, setCarregamento] = useState(false)
    type Turma = {
      id: string;
      nome: string;
      materia: string;
      icone: any;
      cor: string;
      professor: string;
      participantes: string[];
      onEdit: (nomeEdit: string, professorEdit: string) => void;
    };

    const [turmas, setTurmas] = useState<Turma[]>([]);;
    // const turma  = [
    //   {
    //     id: 1,
    //     nome: '3° ano Médio Integrado',
    //     materia: 'Química',
    //     icone: require('../../../assets/images/telaInicialLogin/quimica 1.png'),
    //     cor: '#A60000',
    //     professor: 'Ana',
    //     participantes: ['Fabricio', 'Gabriel', 'Kemylly', 'Ellen', 'Daniel', 'João']
    //   },

    //   {
    //     id: 2,
    //     nome: '2° ano Médio Integrado',
    //     materia: 'Matemática ',
    //     icone: require('../../../assets/images/telaInicialLogin/geometria 1.png'),
    //     cor: '#6700A6',
    //     professor: 'Eli',
    //     participantes: ['Fabricio', 'Gabriel', 'Vitor', 'Melrick', 'Polyana', 'Michael']
    //   },

    //   {
    //     id: 3,
    //     nome: 'PIBIT',
    //     materia: 'Matemática ',
    //     icone: require('../../../assets/images/telaInicialLogin/geometria 1.png'),
    //     cor: '#1700A6',
    //     professor: 'Edel',
    //     participantes: ['Fabricio', 'Gabriel', 'Helysson', 'Augusto', 'Pedrin', 'Pepo']
    //   },

    //   {
    //     id: 4,
    //     nome: 'PIBIC - Educageo',
    //     materia: 'Geografia',
    //     icone: require('../../../assets/images/telaInicialLogin/globo 1.png'),
    //     cor: '#A60000',
    //     professor: 'Clécio',
    //     participantes: ['Fabricio', 'Gabriel', 'Helysson', 'Melrick', 'Ana', 'Jorge', 'Frederico', 'Sérgio']
    //   },

    //   {
    //     id: 5,
    //     nome: 'IFAL - RL 912A',
    //     materia: 'Química',
    //     icone: require('../../../assets/images/telaInicialLogin/quimica 1.png'),
    //     cor: '#1700A6',
    //     professor: 'Mikael',
    //     participantes: ['Fabricio', 'Gabriel', 'Helysson', 'Melrick', 'Ana', 'Matheus', 'Vitória', 'Luiza']
    //   },

    //   {
    //     id: 6,
    //     nome: 'PIBIC - história',
    //     materia: 'História',
    //     icone: require('../../../assets/images/telaInicialLogin/historia 1.png'),
    //     cor: '#6700A6',
    //     professor: 'Bruno',
    //     participantes: ['Fabricio', 'Gabriel', 'Helysson', 'Melrick', 'Ana', 'Jorge', 'Frederico', 'Sérgio', 'Melrick', 'Vitor', 'Davi']
    //   }
    // ];
    const getTurma = async () => {
      try {
        setCarregamento(true)
        const turmasSnapshot: QuerySnapshot<DocumentData> = await getDocs(collectionRef);
        const turmasData = turmasSnapshot.docs.map((doc, id) => ({
          ...doc.data(),
          id: doc.id, 
        }));
        setTurmas(turmasData); //Este erro não interfere em nada, FAVOR NÃO MEXER
        setCarregamento(false)
      } catch (err) {
        console.error(err);
      }
    };
    
    useEffect(() => {
      
      getTurma();
    }, []);
    

  const updateTurma = async (id: string, nomeEdit: string) => {
    try {
      setCarregamento(true)
      const turmaDoc = doc(db, 'turmas', id);
      await updateDoc(turmaDoc, {
        nome: nomeEdit, // Substitua pelo valor real do nome editado
      });
           // Recarrega as turmas após a edição
           getTurma(); // Chama novamente a função para buscar as turmas atualizadas
          } catch (err) {
            console.error('Erro ao editar turma:', err);
          }
          setCarregamento(false)
        };

        const handleDelete = async (id: string) => {
          try {
            const turmaDoc = doc(db, 'turmas', id);
            await deleteDoc(turmaDoc); // Exclui a turma do Firestore
            getTurma(); // Recarrega a lista de turmas após a exclusão
          } catch (err) {
            console.error('Erro ao excluir turma:', err);
          }
        };

    const numTurmas = turmas.length
    const [loaded, error] = useFonts({
        Ubuntu_500Medium, 
        KumbhSans_500Medium

      });
    
      if (!loaded && !error) {
        return null;
      }
      const mudarPagina = () => {
      router.replace('/(tabs)/Telas/criarTurma'); 
    }

  return ( 
    numTurmas === 0 ? 
    <View style={styles.container}>
    
    <Header nome='Turmas' caminho={'/(tabs)/Telas/telaLogin'}></Header>

    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
    <ActivityIndicator animating={carregamento} color={'#67209E'} size={'large'} />
    <Text style={
      {color: '#cccc', 
      fontSize:25, 
      fontFamily: 'KumbhSans_500Medium', 
      textAlign: 'center'}}
      >Crie sua primeira turma!</Text>
    </View>

      <Pressable style={styles.buttonAdd} onPress={mudarPagina} >
        <Avatar.Text size={65} label="+" />
      </Pressable>

    </View> :  
     <View style={styles.container}>
      <Header nome='Turmas' caminho={'/(tabs)/Telas/telaLogin'}></Header>
   <FlatList
    data={turmas}
  renderItem={({item}) =>  (
    <View style={styles.containerTurma}>
       <ContainerTurmas
                id={item.id}
                nome={item.nome}
                professor={item.professor}
                materia={item.materia}
                onEdit={(nomeEdit) => updateTurma(item.id, nomeEdit)}
                onDelete={() => handleDelete(item.id)}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
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