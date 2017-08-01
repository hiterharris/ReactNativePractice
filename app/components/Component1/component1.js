import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Hiter',
      showName: true,
      messgae: this.props.message
    }
  }

  static defaultProps = {
    message: 'Hi there'
  }

  render() {
    let name = this.state.message ? this.state.name : 'No name';
    return(
      <View style={styles.container}>
        <Text>{this.props.message}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

AppRegistry.registerComponent('Component1', () => Component1);
