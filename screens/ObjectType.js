import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class ObjectNameScreen extends Component{
    constructor(props){
      super(props);


      this.state = {
        text: "",
        displayText: "",
      }
    }
    
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {{fontSize: 30, backgroundColor: "orange"}}> Object Type </Text>

                <Text> </Text>
        <Text style={styles.points}>2) Type of Object: </Text>
        <Text> </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('FeedScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>

        <View style = {styles.inputContainer}>

          <TextInput style = {styles.inputText}
          onChangeText = {Text => {
              this.setState({
                text: text,

              })
          }
        }/>  

        <TouchableOpacity 
        style = {styles.submitButton}
        onPress = {this.text.navigation.navigate("CreatePost")}
        >
          <Text style = {{fontSize: 20, color: "white"}}> Submit </Text>

        </TouchableOpacity>
          

        </View>
            </View>
        )
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
    },
      buttons: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 15,
      backgroundColor:"green",
      margin: 10,
      width: 200,
      height: 50,
    },
    submitButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 15,
      backgroundColor: "yellow",
      margin: 50,
      width: 200,
      height: 50
    },
    inputText: {
      fontSize: 15,
      fontWeight: "bold",
      textAlign: 'center',
      justifyContent: 'center',
      marginLeft: 30
    }
  });

  