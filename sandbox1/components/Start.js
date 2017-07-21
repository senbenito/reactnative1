import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Amount from './Amount';

export default class Start extends React.Component {
  addAmount = ()=>{
    console.log(this.props.navigation, 'hello2');
    this.props.navigation.navigate('Amount')
  }

  render(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Want to help?</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => this.addAmount()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Donate now!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
