import * as React from 'react';
import { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import MapView from 'react-native-maps';
import { Rating, AirbnbRating } from 'react-native-ratings';

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
      ratingValue: null,
      content: null,
    }
}

ratingCompleted = (rating) => { 
  this.setState ({ ratingValue: rating }); //return rating; 
}

render(){

    return (
    	<ScrollView>
	      <View style={styles.container}>
	      	<Text style={styles.title}>
	          Reviews: 
	        </Text>
	        
          	<View style = {styles.lineStyle} />

	        <View style={styles.review}>
		        <Text style={styles.txtQualification}>
		          Rate: 5 / 5
		        </Text>		        
		        <Text style={styles.paragraph}>
		          Delicious recipe! I love it 
		        </Text>
		        <Text style={styles.txtUser}>
		          Pedro Pepo
		        </Text>
	        </View>
	        <View style={styles.review}>
		        <Text style={styles.txtQualification}>
		          Rate: 4 / 5
		        </Text>		        
		        <Text style={styles.paragraph}>
		          It was good but I didn't like the onion  
		        </Text>
		        <Text style={styles.txtUser}>
		          Lana Lava 
		        </Text>
	        </View>

          	<View style = {styles.lineStyle} />

         	<View >
		        <Text style={styles.title2}>
		          Give us your opinion...
		        </Text>
		        <AirbnbRating
		          size={20}
		          onFinishRating={this.ratingCompleted}
		        />
				<TextInput
	              style={styles.inputTxt}
	              type="content"
	              placeholder="Add a comment..."
	              onChangeText={(text) => this.setState({content: text})}
		        />
	        </View>

	        <View style={styles.buttonContainer}>
	            <TouchableOpacity style={styles.button} activeOpacity={0.5}> 
	              <Text style={styles.TextButton}>Add review</Text> 
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
    padding: 15,
  },
  lineStyle: {
    flex: 1,
    borderWidth: 0.5,
    borderColor:'gray',
    margin:20,
  },
  review: {
    backgroundColor: '#f7f7f7',
    borderColor: 'gray',
    borderWidth: 0.1,
    padding: 7,
    marginBottom: 8,
  },
  title: {
    marginTop: 15,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black'
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  paragraph: {
    fontSize: 20,
    textAlign: 'left',
    color: 'black',
  },  
  txtQualification: {  	
    fontSize: 15,
    textAlign: 'left',
    color: 'gray'
  },
  txtUser: { 	
    fontSize: 15,
    textAlign: 'left',
    color: 'gray'
  }, 
  inputTxt: {
    height: 110,
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
  button: {    
    height: 40,
    width: 132,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 200,
    padding: 3,
    alignItems: 'center',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#d93078',
  },
  TextButton: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20,
  },
});