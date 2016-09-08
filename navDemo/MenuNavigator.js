import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';
import Search from './Search.js';
import SearchMenu from './SearchMenu.js';
import Home from './Home.js';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator,
  Dimensions
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


class MenuNavigator extends Component {

  constructor(props) {
    super(props);
    this._setNavigatorRef = this._setNavigatorRef.bind(this);
  }

  renderScene(route, nav) {
    console.log("ROUTE ID", route.id);
    switch (route.id) {
      case 'Search':
        return <SearchMenu navigator={nav} />;
      case 'Home':
        return <Home navigator={nav} />;
      default:
        return <Home navigator={nav} />;
    }
  }

  render() {
    return (
      <Navigator
        ref={this._setNavigatorRef}
        initialRoute={{id: 'Home'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
      />
    );
  }

  componentWillUnmount() {
    this._listeners && this._listeners.forEach(listener => listener.remove());
  }

  _setNavigatorRef(navigator) {
    if (navigator !== this._navigator) {
      this._navigator = navigator;

      if (navigator) {
        var callback = (event) => {
          console.log(
            `NavigatorMenu: event ${event.type}`,
            {
              route: JSON.stringify(event.data.route),
              target: event.target,
              type: event.type,
            }
          );
        };
        // Observe focus change events from the owner.
        this._listeners = [
          navigator.navigationContext.addListener('willfocus', callback),
          navigator.navigationContext.addListener('didfocus', callback),
        ];
      }
    }
  }
};

export default MenuNavigator;
