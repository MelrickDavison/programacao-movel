import { StyleSheet, Text, View} from 'react-native';
import { auth } from '../../../firebaseConfig'

export default function App() {
  const user = auth.currentUser;
  return (
    <View style={styles.container}>
      <Text>{user.email}, bem-vindo</Text>
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
