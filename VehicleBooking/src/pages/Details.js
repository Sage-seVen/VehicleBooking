import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, StatusBar,TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';

export default class Details extends Component<Props> {
    
    render() {
      let data = [{
        value: 'Winterfell',
      }, {
        value: 'Kings Landing',
      }, {
        value: 'Dorne',
      }];

      let Seatdata = [{
        value: '4',
      }, {
        value: '6',
      }, {
        value: '8',
      }];

      let Timedata = [{
        value: '1',
      }, {
        value: '2',
      }, {
        value: '3',
      },{
        value:'4',
      },{
        value:'5',
      },{
        value:'7',
      }];

      return (
        <View style={styles.container} >
            <View style={styles.Titlecontainer}>
                <Text style={styles.Title} > Book a Ride </Text>
                <Image style={{width: 200, height: 80}}
                source={require('../images/carlogo5.png')}
            />
            </View>

            <View style={styles.MatContainer}>
                <Dropdown
                label='Self-Pickup Location'
                data={data}
                // fontSize={18}
                // baseColor="#ffffff"
                />
                <Dropdown
                label='Seats'
                data={Seatdata}
                />
                <Dropdown
                label='Days'
                data={Timedata}
                />
            </View>
            

            {/* <View style={styles.Detailcontainer}>
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
            </View> */}

            <View style={styles.confirmContainer}>
                <TouchableOpacity style={styles.button}>
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
      // alignItems: 'center',
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

    MatContainer:{
      paddingHorizontal:16,
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
        alignItems: 'center',
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