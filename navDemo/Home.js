import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import Button from './Button.js';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator
} from 'react-native';


const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  get_started: {
    backgroundColor: 'red',
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
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

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      selectedItem: 'Home',
    };
  }

  toggle() {
    //change the t/f for is open
    console.log("did toggle call?! yes");
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // goToSearch() {
  //   //go to the search component
  //   console.log("go to search now using navigator");
  //   // this.navigator.push({
	// 	// 	component: Search
	// 	// })
  // }

  updateMenuState(isOpen) {

    this.setState({
      isOpen,
    });

  }

  onMenuItemSelected = (item) => {
    this.setState({
               isOpen: false,
               selectedItem: item,
           });
           this.props.navigator.replace({ id: item });
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <View style={styles.container}>
          <Text>HOME PAGE Route Me</Text>
        </View>
        <Button style={styles.button} onPress={() => this.toggle()}>
          <Image
            source={require('./assets/menu.png')} style={{width: 32, height: 32}} />
        </Button>
        <Button style={styles.get_started} onPress={() => this.goToSearch()}>
          get started
        </Button>
      </SideMenu>
    );
  }
};

export default Home
