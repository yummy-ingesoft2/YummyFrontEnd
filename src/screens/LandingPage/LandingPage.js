import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Constants } from 'expo';
import { Link } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

export default class LandingPage extends Component {
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.txWelcome}>
          Welcome!
        </Text>
        <Text style={styles.paragraph}>
          The best choice in your menu
        </Text>

        <Button
        title="I'm hungry"
        color="#DF74A2"
        onPress={() =>
            navigate('LoginPage')
          }
        />
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
  txWelcome: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#d93078',
    color: 'white'
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#d93078',
    color: 'white',
  }
});
