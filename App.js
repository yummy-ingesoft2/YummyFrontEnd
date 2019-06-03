import React from 'react';
import { StyleSheet, Text, View, Navigator, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LandingPage from './src/screens/LandingPage/LandingPage';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/yummy-logo.jpeg')} />
        <LandingPage/>
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
    paddingTop: 25
  },
  logo: {
    height: 250,
    width: 250,
    borderRadius: 160,
    marginTop: 80
  }
});
