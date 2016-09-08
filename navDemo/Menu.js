import React, { Component } from 'react';

import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';


const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  homeContainer: {
    marginBottom: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

class Menu extends Component {
  constructor(props){
    super(props);
  }
  //static => makes global variable
  //make propTypes global variable
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.HomeContainer}>
          <Text
          onPress={() => this.props.onItemSelected('Search')}
          style={styles.item}>
            Search For Shortest Route
          </Text>
        </View>

        <Text
          onPress={() => this.props.onItemSelected('SavedRoutes')}
          style={styles.item}>
          My Saved Routes
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('About')}
          style={styles.item}>
          About Us
        </Text>
      </ScrollView>
    );
  }
};

export default Menu;
