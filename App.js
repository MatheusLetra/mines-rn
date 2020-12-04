import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Iniciando o Campo Minado! </Text>
        <Text style={styles.welcome}> Tamanho da Grade:
        {params.getRowsAmount()} X {params.getColumnsAmount()} </Text>
        <Field/>
        <Field opened/>
        <Field opened nearMines={1}/>
        <Field mined opened/>
        <Field mined opened exploded/>
        <Field mined opened exploded/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome : {
    fontSize  : 20,
    textAlign : 'center',
    margin    : 10,
  }
});
