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
import { StackNavigator } from 'react-navigation';
import MainScreen from './mainscreen';
import FirstScreen from './screen1';
import SecondScreen from './screen2';

const Screens = StackNavigator({
  MainScreen: {screen: MainScreen},
  Screen1: {screen: FirstScreen},
  Screen2: {screen: SecondScreen},
});

export default Screens;