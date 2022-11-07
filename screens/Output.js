import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Funny extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"orange"}}> Output </Text>
        <Text> </Text>
        <Text style={styles.points}>1) Text1..........</Text>
        <Text> </Text>
        <Text style={styles.points} >2) Text2 {"\n"} text3.</Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('FeedScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 20
  },  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"red",
    margin: 10,
    width: 200,
    height: 50,
  }
})

// Examples:

//Object Name: (Examples: Computer, Car, Tissue Box)
//Object Type: (Examples: Electronic, Vehicle, Food, Folder,)
//Environment: Is It hurting the Environment? (Yes or No)

//This data goes to the Create Post Screen

//There should be a submit button to an output screen. 

//Cycle of Events:

//All other Screen ----> CreatePost ----> Output