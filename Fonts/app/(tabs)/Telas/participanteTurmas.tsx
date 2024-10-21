import { View, Text,StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
export default function participanteTurmas() {
  const [searchQuery, setSearchQuery] = useState('')
  
  return (
    <SafeAreaView style ={styles.container}>
  <StatusBar/>  
    
    <View>
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor : "#1a191a",
    paddingTop: 30
  }
})