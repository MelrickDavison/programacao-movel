import { View, Text } from 'react-native';

const Gato = ({nome,idade}) =>{
    const texto = idade > 1 ? "anos" : "ano";
    return (
        <View>
            <Text> Nome: {nome}</Text>
            <Text> Idade: {idade} {texto} </Text>
            
        </View>
    );
}
export default Gato;
