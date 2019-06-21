import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Card } from 'react-native-paper';

class ProfilePage extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.paragraph}>
            Yummy!
          </Text>
        </View>
        <Card>
          <Button
            title="I'm hungry"
            color="#DF74A2"
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 80,
    justifyContent: 'space-around',
    backgroundColor: '#d93078',
    textAlign: 'center',
  },
  paragraph: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#d93078',
    color: 'white',
  }
});

export default ProfilePage;
