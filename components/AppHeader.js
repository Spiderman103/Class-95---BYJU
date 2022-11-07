import * as React from "react";
import{View,Text, StyleSheet} from "react-native";

export default class AppHeader extends React.Component{
    render(){
        return(
            <View style = {styles.textContainer}>

                <Text style = {styles.text}> Environmental App </Text>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: "green",
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        padding: 20,
        textAlign: 'center'
    }
    
});