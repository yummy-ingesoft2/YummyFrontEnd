import * as React from 'react';
import { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Image, Button } from 'react-native';
import { Constants } from 'expo';

export default class RegisterPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: ' ',
      nameValidate: true,
      lastname: ' ',
      lastnameValidate: true,
      date: ' ',
      dateValidate: true,
      email: ' ',
      emailValidate: true,
      phone: ' ',
      phoneValidate: true,
      password: ' ',
      passwordValidate: true,
      confirmPassword: ' ',
      confirmPasswordValidate: true
    };
  }
  validate(text, type)
  {
    var mail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    var alph = /^[a-zA-Z]+$/
    var num = /^[0-9]+$/
    var confPassword = ' '
    if (type == 'name')
    {
      if(alph.test(text))
      {
        this.setState({
          nameValidate:true,
        })
      }
      else
      {
        this.setState({
          nameValidate:false,
        })
      }
    }
    else if (type == 'lastname')
    {
      if(alph.test(text))
      {
        this.setState({
          lastnameValidate:true,
        })
      }
      else
      {
        this.setState({
          lastnameValidate:false,
        })
      }
    }
    else if(type == 'phone')
    {
      if(num.test(text))
      {
        this.setState({
          phoneValidate:true,
        })
      }
      else
      {
        this.setState({
          phoneValidate:false,
        })
      }
    }
    else if(type=='email')
    {
      if(mail.test(text))
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
        confPassword = text
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
    else if(type == 'confirmPassword')
    {
      if(text == confPassword)
      {
        this.setState({
          confirmPasswordValidate:true,
        })
      }
      else
      {
        this.setState({
          confirmPasswordValidate:false,
        })
      }
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={[styles.logmail, !this.state.nameValidate? styles.error:null]}
          placeholder="Nombre"
          onChangeText={(text) => this.validate(text, 'name')}
        />
        <TextInput
          style={[styles.logmail, !this.state.lastnameValidate? styles.error:null]}
          placeholder="Apellido"
          onChangeText={(text) => this.validate(text, 'lastname')}
        />
        <TextInput
          style={styles.logmail}
          type="date"
          placeholder="Fecha de nacimiento"
          onChangeText={(text) => this.validate({text})}
        />
        <TextInput
          style={[styles.logmail, !this.state.emailValidate? styles.error:null]}
          type="email"
          placeholder="Email"
          onChangeText={(text) => this.validate(text, 'email')}
        />
        <TextInput
          style={[styles.logmail, !this.state.phoneValidate? styles.error:null]}
          placeholder="Teléfono"
          onChangeText={(text) => this.validate(text, 'phone')}
        />
        <TextInput
          style={[styles.logpass, !this.state.passwordValidate? styles.error:null]}
          type="password"
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(text) => this.validate(text, 'password')}
        />
        <TextInput
          style={[styles.logpass, !this.state.confirmPasswordValidate? styles.error:null]}
          type="password"
          placeholder="Confirmar Contraseña"
          secureTextEntry={true}
          onChangeText={(text) => this.validate(text, 'confirmPassword')}
        />
        <View style = {styles.lineStyle} />
        <View style={styles.buttonSignUp}>
          <Button
            title="Registrar"
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
  logmail: {
    height: 35,
    width: 250,
    padding: 10,
    marginTop: 20,
    fontSize: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: '#BF2A6B',
  },
  logpass: {
    height: 35,
    width: 250,
    padding: 10,
    marginTop: 20,
    marginBottom: 15,
    fontSize: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
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
  },
  error:{
    borderWidth: 3,
    borderColor: 'red'
  }
});
