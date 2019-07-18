import * as React from 'react';
import { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import ImagePicker from 'react-native-image-picker'

export default class AddProduct extends Component {

static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : '								Yummy!',
      headerStyle: {
        backgroundColor: "#d93078",
      },
      headerTintColor: "white",
    };
};

constructor (props) {
    super(props)
    this.state = {
    	photo: null,
    }
 }

handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
};

render(){
	const { photo } = this.state;
    return (
    	<ScrollView>
	      <View style={styles.container}>
	        <Image style={styles.photo} source={require('../../assets/pincho.jpg')} />
	        {photo && (
	          <Image
	            source={{ uri: photo.uri }}
	            style={{ width: 300, height: 300 }}
	          />
	        )}
	        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
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
		           8.6
		        </Text>
          	</View>

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

            <TouchableOpacity style={styles.button2} activeOpacity={0.5}>
              <Image
                source={require('../../assets/statisticIcon.png')}
                style={styles.iconButton}
              />
              <Text style={styles.TextStyle}> Statistics </Text>
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
});
