import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { IconButton, TextInput, Button} from 'react-native-paper';

type ContainerTurmasProps = {
  id: string;
  nome: string;
  professor: string;
  materia: string;
  onEdit: (nomeEdit: string) => void;
  onDelete: () => void;
};

export default function ContainerTurmas({   id,
  nome,
  professor,
  materia,
  onEdit,
  onDelete
}: ContainerTurmasProps) {

  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visibleMenuEdit, setVisibleMenuEdit] = useState(false);
  const [nomeEdit, setNome] = useState('');
  const [carregamento, setCarregamento] = useState(false)

  const openMenu = () => setVisibleMenu(true);
  const closeMenu = () => setVisibleMenu(false);
  const openMenuEdit = () => setVisibleMenuEdit(true);
  const closeMenuEdit = () => setVisibleMenuEdit(false);

  
  const handleEdit = async () => {
    setCarregamento(true)
   await onEdit(nomeEdit)
    setCarregamento(false)
    closeMenuEdit();
    closeMenu();
  };

  return (
    <View style={styles.container}>
      {/* Menu - Modal para exibir opções */}
      <Modal
        visible={visibleMenu}
        transparent={true}
        animationType="fade"
        onRequestClose={closeMenu}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <IconButton icon="close" onPress={closeMenu} />
            <Pressable onPress={() => {openMenuEdit()}}>
              <Text style={{ fontFamily: 'KumbhSans_500Medium', fontSize: 20 }}>Editar</Text>
            </Pressable>
            <Pressable onPress={() => { closeMenu();  onDelete(); }}>
              <Text style={{ color: 'red', fontFamily: 'KumbhSans_500Medium', fontSize: 20, paddingTop: 10 }}>Excluir</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Modal para editar nome */}
      <Modal
        visible={visibleMenuEdit}
        transparent={true}
        animationType="fade"
        onRequestClose={closeMenuEdit}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalEditContainer}>
            <IconButton icon="close" onPress={closeMenuEdit} />   

            <TextInput
            style={styles.inputNome}
              label="Nome"
              placeholder="Digite o novo nome aqui"
              onChangeText={setNome}
            />

<Button loading={carregamento} mode="contained" onPress={ () => {handleEdit(); setCarregamento(true)}}>
    Editar
  </Button>
          </View>
        </View>
      </Modal>

      {/* Botão de menu */}
      <View style={styles.containerOptions}>
        <TouchableOpacity onPress={openMenu}>
          <IconButton icon="dots-vertical" iconColor={'#fff'} size={20} />
        </TouchableOpacity>
      </View>

      {/* Conteúdo principal */}
      <View style={styles.containerInfo}>
        <TouchableOpacity style={styles.buttonTurma}>
          <Text style={styles.titulo}>
            {nome} - {materia}
          </Text>

          <View style={styles.containerSubtitle}>
            <Text style={styles.subtitle}>Prof.: {professor}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({

    container: {
      flex: 1,
      paddingTop: 10,
      backgroundColor: '#6700A6',
      borderRadius: 15,
      width: '92%',
      height: '100%',
      justifyContent: 'flex-start',
      paddingHorizontal: 10, 
    },

    containerOptions: {
      position: 'absolute',
      alignItems: 'flex-end', 
      marginBottom: 10,
      top: 10,
      right: 10,
      zIndex: 1
    },

    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: 120,
      alignItems: 'center',
    },

    modalEditContainer:{
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: 270,
      alignItems: 'center',
    },
    containerInfo: {
      flex: 1, 
      justifyContent: 'flex-start', 
    },

    titulo: {
      color: '#fff',
      fontFamily: 'KumbhSans_500Medium',
      fontSize: 20,
      paddingLeft: 10,
      flexWrap: 'wrap', 
    },

    containerSubtitle: {
      flexDirection: 'row',
      paddingRight: 20,
      paddingTop: 5,
      justifyContent: 'flex-start',
    },

    subtitle: {
      color: '#fff',
      width: '100%',
      paddingLeft: 10,
    },

    buttonTurma: {
      padding: 10,
    },

    inputNome:{
      height: 20,
      width: 250,
      paddingBottom: 10,
    }
  });
