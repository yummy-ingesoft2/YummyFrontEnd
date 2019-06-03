import React from "react";
import { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Jumbotron, Button } from "reactstrap";
//import { LandingYummmyContainer } from "./StylesYummy";
//import { Router, Route, Switch } from "react-router-dom";
import { Text, TextInput, Button, View, StyleSheet, Image, RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native';
import { Constants } from 'expo';
import { connect } from "react-redux";


class RegisterPageYummy extends Component {
/*  constructor(props){
    super(props);

    this.state = {

    };
  }*/
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.logmail}
          placeholder="Nombre"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.logmail}
          placeholder="Apellido"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.logmail}
          type="date"
          placeholder="Fecha de nacimiento"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.logmail}
          type="email"
          placeholder="Email"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.logmail}
          placeholder="Teléfono"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.logmail}
          type="pasword"
          placeholder="Contraseña"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.logpass}
          type="pasword"
          placeholder="Confirmar Contraseña"
          onChangeText={(text) => this.setState({text})}
        />
        <View style = {styles.lineStyle} />
        <View style={styles.buttonSignUp}>
          <Button
            title="Registrar"
            color="#DF74A2"
        />
        </View>
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
