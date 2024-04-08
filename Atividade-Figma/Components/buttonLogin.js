import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function ButtonLogin({nome, foto}) {
  return (
    <View style={styles.button}>
    <Pressable style={styles.buttonPressable} onPress={''}>
         <Avatar.Image size={34} source={foto} style={styles.avatar}/>
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
    width: 250,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#67209E',
    marginTop: 10,
  },

  buttonPressable:{
    flexDirection: 'row', 

  },

  avatar: {
    backgroundColor: '#fff',
    marginLeft: 15
  },
  textButton: {
   color: '#fff',
   fontSize: 15,
   margin: 5,
   width: 250,
  }
});
