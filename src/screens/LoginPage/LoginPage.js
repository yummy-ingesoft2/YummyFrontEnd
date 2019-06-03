import * as React from 'react';
import { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Image, Button } from 'react-native';
import { Constants } from 'expo';

export default class LoginPageYummy extends Component {
  constructor(props){
      super(props);

      this.state = {
          email: ' ',
          emailValidate: true,
          password: ' ',
          passwordValidate:true
      };
    }

    validate(text, type)
    {
      var alph = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
      if(type=='email')
      {
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
      <View style={styles.container}>
        <Image style={styles.logo}
        source={require('../../../assets/yummy-logo.jpeg')}
        />
        <TextInput
          style={[styles.logmail, !this.state.emailValidate? styles.error:null]}
          type="email"
          placeholder="Your email"
          onChangeText={(text) => this.validate(text, 'email')}
        />
        <TextInput
          style={[styles.logpass, !this.state.passwordValidate? styles.error:null]}
          type="password"
          placeholder="Your password"
          onChangeText={(text) => this.validate(text, 'password')}
        />
        <View style={styles.buttonLogin}>
            <Button
              title="Login"
              color="#DF74A2"
              />
        </View>
          <View style={styles.buttonGoo}>
            <Button
              title="Google"
              color="#591432"
              />
          </View>
          <View style={styles.buttonFace}>
            <Button
              title="Face"
              color="#992255"
              />
          </View>
          <View style = {styles.lineStyle} />
            <Text style={styles.textSignUp}>
                ¿Aún no tienes cuenta?
            </Text>
        <View style={styles.buttonSignUp}>
          <Button
            title="Sign Up"
            color="#DF74A2"
            />
        </View>
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
  logo: {
    height: 150,
    width: 150,
    borderRadius: 160,
  },
  logmail: {
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
  logpass: {
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
  buttonGoo: {
    height: 40,
    width: 120,
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#BF2A6B',
  },
  buttonFace: {
    height: 40,
    width: 120,
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#BF2A6B',
  },
  buttonLogin: {
    height: 40,
    width: 70,
    marginBottom: 15,
    marginLeft: 180,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#BF2A6B',
  },
  buttonSignUp: {
    height: 40,
    width: 110,
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 5,
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
    backgroundColor: '#d93078',
    color: 'white'
  }
});
