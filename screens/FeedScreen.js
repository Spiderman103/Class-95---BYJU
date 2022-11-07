import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Output')}>
              <Text style={{ fontSize:20, color:"white"}}>Output</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Environment')}>
              <Text style={{ fontSize:20, color:"white"}}>Environment</Text>
            </TouchableOpacity>

           

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ObjectName')}>
              <Text style={{ fontSize:20, color:"white"}}>ObjectName</Text>
            </TouchableOpacity>

             <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ObjectType')}>
              <Text style={{ fontSize:20, color:"white"}}>ObjectType</Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{  fontSize:22,textAlign: 'center', margin:5 }}>Rate us</Text>
            <TouchableOpacity>
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
           
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
               
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"purple",
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});