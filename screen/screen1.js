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
  View
} from 'react-native';

export default class Screen1 extends Component<{}> {
  static navigationOptions = {
    title: 'First Screen',
  };

  constructor(props) {
    super(props)

    this.state = {
      prevScreenTitle: this.props.navigation.state.params.prevScreenTitle,
      people: this.props.navigation.state.params.people,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is first screen :D :D</Text>
        <Text>Previous screen is {this.state.prevScreenTitle}</Text>
        <Text>First person: {this.state.people[0].name} is {this.state.people[0].age} years old</Text>
        <Text>Second person: {this.state.people[1].name} is {this.state.people[1].age} years old</Text>
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
