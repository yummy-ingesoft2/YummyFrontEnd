import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/yummy-logo.jpeg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d93078',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderWidth: 0,
    borderColor: '#d93078',
  },
  logo: {
    height: 250,
    width: 250,
    borderRadius: 160,
  }
});
