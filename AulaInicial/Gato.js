import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const Gato = ({idade}) =>{
    const texto = idade > 1 ? "anos" : "ano";
    const [nome, setNome] =  useState('')
    return (
        <View>
                <TextInput defaultValue={nome} onChangeText={(novoTexto) =>{
        setNome(novoTexto);
      }}/>
            <Text> Nome: {nome}</Text>
            <Text> Idade: {idade} {texto} </Text>
            
        </View>
    );
}
export default Gato;
