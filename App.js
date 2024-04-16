import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState }  from 'react';

import Peso from './componentes/Peso';
import Altura from './componentes/Altura';
import BotaoCalcular from './componentes/BotaoCalcular';
import Resultado from './componentes/Resultado';
import Tabela from './componentes/Tabela';
import Titulo from './componentes/Titulo';


export default function App() {
  const [peso, setPeso]=useState(0)
  const [altura, setAltura]=useState(0)
  const [resultado, setResultado]=useState()

  function calcImc() {
    if(peso == 0 || !peso){
      alert('Informe o peso')
      return
    }
    if(altura == 0 || !peso){
      alert('Informe a altura')
      return
    }
    const imc = peso / (Math.pow(altura, 2))
    setResultado(imc.toFixed(1))
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Titulo/>
      <Peso aoModificar={setPeso}/>
      <Altura aoModificar={setAltura}/>
      <BotaoCalcular aoClicar={calcImc}/>
      <Resultado resultado={resultado}/>
      <Tabela/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 27,
    padding: 10
  },
  bloco: {
    marginBottom: 20,
    width: '100%'
  },
});
