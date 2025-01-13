import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function ContainerTurmas({ nome, professor, materia, cor }) {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const styles = stylesFunction(cor);

  return (
    <View style={styles.container}>
      {/* Menu - Modal para exibir opções */}
      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeMenu}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <IconButton icon="close" onPress={closeMenu} />
            <Pressable onPress={() => { closeMenu(); alert('Editado!'); }}>
              <Text style={{ fontFamily: 'KumbhSans_500Medium', fontSize: 20 }}>Editar</Text>
            </Pressable>
            <Pressable onPress={() => { closeMenu(); alert('Editado!'); }}>
              <Text style={{ color: 'red', fontFamily: 'KumbhSans_500Medium', fontSize: 20, paddingTop: 10 }}>Excluir</Text>
            </Pressable>
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

const stylesFunction = (cor) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      backgroundColor: cor,
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
  });
