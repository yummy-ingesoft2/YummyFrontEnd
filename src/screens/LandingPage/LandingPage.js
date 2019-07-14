import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Constants } from 'expo';

export default class LandingPage extends Component {

  headerMode: 'none'
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    }
  }
  
  render(){

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../assets/yummy-logo.jpeg')} />
        <Text style={styles.txWelcome}>
          Welcome!
        </Text>
        <Text style={styles.paragraph}>
          The best choice in your menu
        </Text>

        <Button
        title="I'm hungry"
        color="#DF74A2"
        onPress={() => this.props.navigation.navigate('Login')}
        />

    </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#BF2A6B',
    alignItems: 'center',
    paddingTop: 25,
  },
  logo: {
    height: 250,
    width: 250,
    borderRadius: 160,
    marginTop: 80
  },
  txWelcome: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#BF2A6B',
    color: 'white'
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#BF2A6B',
    color: 'white',
  }
});