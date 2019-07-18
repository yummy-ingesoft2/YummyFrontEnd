import * as React from 'react';
import { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Image, Button, TouchableOpacity, ScrollView, PanResponder } from 'react-native';
import { Constants } from 'expo';
import DatePicker from 'react-native-datepicker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'Male', value: 0 },
  {label: 'female', value: 1 }
];

export default class RegisterPage extends Component {

static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : '               Yummy!',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: "#d93078",
      },
      headerTintColor: "white",
    };
};
  constructor(props){
    super(props);

    this.state = {
      name: ' ',
      nameValidate: true,
      lastname: ' ',
      lastnameValidate: true,
      date: ' ',
      dateValidate: true,
      value: 0,
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

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e) => {console.log('onStartShouldSetPanResponder'); return true;},
      onMoveShouldSetPanResponder: (e) => {console.log('onMoveShouldSetPanResponder'); return true;},
      onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
      onPanResponderMove: (e) => console.log('onPanResponderMove'),
      onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
      onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
    });
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
      if(text.length >= 6)
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
          <View style={styles.sectionTextField}>
            <TextInput
              style={[styles.inputTxt, !this.state.nameValidate? styles.error:null]}
              placeholder="Name"
              onChangeText={(text) => this.validate(text, 'name')}
            />
            <Image
              style={styles.iconTxt}
              source={require('../../assets/userIcon.png')}
            />
          </View>

          <View style={styles.sectionTextField}>
            <TextInput
              style={[styles.inputTxt, !this.state.lastnameValidate? styles.error:null]}
              placeholder="Last Name"
              onChangeText={(text) => this.validate(text, 'lastname')}
            />
            <Image
              style={styles.iconTxt}
              source={require('../../assets/userIcon.png')}
            />
          </View>

          <DatePicker
            style={styles.datePicker}
            date={this.state.date}
            mode="date"
            placeholder="Birth Date"
            format="YYYY-MM-DD"
            minDate="1945-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconSource={require('../../assets/calendarIcon.png')}
            onDateChange={(date) => {this.setState({date: date});}}
          />

          <RadioForm
            radio_props={radio_props}
            initial={-1}
            formHorizontal={true}
            buttonColor = {'gray'}
            selectedButtonColor = {'gray'}
            buttonInnerSize = {10}
            buttonOuterSize = {25}
            animation={false}
            onPress={(value) => {this.setState({value:value})}}
          />

          <View style={styles.sectionTextField}>
            <TextInput
              style={[styles.inputTxt, !this.state.emailValidate? styles.error:null]}
              type="email"
              placeholder="Email"
              onChangeText={(text) => this.validate(text, 'email')}
            />
            <Image
              style={styles.iconTxt}
              source={require('../../assets/emailIcon.png')}
            />
          </View>

          <View style={styles.sectionTextField}>
            <TextInput
              style={[styles.inputTxt, !this.state.phoneValidate? styles.error:null]}
              placeholder="Phone"
              onChangeText={(text) => this.validate(text, 'phone')}
            />
            <Image
              style={styles.iconTxt}
              source={require('../../assets/phoneIcon.png')}
            />
          </View>

          <View style={styles.sectionTextField}>
            <TextInput
              style={[styles.inputTxt, !this.state.passwordValidate? styles.error:null]}
              type="password"
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => this.validate(text, 'password')}
            />
            <Image
              style={styles.iconTxt}
              source={require('../../assets/passwordIcon.png')}
            />
          </View>

          <View style={styles.sectionTextField}>
            <TextInput
              style={[styles.inputTxt, !this.state.confirmPasswordValidate? styles.error:null]}
              type="password"
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={(text) => this.validate(text, 'confirmPassword')}
            />
            <Image
              style={styles.iconTxt}
              source={require('../../assets/passwordIcon.png')}
            />
          </View>

          <View style = {styles.lineStyle} />

          <View style={styles.buttonSignUp}>
            <Button
              disabled={this.confirm()}
              title="Sign Up"
              color="#BF2A6B"
              onPress={() => this.props.navigation.navigate('Register2',{user:this.state})}
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
  datePicker: {
    borderRadius: 10,
    borderColor: 'gray',
    marginTop: 20,
    marginBottom: 20,
    width: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 32,
  },
  sectionTextField: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'gray',
    height: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  iconTxt: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  inputTxt: {
    height: 40,
    width: 250,
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  buttonSignUp: {
    height: 40,
    width: 110,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#BF2A6B',
    marginBottom: 10,
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
    marginTop:35,
    marginBottom: 25,
   },
  text: {
    marginTop: 10,
    fontSize: 38,
    color: 'black'
  },
  error:{
    borderBottomWidth: 3,
    borderColor: 'red'
  }
});
