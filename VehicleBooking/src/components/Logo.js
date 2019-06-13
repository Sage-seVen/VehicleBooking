import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

export default class Login extends Component<Props> {
    render() {
      return (
          <View style={styles.container}>
            <Image style={{width: 120, height: 120}}
            source={require('../images/carlogo3.png')}
            />
            <Text style={styles.logoText}> Vehicle Booking App </Text>
          </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // marginVertical: 30
    },
    logoText :{
        marginVertical: 15,
        fontSize:20,
        color:'rgba(255,255,255,0.7)'
    }
});
