import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, StatusBar,TouchableOpacity} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
//import {Firebase} from "./src/pages/Firebase";
import fire from '../pages/Firebase';
//import console = require('console');
import {ToastAndroid} from "react-native";

export default class Signup extends Component {

  constructor(){
    super()
    this.state = {
      name: "",
      email: "",
      number: "",
      password: ""
    }
    this.handleName =  this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.Login = this.Login.bind(this);
  }

  handleName(newText){
    this.setState({
      name: newText
    })
  }

  handleEmail(newText){
    this.setState({
      email: newText
    })
  }

  handleNumber(newText){
    this.setState({
      number: newText
    })
  }

  handlePassword(newText){
    this.setState({
      password: newText
    })
  }

  Login(){
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=> {
      Actions.login();
      ToastAndroid.show("Signup Successful!", ToastAndroid.SHORT); 
    })
      .catch((error) =>{ ToastAndroid.show("Empty Fields!", ToastAndroid.SHORT)})
  }


    goBack(){
        Actions.pop();
    }

      render() {
      return (
        <View style={styles.container}>
            <Logo/>
            {/* <Form type="Signup" holdertype="Enter Email/Number" passwordholdertype=" Choose Password"/> */}
            {/* trying independant signup form  */}

           {/* <View style={styles.container}> */}

              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Name"}
              placeholderTextColor="#000000"
              selectionColor="#fff"
              onChangeText={this.handleName}
              defaultValue={this.state.name}/>

              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Enter Email"}
              placeholderTextColor="#000000"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={this.handleEmail}
              defaultValue={this.state.email}/>

              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Enter Phone Number"}
              placeholderTextColor="#000000"
              selectionColor="#fff"
              keyboardType="number-pad"
              onChangeText={this.handleNumber}
              defaultValue={this.state.number}/>


              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Choose Password"}
              secureTextEntry={true}
              placeholderTextColor="#000000"
              onChangeText={this.handlePassword}
              defaultValue={this.state.password}/>

              <TouchableOpacity  onPress={this.Login} style={styles.button}>
                  <Text style={styles.buttonText}>{"Signup"}</Text>
              </TouchableOpacity>
          {/* </View> */}



            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Already have an account? </Text>
                <TouchableOpacity>
                <Text style={styles.signupButton} onPress={this.goBack}> Sign In</Text>
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

//rgba(255,255,255,0.3)