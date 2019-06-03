import * as React from 'react';
import { Component } from 'react';
import { Text, TextInput, Button, View, StyleSheet, Image, RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native';
import { Constants } from 'expo';
import { Row, Col, Jumbotron, Button } from "reactstrap";


const LandingYummmyContainer = StyleSheet.create ({
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
  }
});

export LandingYummmyContainer;
