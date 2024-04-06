import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import ButtonLogin from './buttonsLogin';
export default function App() {
  return (
    <View style={styles.container}>
     <Text>Login:</Text>
      <TextInput
        style={styles.input}
      />
      
      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
      />

<Button
        title="Entrar"
      />

      <Text>Entrar com:</Text>

      <ButtonLogin nome={"Google"} foto={require('./assets/Image/google.png')}/>
      <ButtonLogin nome={"Facebook"} foto={require('./assets/Image/facebook.png')}/>
      <ButtonLogin nome={"Apple"} foto={require('./assets/Image/apple.png')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
