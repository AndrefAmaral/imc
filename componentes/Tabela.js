import {StyleSheet, View, Image } from 'react-native';

export default props=>{
    return(
      <View style={styles.bloco}>
        <Image
            source={require('../assets/classificacaoIMC.png')}
            style={styles.imagem}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 20,
    width: '100%'
  },
  imagem: {
    width: '100%',
    marginTop: -57,
    resizeMode: 'contain'
  }
});