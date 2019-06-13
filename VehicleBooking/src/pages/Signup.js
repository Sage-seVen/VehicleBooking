import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, StatusBar,TouchableOpacity} from 'react-native';

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
            {/* <Form type="Signup" holdertype="Enter Email/Number" passwordholdertype=" Choose Password"/> */}
            {/* trying independant signup form  */}

           {/* <View style={styles.container}> */}

              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Name"}
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              onSubmitEditing={()=> this.useremail.focus()}/>

              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Enter Email"}
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              ref={(input) => this.useremail =input}
              onSubmitEditing={()=> this.usernumber.focus()}/>

              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Enter Phone Number"}
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              keyboardType="number-pad"
              ref={(input) => this.usernumber =input}
              onSubmitEditing={()=> this.password.focus()}/>


              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Choose Password"}
              secureTextEntry={true}
              placeholderTextColor="#ffffff"
              ref={(input) => this.password =input} />

              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>{"Signup"}</Text>
              </TouchableOpacity>
          {/* </View> */}



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