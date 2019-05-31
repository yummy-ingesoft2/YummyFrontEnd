import * as React from 'react';
import { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { Text, TextInput, Button, View, StyleSheet, Image, RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native';
import { Constants } from 'expo';
import { connect } from "react-redux";

//import { history } from "../_helpers";
//import { alertActions } from "../_actions";
//import { PrivateRoute } from "../_utils";

import Navbar from "../common/NavBar/NavBar.js";


// You can import from local files
import AssetExample from '../components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


//screens
import LandingPageYummy from "../screens/LandingPageYummy";
import LoginPageYummy from "../screens/LoginPageYummy"
import RegisterPageYummy from "../screens/RegisterPageYummy"

class LoginPageYummy extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
        source={require('/assets/yummy-logo.jpeg')}
        />
        <TextInput
          style={styles.logmail}
          type="email"
          placeholder="Email"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.logpass}
          type="pasword"
          placeholder="Contraseña"
          onChangeText={(text) => this.setState({text})}
        />
        <View style={styles.buttonSign}>
          <Button
            title="Entrar"
            color="#DF74A2"
        />
        </View>
        <View style={styles.buttonGoo}>
          <Button
            title="Google"
            color="#591432"
        />
        </View>
        <View style={styles.buttonFace}>
          <Button
            title="Face"
            color="#992255"
        />
        </View>
        <View style = {styles.lineStyle} />
        <Text style={styles.textSignUp}>
            ¿Aún no tienes cuenta?
        </Text>
        <View style={styles.buttonSignUp}>
          <Button
            title="Regístrate"
            color="#DF74A2"
        />
        </View>
      </View>

    );
  }

}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RegisterPageYummy/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#d93078',
    alignItems: 'center',
    paddingTop: 25,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d93078',
    paddingTop: 120,
  },
  txWelcome: {
    marginTop: 24,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#d93078',
    color: 'white'
  },
  paragraph: {
    marginTop: 8,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#d93078',
    color: 'white',
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 160,
  },
  logmail: {
    height: 35,
    width: 250,
    padding: 10,
    marginTop: 20,
    fontSize: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: '#BF2A6B',
  },
  logpass: {
    height: 35,
    width: 250,
    padding: 10,
    marginTop: 20,
    marginBottom: 15,
    fontSize: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: '#BF2A6B',
  },
  buttonGoo: {
    height: 40,
    width: 120,
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#BF2A6B',
  },
  buttonFace: {
    height: 40,
    width: 120,
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#BF2A6B',
  },
  buttonSign: {
    height: 40,
    width: 70,
    marginBottom: 15,
    marginLeft: 180,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#BF2A6B',
  },
  buttonSignUp: {
    height: 40,
    width: 110,
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#BF2A6B',
  },
  lineStyle: {
        width: 280,
        borderWidth: 0.5,
        borderColor:'gray',
        margin:10,
   },
  textSignUp: {
    marginTop: 8,
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#d93078',
    color: 'white'
  }
});
