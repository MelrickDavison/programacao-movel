import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { KumbhSans_500Medium } from '@expo-google-fonts/kumbh-sans';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

type ContainerAlunosProps = {
  nome: string;
  isSelected: boolean;
  onPress: () => void;
};

export default function ContainerAlunos({
  nome,
  isSelected,
  onPress,
}: ContainerAlunosProps) {
  SplashScreen.preventAutoHideAsync();

  const [loaded, error] = useFonts({
    KumbhSans_500Medium,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Avatar.Image size={40} source={require('../../assets/images/telaAlunos/perfil.png')} />
      <View style={styles.containerTitle}>
        <Text style={styles.nome}>{nome}</Text>
      </View>


      <Pressable
        style={isSelected ? styles.buttonAdicionarAlunosSelecionado : styles.buttonAdicionarAlunos}
        onPress={onPress} 
      >
        <Text style={{ color: '#fff' }}>{isSelected ? '-' : '+'}</Text> 
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerTitle: {
    backgroundColor: '#9C56D3',
  },
  nome: {
    color: '#fff',
    fontFamily: 'KumbhSans_500Medium',
    fontSize: 20,
    paddingLeft: 10,
    width: 250,
    paddingBottom: 5,
  },
  buttonAdicionarAlunos: {
    borderRadius: 100,
    width: 25,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71BBFF',
  },
  buttonAdicionarAlunosSelecionado: {
    borderRadius: 100,
    width: 25,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green', // Cor verde quando selecionado
  },
});
