import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu.js';
import Search from './Search.js';
import SearchMenu from './SearchMenu.js';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator
} from 'react-native';


class MenuNavigator extends Component {

  constructor(props) {
    super(props);
    this._setNavigatorRef = this._setNavigatorRef.bind(this);
  }

  renderScene(route, nav) {
    switch (route.id) {
      case 'Search':
        return <SearchMenu navigator={nav} />;
      default:
        return <SearchMenu navigator={nav} />;
    }
  }

  render() {
    return (
      <Navigator
        ref={this._setNavigatorRef}
        initialRoute={{id: 'first'}}
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
