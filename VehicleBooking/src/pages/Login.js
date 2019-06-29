import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput, StatusBar,TouchableOpacity} from 'react-native';
import {ToastAndroid} from "react-native";

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<Props> {
    
    signup(){
           Actions.signup() 
    }

    Details(){
      Actions.details();
      ToastAndroid.show("Login Successful!", ToastAndroid.SHORT); 
    }
    render() {
      return (
        <View style={styles.container}>
            <Logo/>
            {/* <Form type="Login" holdertype="Email/Number" passwordholdertype="Password"/> */}

            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Email/Number"}
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}/>

              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Password"}
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
              ref={(input) => this.password =input} />

              <TouchableOpacity onPress={this.Details} style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Don't have an account yet?</Text>
                <TouchableOpacity onPress={this.signup}>
                <Text style={styles.signupButton}> Signup!</Text>
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
    },
    inputBox: {
      width:300,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:"#ffffff",
      marginVertical:10
    },

    button:{
      width:200,
      backgroundColor:'#1a0000',
      borderRadius: 25,
      marginVertical:10,
      paddingVertical:10
    },

    buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
});