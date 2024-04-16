import {StyleSheet, View, Text, TextInput} from 'react-native';

export default props=>{
    return(
      <View style={styles.bloco}>
        <Text>Informe o seu peso</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          keyboardType='numeric'
          onChangeText={text => props.aoModificar(text)}
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
  