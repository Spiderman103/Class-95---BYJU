import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import CreatePost from './screens/CreatePost';
import Environment from './screens/Environment';
import FeedScreen from './screens/FeedScreen';
import ObjectName from './screens/ObjectName';
import ObjectType from './screens/ObjectType'; 


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  CreatePost: CreatePost,
  Environment: Environment,
  FeedScreen: FeedScreen,
  ObjectName: ObjectName,
  ObjectType: ObjectType,
});

const AppContainer = createAppContainer(AppNavigator);