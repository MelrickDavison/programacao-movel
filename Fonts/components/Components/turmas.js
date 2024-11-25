import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { KumbhSans_500Medium } from '@expo-google-fonts/kumbh-sans';
import { useState, useEffect} from 'react';
import {useFonts} from 'expo-font' 
import * as SplashScreen from 'expo-splash-screen';
 
export default function ContainerTurmas ({nome, professor, materia, icone, cor}) {
  SplashScreen.preventAutoHideAsync();
const styles = stylesFunction(cor)
//Fazer o import de cada fonte
const [loaded, error] = useFonts({
KumbhSans_500Medium
});

//Controle da Splash Screen
useEffect(() => {
  if (loaded || error) {
    SplashScreen.hideAsync(); //Se a fonte for carregada ou tiver um erro vai esconder a splash screen
  }
}, [loaded, error]);

if (!loaded && !error) {
  return null;
}

  return (
    <Pressable style={styles.buttonTurma}>
      <Text style={styles.titulo}>{nome} - {materia}</Text>
        <View style={styles.containerSubtitle}>      
          <Text style={styles.subtitle}>Prof.: {professor}</Text>
          <Image style={styles.icone} source={icone}/>
        </View>

    </Pressable>
  )


}
 const stylesFunction = (cor) => StyleSheet.create( {
    buttonTurma: {
      flex: 1,
      paddingTop: 10,
      backgroundColor: cor,
      justifyContent: 'flex-start',
      borderRadius: 15,
      width: '92%'
    },

    titulo: {
      color: '#fff',
      fontFamily: 'KumbhSans_500Medium',
      fontSize: 20,
      paddingLeft: 10,
      width: 250,
      paddingBottom: 5,
    },

    containerSubtitle:{
      flex: 1,
      flexDirection: 'row',
      paddingRight: 20,
      paddingBottom: 10,
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    },

    subtitle: {
      color: '#fff',
      width:  100,
      paddingLeft: 10,
    },

    icone: {
      height: 35,
      width: 35,
    }

  })