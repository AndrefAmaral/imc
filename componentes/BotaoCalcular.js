import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default props=>{
    return(
        <View style={styles.bloco}>
        <TouchableOpacity 
            style={styles.botao} 
            onPress={props.aoClicar}
        >
          <Text style={styles.textoBotao}>{props.tituloDoBotao}</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 20,
    width: '100%'
  },
  botao: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20
  },
  textoBotao: {
    color: '#ffffff',
    textTransform: 'uppercase'
  }
});