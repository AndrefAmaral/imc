import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
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

    if(imc < 18.5) {
      return setResultado(imc.toFixed(1) + ' \nVocê está abaixo do peso. Procure um especialista na área.')
    } else if(imc >= 18.6 && imc <= 24.9) {
      return setResultado(imc.toFixed(1) + ' \nParabéns! Seu peso está normal.')
    } else if(imc >= 25) {
      return setResultado(imc.toFixed(1) + ' \nVocê está acima do peso! Procure um especialista na área.')
    }
  }
  
  function zerar() {
    setPeso(0)
    setAltura(0)
    setResultado('')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Titulo/>
      <Peso aoModificar={setPeso}/>
      <Altura aoModificar={setAltura}/>
      <BotaoCalcular aoClicar={calcImc} tituloDoBotao='Calcular IMC'/>
      <BotaoCalcular aoClicar={zerar} tituloDoBotao='Limpar dados'/>
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
  }
});
