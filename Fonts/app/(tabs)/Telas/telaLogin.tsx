import { View, Text, Button } from 'react-native'
import React from 'react';
import { auth } from '../../../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function telaLogin() {
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, 'kggr1@aluno.ifal.edu.br', 'Kemylly15')
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
        });
    }

  return (
    <View>
      <Text>telaLogin</Text>

      <Button title='Login' onPress={handleLogin}/>
    </View>
  )
}