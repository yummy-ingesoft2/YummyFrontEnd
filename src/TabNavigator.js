import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import HomePage from './screens/HomePage/HomePage';
import SearchPage from './screens/SearchPage/SearchPage';
import ProfilePage from './screens/ProfilePage/ProfilePage';

export default createBottomTabNavigator (
  {
    Home: {screen: HomePage},
    Search: {screen: SearchPage},
    Profile: {screen: ProfilePage},
  },
  {
    navigationOptions: ({ navigation}) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if ( routeName === 'Home')
        {
          iconName = ios-home;
        }
        else if ( routeName === 'Search')
        {
          iconName = ios-search;
        }
        else if ( routeName === 'Profile')
        {
          iconName = md-person;
        }
        return <Ionicons name = {iconName} size = {25} color = {tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#DF74A2',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
  }
);
