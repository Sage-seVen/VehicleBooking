import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, StatusBar,TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Details extends Component<Props> {
    
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.Titlecontainer}>
                <Text style={styles.Title} > Book a Ride </Text>
                <Image style={{width: 200, height: 80}}
                source={require('../images/carlogo5.png')}
            />
            </View>

            <View style={styles.Detailcontainer}>
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Pick Up"}
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              onSubmitEditing={()=> this.dropoff.focus()}/>

            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder={"Drop-Off"}
              placeholderTextColor="#ffffff"
              selectionColor="#fff"
              ref={(input) => this.dropoff =input}/>
            </View>

            <View style={styles.confirmContainer}>
                <TouchableOpacity onPress={this.signup} style={styles.button}>
                <Text style={styles.buttonText}>Confirm Ride</Text>
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

    Titlecontainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Detailcontainer:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Title :{
        fontSize:37,
        color:'rgba(255,255,255,1.0)'
    },

    inputBox: {
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        // borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:"#ffffff",
        marginVertical:10
    },

    confirmContainer:{
        flexGrow:1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical:16,
        // flexDirection:'row'
    },
    button:{
        width:120,
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