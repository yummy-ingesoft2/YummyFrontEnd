import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer, ScrollView } from 'react-navigation';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Card } from 'react-native-paper';

class HomePage extends React.Component {
  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.paragraph}>
              Yummy!
            </Text>
          </View>
          <Card style={styles.card}>
            <Image
              style={styles.image}
              source={require('../../assets/dessert.jpg')}
            />
          </Card>

          <Button
            title="Populares"
            color="#DF74A2"
          />

          <Card style={styles.card}>
            <Image
              style={styles.image}
              source={require('../../assets/dessert.jpg')}
            />
          </Card>

          <Button
            title="Promociones"
            color="#DF74A2"
          />

          <Card style={styles.card}>
            <Image
              style={styles.image}
              source={require('../../assets/dessert.jpg')}
            />
          </Card>
        </View>
      </ScrollView>
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
  },
  image: {
    height: 200,
    width: 550,
    opacity: 0.8,
  },
  card: {
    height: 200,
    width: 20,
  }
});

export default HomePage;
