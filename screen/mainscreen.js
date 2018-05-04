/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

var people = [
  {name: 'Quang Vĩ', age: 29},
  {name: 'Sơn Tùng', age: 24},
];

export default class MainScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Main Screen',
  };

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text>This is main screen :D :D</Text>

        <TouchableOpacity onPress={() => navigate('Screen1', {prevScreenTitle: 'Main Screen', people: people})}>
          <Text>Go to first screen!!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Screen2')}>
          <Text>Go to second screen!!</Text>
        </TouchableOpacity>
      </View>
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
});
