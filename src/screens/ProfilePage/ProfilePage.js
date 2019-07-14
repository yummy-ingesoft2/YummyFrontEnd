import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Card } from 'react-native-paper';

class ProfilePage extends React.Component {

  headerMode: 'none'
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    }
  }
  
  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Yummy!
            </Text>
          </View>

          <View>
            <Image style={styles.image}
              source={require('../../assets/profileIcon.png')}
            />
          </View>

          <View>
            <Text style={styles.nameText}>
              Name Lastname 
            </Text>
          </View>
          <View style = {styles.lineStyle} />

          <View>
            <Image style={styles.icon}
              source={require('../../assets/emailIcon.png')}
            />
            <Text style={styles.paragraph}>
              example@email.com
            </Text>
          </View>
          <View>
            <Image style={styles.icon}
              source={require('../../assets/phoneIcon.png')}
            />
            <Text style={styles.paragraph}>
              +1 365 45 85 
            </Text>
          </View>
          <View>
            <Image style={styles.icon}
              source={require('../../assets/buildingIcon.png')}
            />
            <Text style={styles.paragraph}>
              Bogota
            </Text>
          </View>
          <View>
            <Image style={styles.icon}
              source={require('../../assets/locationIcon.png')}
            />
            <Text style={styles.paragraph}>
              Calle 23 #2-36
            </Text>
          </View>
          <View>
            <Image style={styles.icon}
              source={require('../../assets/calendarIcon.png')}
            />
            <Text style={styles.paragraph}>
              14/06/1994 
            </Text>
          </View>
          <View>
            <Image style={styles.icon}
              source={require('../../assets/genderIcon.png')}
            />
            <Text style={styles.paragraph}>
              Gender
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} activeOpacity={0.5}> 
              <Image 
                source={require('../../assets/upIcon.png')} 
                style={styles.iconButton} 
              /> 
              <Text style={styles.TextStyle}> Go Cook </Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} activeOpacity={0.5}> 
              <Image 
                source={require('../../assets/editIcon.png')} 
                style={styles.iconButton} 
              /> 
              <Text style={styles.TextStyle}> Edit Profile </Text> 
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 30,
  },
  header: {
    height: 80,
    justifyContent: 'space-around',
    backgroundColor: '#d93078',
    textAlign: 'center',
  },
  headerText: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#d93078',
    color: 'white',
  },
  nameText: {
    marginTop: 30,
    marginBottom: 25,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  paragraph: {
    marginTop: -35,
    marginLeft: 80,
    fontSize: 20,
    color: 'black',
  }, 
  icon: {
    height: 30,
    width: 30,
    marginTop: 40,
    marginLeft: 35,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  TextStyle: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 15,
  },
  iconButton: {
    padding: 15,
    margin: 5,
    height: 15,
    width: 15, 
  }, 
  lineStyle: {
    width: 280,
    borderWidth: 0.5,
    borderColor:'gray',
    marginBottom:25,
    marginLeft: 40,
  }, 
  image: {
    height: 200,
    width: 200,
    marginTop: 40,
    marginLeft: 80,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8, 
  },
  button: {    
    flexDirection: 'row',
    height: 40,
    width: 132,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 8,
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#d93078',
  },
  buttonContainer: {    
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 40,
  }
});

export default ProfilePage;
