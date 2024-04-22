import {StyleSheet, View, Text, TextInput} from 'react-native';

export default props=>{
    return(
      <View style={styles.bloco}>
        <Text>Informe o seu peso (Kg)</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          keyboardType='numeric'
          value={props.peso}
          onChangeText={newText => props.aoModificar(newText)}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    borderRadius: 10
  },
  bloco: {
    marginBottom: 20,
    width: '100%'
  },
});
  