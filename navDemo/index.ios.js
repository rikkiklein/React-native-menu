import React, { Component } from 'react';
import Home from './Home.js'
import MenuNavigator from './MenuNavigator';
import SearchMenu from './SearchMenu.js';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class navDemo extends Component {
  render() {
    return (
      <Home />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('navDemo', () => MenuNavigator);
