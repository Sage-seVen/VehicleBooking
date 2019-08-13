/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar} from 'react-native';
import * as firebase from 'firebase';

//import Login from './src/pages/Login';
//import Signup from './src/pages/Signup';

import Routes from './src/Routes';
import {Firebase} from "./src/pages/Firebase";
import fire from './src/pages/Firebase';
import {Details} from './src/pages/Details';
import {Login} from './src/pages/Login';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#5a9216' barStyle="light-content"/>
        <Routes/>
        
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8bc34a'
  }
});
