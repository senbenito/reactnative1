import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View } from 'react-native';


export default class Confirm extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Your Donation: {this.props.navigation.state.params.donation}</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigate('Thankyou')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
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
    // fontFamily: 'Avenir',
    color: '#ffffff',
  },
  button:{
    margin: 20,
    backgroundColor: '#f4e375',
    borderRadius: 25,
  }
});
