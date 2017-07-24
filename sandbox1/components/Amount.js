import React from 'react'
import { StyleSheet, Text, Button, TextInput, TouchableHighlight, View, Image } from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";

export default class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shannon",
      email: "me@this.com",
      ZIP: '80302',
      form: {
        values: {
          number: "",
          expiry: "",
          cvc: "",
        }
      }
    };
  }

  onChange = (form) => {
    this.setState({form: form});
    console.log('state', this.state.form);
  }

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
        style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(ref) => {this.setState({name: ref}); console.log(ref)}}
        ref='firstName'
        value={this.state.name}
        />

        <Text> {this.state.form.values.number} </Text>
        <CreditCardInput onChange={this.onChange} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d8ccb',
    alignItems: 'center',
  }
});
