import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { TabNavigator, TabBarBottom } from 'react-navigation';

class SearchPage extends React.Component {

  headerMode: 'none'
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    }
  }
  
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Yummy!
          </Text>
        </View>
        <Text>
          Holaaaaaa
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    height: 55,
    justifyContent: 'space-around',
    backgroundColor: '#d93078',
    textAlign: 'center',
  },
  headerText: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#d93078',
    color: 'white',
  }
});

export default SearchPage;
