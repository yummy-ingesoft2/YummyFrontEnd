import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import MapView from 'react-native-maps';

export default class ProductPage extends Component {

static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : '								Yummy!',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: "#d93078",
      },
      headerTintColor: "white",
    };
};

constructor (props) {
    super(props)
    this.state = {
      isMapReady: false,
      region: {
        latitude: 4.710988599999999,
        longitude: -74.072092,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }
    }
 }

 onMapLayout = () => {
    this.setState({ isMapReady: true });
 }

render(){

    return (
    	<ScrollView>
	      <View style={styles.container}>
	        <Image style={styles.photo} source={require('../../assets/pincho.jpg')} />

	      	<Text style={styles.title}>
	          Vegetables Stick 
	        </Text>

          	<View style = {styles.lineStyle} />

          	<View style={styles.sectionTextField}>
	            <Image 
	              style={styles.iconTxt} 
	              source={require('../../assets/chefIcon.png')}
	            />
  		        <Text style={styles.paragraph}>
  		           Danna Bannana
  		        </Text>
          	</View>

          	<View style={styles.sectionTextField}>
	            <Image 
	              style={styles.iconTxt} 
	              source={require('../../assets/starIcon.png')}
	            />
  		        <Text style={styles.paragraph}>
  		           4.3
  		        </Text>
          	</View>

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

          <Text style={styles.paragraph}>
              Price: $10.00
          </Text>

	        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} activeOpacity={0.5}> 
              <Image 
                source={require('../../assets/buyIcon.png')} 
                style={styles.iconButton} 
              /> 
              <Text style={styles.TextStyle}> Buy Product </Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} activeOpacity={0.5} 
              onPress={() => this.props.navigation.navigate('Reviews')}> 
              <Image 
                source={require('../../assets/statisticIcon.png')} 
                style={styles.iconButton} 
              /> 
              <Text style={styles.TextStyle}> Reviews </Text> 
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
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 25,
  },
  map: {
  	flex: 1,
  	height: 300,
  	width: 300,
  	margin: 20,
  },
  sectionTextField: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    marginBottom: 5,
  },
  iconTxt: {
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  photo: {
    height: 250,
    width: 250,
    borderRadius: 5,
  },
  title: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  paragraph: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  }, 
  lineStyle: {
    width: 300,
    borderWidth: 0.5,
    borderColor:'gray',
    margin:20,
  },
  button: {    
    flexDirection: 'row',
    height: 40,
    width: 132,
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#d93078',
  },
  button2: {    
    flexDirection: 'row',
    height: 40,
    width: 132,
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 10,
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#d93078',
  },
  buttonContainer: {    
    flexDirection: 'row',
    alignItems: 'center',
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
  }
});