import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput, StatusBar,TouchableOpacity} from 'react-native';
import {ToastAndroid} from "react-native";

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
import fire from '../pages/Firebase';

export default class Login extends Component<Props> {

  constructor(){
    super()
    this.state = {
      email: "",
      password: ""
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.Details = this.Details.bind(this);
  }

  handleEmail(newText){
    this.setState({
      email: newText
    })
  }

     handlePassword(newText){
    this.setState({
      password: newText
    })
  }

    signup(){
           Actions.signup() 
    }

    Details(){
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=> {
        Actions.details();
        ToastAndroid.show("Login Successful!", ToastAndroid.SHORT); 
      })
      .catch((error) =>{ ToastAndroid.show("Login failed!", ToastAndroid.SHORT)})
      
      
    }
    render() {
      return (
        <View style={styles.container}>
            <Logo/>
            {/* <Form type="Login" holdertype="Email/Number" passwordholdertype="Password"/> */}

            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Email"}
              placeholderTextColor="#000000"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={this.handleEmail}
              defaultValue={this.state.email}/>

              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Password"}
              secureTextEntry={true}
              placeholderTextColor="#000000"
              onChangeText={this.handlePassword}
              defaultValue={this.state.password}/>

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
      backgroundColor: '#8bc34a'
    },
    signupContainer:{
        flexGrow:1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    signupText:{
        color:'rgba(255,255,255,0.8)',
        fontSize:16
    },
    signupButton:{
        color:"#2e7d32",
        fontSize:16,
        fontWeight:'500'
    },
    inputBox: {
      width:300,
      backgroundColor:'rgba(255,255,255,0.3)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:"#000000",
      marginVertical:10
    },

    button:{
      width:200,
      backgroundColor:'#2e7d32',
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