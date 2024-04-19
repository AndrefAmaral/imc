import {StyleSheet, View, Text, TextInput} from 'react-native';

export default props=>{
    return(
      <View style={styles.bloco}>
        <Text>Informe a sua altura (m)</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={false}
          keyboardType='numeric'
          value={props.text}
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