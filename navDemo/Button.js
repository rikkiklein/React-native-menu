import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator
} from 'react-native';


class Button extends Component {
  handlePress(event) {
    if (this.props.onPress) {
      this.props.onPress(event);
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button
