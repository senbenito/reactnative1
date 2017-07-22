import React from 'react'
import { StyleSheet, Text, Button, TextInput, TouchableOpacity, View } from 'react-native';

export default class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render(){
    const { navigate } = this.props.navigation;
    console.log(this.state.amount);
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Specify an amount:</Text>
        <TextInput
           style={styles.amount}
           placeholder="Click and Type"
           onChangeText={(text) => this.setState({text})}
         />
        <View style={styles.button}>
          <TouchableOpacity onPress={()=>navigate('Confirm', {donation: this.state.text})}>
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
    flexDirection: 'column',
  },
  greeting:{
    fontSize: 30,
    // fontFamily: 'Avenir',
    color: '#ffffff',
  },
  amount:{
    fontSize: 30,
    height: 40,
    margin: 50,
    color: '#073e87',
    // fontFamily: 'Avenir',
  },
  button:{
    margin: 20,
    backgroundColor: '#f4e375',
    borderRadius: 25,
  }
});
