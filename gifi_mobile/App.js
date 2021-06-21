import {Component} from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import api from './src/services/api';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      listaEventos : []
    }
  };

  buscarEventos = () => {
    const resposta = await api.get('/eventos');
    const dadosDaApi = resposta.data;
    this.setState({listaEventos : dadosDaApi});
  };

  componentDidMount(){
    this.buscarEventos();
  }

  render(){
    return(
      <View style={styles.main}>
        <Text>Eventos</Text>
      </View>
    )
  } 
}

const styles = StyleSheet.create({
  main: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
