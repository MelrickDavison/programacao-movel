import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [cliques, setCliques] = useState(0);
  return (
    <View style={styles.container}>
      <Button title="OK" onPress={()=>{
        setCliques(cliques + 1);
      }}/>

      <Text>Quantidade de cliques: {cliques}</Text>
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
