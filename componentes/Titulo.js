import {StyleSheet, View, Text } from 'react-native';

export default function Titulo (){
    return(
      <View style={styles.bloco}>
        <Text style={styles.titulo}>Calculadora de IMC</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 20,
    width: '100%'
  },
  titulo: {
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});