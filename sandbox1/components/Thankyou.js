import React from 'react';
import { StyleSheet, Text, Button, Alert, TouchableOpacity, View } from 'react-native';

export default class Thankyou extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Thank you!</Text>
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
    fontSize: 50,
  },
});
