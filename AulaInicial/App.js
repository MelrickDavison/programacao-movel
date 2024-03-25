import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View} from 'react-native';
import Gato from './Gato'
export default function App() {

  return (
    <View style={styles.container}>
  
      <Gato nome="Black" idade={17}/>
      <Gato nome="Minguau" idade={17}/>
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
});
