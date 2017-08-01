import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Component2 from './app/components/Component2/component2.js';

export default class ReactNativePractice extends Component {
  render() {
    return(
      <View>
        <Component2 />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
