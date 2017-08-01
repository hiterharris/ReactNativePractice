import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Component2 extends Component {
  onPress() {
  }
  onPress2() {
  }


  render() {
    return(
      <View style={styles.top}>
        <View>
          <Text style={styles.myView}>Hello world</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.v1}
            onPress={this.onPress}
            underlayColor="blue">
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>

          <TouchableOpacity
            onPress={this.onPress2}
            style={styles.v2}>
            <View >
              <Text>View 2</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.v3}>
            <Text style={styles.vText}>View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  top: {
    marginTop: 20,
  },
  myView: {
    backgroundColor:'blue',
  },
  myText: {
    color: 'white',
  },
  container: {
    flexDirection: 'row',
    height: 100,
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
  },
  v2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
  },
  v3: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  vText: {
    color: 'white',
  }
});


AppRegistry.registerComponent('Component2', () => Component2);
