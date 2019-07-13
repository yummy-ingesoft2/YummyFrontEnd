import * as React from 'react';
import { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Constants } from 'expo';

export default class LoginPage extends Component {
  constructor(props){
      super(props);

      this.state = {
          email: ' ',
          emailValidate: true,
          password: ' ',
          passwordValidate:true
      };
    }

    confirmValidaciones()
    {
      if(this.state.email != ' ' && this.state.password != ' ')
      {
        if(this.state.emailValidate && this.state.passwordValidate)
        {
          return false;
        }
      }
      return true;
    }

    validate(text, type)
    {
      var alph = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
      if(type=='email')
      {
        this.setState({
          email:text,
        })
        if(alph.test(text))
        {
          this.setState({
            emailValidate:true,
          })
        }
        else
        {
          this.setState({
            emailValidate:false,
          })
        }
      }
      else if (type=='password')
      {
        this.setState({
          password:text,
        })
        if(text.length >= 8)
        {
          this.setState({
            passwordValidate:true,
          })
        }
        else
        {
          this.setState({
            passwordValidate:false,
          })
        }
      }
    }

  render(){
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
          <Image style={styles.logo}
          source={require('../../../assets/yummy-logo.jpeg')}
          />
          <TextInput
            style={[styles.inputTxt, !this.state.emailValidate? styles.error:null]}
            type="email"
            placeholder="Email"
            onChangeText={(text) => this.validate(text, 'email')}
          />
          <TextInput
            style={[styles.inputTxt, !this.state.passwordValidate? styles.error:null]}
            type="password"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => this.validate(text, 'password')}
          />
          <View style={styles.buttonLogin}>
            <Button
              title="Login"
              color="#DF74A2"
              disabled={this.confirmValidaciones()}
              onPress={() => this.props.navigation.navigate('TabNavigator')}
            />
          </View>

          <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}> 
            <Image 
              source={require('../../assets/facebook.jpeg')} 
              style={styles.ImageIconStyle} 
            /> 
            <View style={styles.SeparatorLine} /> 
            <Text style={styles.TextStyle}> Login Using Facebook </Text> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}> 
            <Image 
              source={require('../../assets/google.jpeg')} 
              style={styles.ImageIconStyle} 
              /> 
            <View style={styles.SeparatorLineGoogle} /> 
            <Text style={styles.TextGoogle}> Login Using Google </Text> 
          </TouchableOpacity>
          
          <View style = {styles.lineStyle} />

          <Text style={styles.textSignUp}>
            Do not have an account yet?
          </Text>

          <View style={styles.buttonSignUp}>
            <Button
              title="Sign Up"
              color="#DF74A2"
              onPress={() => this.props.navigation.navigate('Register')}
            />
          </View>
        </View>        
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#BF2A6B',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 30,
  },
  logo: {
    height: 200,
    width: 200,
    paddingTop: 10,
    borderRadius: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTxt: {
    height: 40,
    width: 250,
    padding: 10,
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: '#BF2A6B',
  },
  GooglePlusStyle: {
    flexDirection: 'row',
    width: 190,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderWidth: .5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 10 ,
    margin: 5,  
  }, 
  FacebookStyle: {
    flexDirection: 'row',
    width: 190,
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: .5,
    borderColor: 'gray',
    height: 40,
    borderRadius: 10 ,
    margin: 5,
  
  }, 
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch', 
  }, 
  TextStyle :{ 
    color: "#fff",
    marginBottom : 4,
    marginRight :20,  
  },
  TextGoogle :{ 
    color: "gray",
    marginBottom : 4,
    marginRight :20,  
  }, 
  SeparatorLine :{ 
    backgroundColor : '#fff',
    width: 1,
    height: 40 
  }, 
  SeparatorLineGoogle :{ 
    backgroundColor : 'gray',
    width: 1,
    height: 40 
  },
  buttonLogin: {
    height: 40,
    width: 70,
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 180,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#BF2A6B',
  },
  buttonSignUp: {
    height: 40,
    width: 110,
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#BF2A6B',
  },
  lineStyle: {
        width: 280,
        borderWidth: 0.5,
        borderColor:'gray',
        margin:10,
  },
  textSignUp: {
    marginTop: 8,
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#BF2A6B',
    color: 'white'
  },
  error:{
    borderWidth: 3,
    borderColor: 'red'
  }
});
