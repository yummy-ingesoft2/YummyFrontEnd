import * as React from 'react';
import { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';

const categories = [
  {
    label: 'For Lunch',
    value: 'lunch',
  },
  {
    label: 'Desserts',
    value: 'dessert',
  },
  {
    label: 'Vegetarian',
    value: 'vegetarian',
  },
];

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
    this.inputRefs = {
      category: null,
    };
    this.state = {
    	photo: null,
    	name: null,
    	category: null,
    	description: null,
    	cost: null,
    }
 }

render(){
    const placeholder = {
      label: 'Select a category...',
      value: null,
      color: '#9EA0A4',
      fontSize: 20,
    };
	const { photo } = this.state;
    return (
    	<ScrollView>
	      <View style={styles.container}>
	       	<Text style={styles.title}>
	          If you are a excellent cook with a incredible recipe just tell us and sell it on yummy!
	        </Text>

          	<View style = {styles.lineStyle} />

          	<TextInput
          	  style={styles.inputTxt}
              type="name"
              placeholder="Name of your recipe..."
              onChangeText={(text) => this.setState({name: text})}
         	/>

         	<View style={styles.pickerView}>
	            <RNPickerSelect
	              placeholder={placeholder}
	              items={categories}
	              onValueChange={(value) => {
	                this.setState({category: value,})
	              }}
	              style={styles.pickerSelectStyle}
	              value={this.state.category}
	              useNativeAndroidPickerStyle={false}
	              ref={el => {
	                this.inputRefs.category = el;
	              }}
	            />
	        </View>

          	<TextInput
          	  style={styles.inputTxt2}
              type="description"
              placeholder="Add a description of your recipe..."
              onChangeText={(text) => this.setState({description: text})}
         	/>

         	<TextInput
          	  style={styles.inputTxt}
              type="cost"
              placeholder="Tell us a price..."
              onChangeText={(text) => this.setState({cost: text})}
         	/>
	        {photo && (
	          <Image
	            source={{ uri: photo.uri }}
	            style={{ width: 300, height: 300 }}
	          />
	        )}
	        <Button title="Choose Photo"/>
	        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} activeOpacity={0.5}>
              <Text style={styles.TextButton}> Add Product </Text>
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
    padding: 20,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  lineStyle: {
    flex: 1,
    borderWidth: 0.5,
    borderColor:'gray',
    margin:20,
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
  inputTxt2: {
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
  pickerView:{
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
