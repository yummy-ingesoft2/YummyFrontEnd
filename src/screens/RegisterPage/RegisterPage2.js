import * as React from 'react';
import { Component } from 'react';
import { Alert,Text, TextInput, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Constants } from 'expo';
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import axios from 'axios';

const cities = [
  {
    label: 'Bogota',
    value: 'bogota',
    region: {
      id: 1,
      latitude: 4.710988599999999,
      longitude: -74.072092,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    }

  },
  {
    label: 'Medellin',
    value: 'medellin',
    region: {
      id: 3,
      latitude: 6.2443382,
      longitude: -75.573553,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    }
  },
  {
    label: 'Fusagasuga',
    value: 'fusagasuga',
    region:
    {
      id: 2,
      latitude: 4.3369235,
      longitude: -74.3644854,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    }
  },
];

export default class RegisterPage2 extends Component {

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

    this.inputRefs = {
      city: null,
    };
    this.state = {
        user: this.props.navigation.state.params.user,

        city: undefined,
        address: ' ',
        isMapReady: false,

        region: {
          id: 1,
          latitude: 4.710988599999999,
          longitude: -74.072092,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }
    };
  }

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  }

  getLatLong(){
    Geocoder.init("AIzaSyC_oVRqVt4p4VxA3VBAVEhnUpoFVSgCBuc");

    Geocoder.from(this.state.address)
    .then(json => {
      var location = json.results[0].geometry.location;
      var newRegion = {
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }
      this.setState({region: newRegion});
      alert(location.lat + ", " + location.lng);
    })
    .catch(error => console.warn(error));
  }

  resgitrar(){
    axios.post("http://yummyback.herokuapp.com/cities/"+this.state.region.id+"/clients",{
            client: {
              name: this.state.user.name,
              last_name: this.state.user.lastname,
              birthdate: this.state.user.date,
              email: this.state.user.email,
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
              address: this.state.address,
              user: this.state.user.email.split("@")[0],
              password: this.state.user.password,
              password_confirmation: this.state.user.confirmPassword,
              city_id: this.state.region.id
            }
        })
        .then((respJson) => {
            alert(respJson.data)
            this.props.navigation.navigate('TabNavigator')
        })
        .catch( (err) => {
            if(err.response && err.response.data)
                alert(err.response.data.message)
            else
                alert("Ocurrio un error por favor intenta más tarde.");
        });
  }

  changeRegion(){
    for (var i = 0; i < cities.length; i++) {
      if (cities[i].value == this.state.city){
        this.setState({region: cities[i].region,});
      }
    }
  }

  render(){
    const placeholder = {
      label: 'Select a city...',
      value: null,
      color: '#9EA0A4',
      fontSize: 20,
    };

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>

          <Text style={styles.text1}>Just one step more...</Text>
          <Text style={styles.text}>Tell us your city and location</Text>
          <View style={styles.picerView}>
            <RNPickerSelect
              placeholder={placeholder}
              items={cities}
              onValueChange={(value) => {
                this.setState({city: value,}, () => this.changeRegion());
              }}
              style={styles.pickerSelectStyle}
              value={this.state.city}
              useNativeAndroidPickerStyle={false}
              ref={el => {
                this.inputRefs.city = el;
              }}
            />
          </View>

          <TextInput
            style={styles.inputTxt}
            type="address"
            placeholder="address"
            onChangeText={(text) => this.setState({address: text})}
          />

          <MapView
            onPress={e => console.log(e.nativeEvent)}
            style={styles.map}
            provider='google'
            mapType='standard'
            showsScale
            showsCompass
            showsPointsOfInterest
            showsBuildings
            region={this.state.region}
            onLayout={this.onMapLayout}
          >
            { this.state.isMapReady &&
              <MapView.Marker
                title={this.props.title}
                coordinate={{
                  latitude: this.state.region.latitude,
                  longitude: this.state.region.longitude
                }} />
            }
          </MapView>

          <View style={styles.buttonSignUp}>
            <Button
              title="Done! "
              color="#BF2A6B"
              onPress={() => this.resgitrar()}
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
    backgroundColor: 'white',
    padding: 10,
  },
  map: {
    flex: 1,
    height: 300,
    width: 300,
    margin: 10,
  },
  picerView:{
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
  },
  pickerSelectStyle: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingLeft: 10,
  },
  inputTxt: {
    height: 40,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    color: 'black',
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  buttonSignUp: {
    height: 40,
    width: 110,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 190,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#BF2A6B',
  },
  text1: {
    marginLeft: 15,
    marginBottom: 12,
    marginTop: 10,
    fontSize: 23,
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    marginLeft: 15,
    marginBottom: 18,
    fontSize: 17,
    backgroundColor: 'white',
    color: 'black'
  },
});
