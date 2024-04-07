import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Pressable } from 'react-native';

export default function ButtonLogin({nome, foto}) {
  return (
    <View style={styles.button}>
    <Pressable onPress={''}>
            <Image style={styles.imagem} source={foto}
            />
         <Text>{nome}</Text>
    </Pressable>
    </View>

  );
}

const styles = StyleSheet.create({
  button: {

  },
  imagem: {
    height: 20,
    width: 20,
  }
});
