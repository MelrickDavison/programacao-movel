import { useRoute } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { StyleSheet, Text, View, Button} from 'react-native';
import { auth } from '../../../firebaseConfig';

export default function App() {
  const user = auth.currentUser;
  const router = useRoute();

  const handleLogout = async () => {
    await signOut(auth);
    router.replace('/(tabs)/Telas/telaLogin')  
  }
  return (
    <View style={styles.container}>
      <Text>{user.email}, bem-vindo</Text>
      <Button onPress={handleLogout} title={'Sair'}></Button>
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
});
