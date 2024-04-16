import {StyleSheet, View, Text } from 'react-native';

export default props=>{
    return(
      <View style={styles.bloco}>
        <Text>Seu IMC: {props.resultado}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 20,
    width: '100%'
  },
});