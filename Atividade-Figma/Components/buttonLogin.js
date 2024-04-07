import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Pressable } from 'react-native';

export default function ButtonLogin({nome, foto}) {
  return (
    <View style={styles.button}>
    <Pressable style={styles.buttonPressable} onPress={''}>
            <Image style={styles.imagem} source={foto}
            />
         <Text style={styles.textButton}>{nome}</Text>
    </Pressable>
    </View>

  );
}

const styles = StyleSheet.create({
  button: { 
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignContent: 'flex-start',
    width: 300,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#67209E',
    marginTop: 10,
  },

  buttonPressable:{
    flexDirection: 'row', 

  },

  imagem: {
    height: 20,
    width: 20,
    padding: 10,
  },
  textButton: {
   color: '#fff',
   fontSize: 18,
  }
});
