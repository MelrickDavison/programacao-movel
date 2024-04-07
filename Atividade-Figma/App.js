import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
 
  <View style={styles.container}>
           <LinearGradient
        colors={['#1A191A', 'transparent']}
        style={styles.background}
      />
      <View style={styles.logo}>
     <Image style={styles.imgLogo}  source={require('./assets/Image/logo_Instudo.png')} />
      </View>
 
 
    

  </View>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9C56D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 4500,
  },
  logo: {
    position: 'absolute',
    top: 50,
    left: 40,
    height: 150,
    width: 155,

  },

  imgLogo: {
    height: 140,
    width: 305,
    objectFit: 'contain'
  },
});
