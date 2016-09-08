import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Search from './Search.js';
import Button from './Button.js';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator
} from 'react-native';

class SearchMenu extends Component{
  constructor(props) {
      super(props);
      this.state = {};
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
        isOpen: false,
        selectedItem: item,
    });
    this.props.navigator.replace({ id: item });
  }

  render(){
    const menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;

    return(
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenuState(isOpen)}>
            <Button onPress={() => this.toggle()}/>
            <Search/>
        </SideMenu>
    )
  }
}

export default SearchMenu;
