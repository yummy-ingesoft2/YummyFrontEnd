import * as React from 'react';
import { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
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
      confirmPasswordValidate: true,
      confPassword: ' '
    };
  }

  confirm(){
    if(this.state.name != ' ' && this.state.lastname != ' ' && this.state.email != ' '
        && this.state.phone != ' ' && this.state.password != ' ' && this.state.confirmPassword != ' ')
    {
      if(this.state.nameValidate && this.state.lastnameValidate && this.state.dateValidate && this.state.emailValidate
          && this.state.phoneValidate && this.state.passwordValidate && this.state.confirmPasswordValidate)
      {
        return false;
      }
    }
    return true;
  }

  validate(text, type)
  {
    var mail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    var alph = /^[a-zA-Z]+$/
    var num = /^[0-9]+$/
    if (type == 'name')
    {
      this.setState({
        name:text,
      })
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
      this.setState({
        lastname:text,
      })
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
      this.setState({
        phone:text,
      })
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
      this.setState({
        email:text,
      })
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
      this.setState({
        password:text,
      })
      if(text.length >= 8)
      {
        this.state.confPassword = text
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
      this.setState({
        confirmPassword:text,
      })
      if(text == this.state.confPassword)
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
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Signing Up !
          </Text>
          <TextInput
            style={[styles.inputTxt, !this.state.nameValidate? styles.error:null]}
            placeholder="Name"
            onChangeText={(text) => this.validate(text, 'name')}
          />
          <TextInput
            style={[styles.inputTxt, !this.state.lastnameValidate? styles.error:null]}
            placeholder="Last Name"
            onChangeText={(text) => this.validate(text, 'lastname')}
          />
          <TextInput
            style={styles.inputTxt}
            type="date"
            placeholder="Birth Date"
            onChangeText={(text) => this.validate({text})}
          />
          <TextInput
            style={[styles.inputTxt, !this.state.emailValidate? styles.error:null]}
            type="email"
            placeholder="Email"
            onChangeText={(text) => this.validate(text, 'email')}
          />
          <TextInput
            style={[styles.inputTxt, !this.state.phoneValidate? styles.error:null]}
            placeholder="Phone"
            onChangeText={(text) => this.validate(text, 'phone')}
          />
          <TextInput
            style={[styles.inputTxt, !this.state.passwordValidate? styles.error:null]}
            type="password"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => this.validate(text, 'password')}
          />
          <TextInput
            style={[styles.inputTxt, !this.state.confirmPasswordValidate? styles.error:null]}
            type="password"
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(text) => this.validate(text, 'confirmPassword')}
          />
          <View style = {styles.lineStyle} />

          <View style={styles.buttonSignUp}>
            <Button
              disabled={this.confirm()}
              title="Sign Up"
              color="#DF74A2"
              onPress={() => this.props.navigation.navigate('TabNavigator')}
          />
          </View>

          <View>
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}> 
              <Image 
                source={require('../../assets/facebook.jpeg')} 
                style={styles.ImageIconStyle} 
              /> 
              <View style={styles.SeparatorLine} /> 
              <Text style={styles.TextStyle}> Sign Up Using Facebook </Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}> 
              <Image 
                source={require('../../assets/google-plus.jpeg')} 
                style={styles.ImageIconStyle} 
                /> 
              <View style={styles.SeparatorLine} /> 
              <Text style={styles.TextStyle}> Sign Up Using Google </Text> 
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {    
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 32,
  },
  inputTxt: {
    height: 35,
    width: 250,
    padding: 10,
    marginTop: 20,
    fontSize: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  buttonSignUp: {
    height: 40,
    width: 110,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#BF2A6B',
  },  
  GooglePlusStyle: {
    flexDirection: 'row',
    width: 200,
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: .5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 10 ,
    margin: 5,  
  }, 
  FacebookStyle: {
    flexDirection: 'row',
    width: 200,
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
  SeparatorLine :{ 
    backgroundColor : '#fff',
    width: 1,
    height: 40 
  }, 
  lineStyle: {
        width: 300,
        borderWidth: 0.5,
        borderColor:'gray',
        margin:35,
   },
  text: {
    marginTop: 30,
    fontSize: 38,
    color: 'black'
  },
  error:{
    borderWidth: 3,
    borderColor: 'red'
  }
});