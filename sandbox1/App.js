import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Amount from './components/Amount';
import Start from './components/Start';



export default class App extends React.Component {
  constructor(props){
    super(props);


  }
    render() {
      let navigation = StackNavigator({
        Start: { screen: Start },
        Amount: { screen: Amount },
      });
      return (
        <Start navigation={navigation}/>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d8ccb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting:{
    fontSize: 30,
  },
  button:{
    margin: 20,
    backgroundColor: '#f4e375',
    borderRadius: 25,
  }
});
