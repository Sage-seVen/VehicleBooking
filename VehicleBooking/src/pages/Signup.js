import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,StatusBar,TouchableOpacity} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<Props> {
    goBack(){
        Actions.pop();
    }

    render() {
      return (
        <View style={styles.container}>
            <Logo/>
            <Form type="Signup"/>
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Already have an account? </Text>
                <TouchableOpacity onPress={this.goBack}>
                <Text style={styles.signupButton}> Sign In</Text>
                </TouchableOpacity> 
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3e2723'
    },
    signupContainer:{
        flexGrow:1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    signupText:{
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:'500'
    }
});