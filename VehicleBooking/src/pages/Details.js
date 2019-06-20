import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, Button, StatusBar,TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from "react-native-modal-datetime-picker";

export default class Details extends Component<Props> {
    constructor(props) {
      super(props);
      this.state = {
        startDateTimePickerVisible: false,
        endDateTimePickerVisible: false,
        selecteddate:'',
        selectedenddate:''
      };
    }
  
    showStartDateTimePicker = () =>
    this.setState({ startDateTimePickerVisible: true });
  
    showEndDateTimePicker = () => 
    this.setState({ endDateTimePickerVisible: true });
  
    hideStartDateTimePicker = () =>
    this.setState({ startDateTimePickerVisible: false });
  
    hideEndDateTimePicker = () =>
    this.setState({ endDateTimePickerVisible: false });
  
    handleStartDatePicked = (pickeddate) => {
      day   = pickeddate.getDate();
      month = pickeddate.getMonth();
      year  = pickeddate.getFullYear();
      console.log('A date has been picked: ' + day + '-' + month + '-' + year);
      exdate= day + '-' + month + '-' + year
      this.setState({selecteddate : day + '-' + month + '-' + year}) 
      this.hideStartDateTimePicker();
    };
  
    handleEndDatePicked = (pickeddate) => {
      day   = pickeddate.getDate();
      month = pickeddate.getMonth();
      year  = pickeddate.getFullYear();
      console.log('A date has been picked: ' + day + '-' + month + '-' + year);
      exdate= day + '-' + month + '-' + year
      this.setState({selectedenddate : day + '-' + month + '-' + year})
      this.hideEndDateTimePicker();
    };

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

      return (
        <View style={styles.container} >
            <View style={styles.Titlecontainer}>
                <Text style={styles.Title} > Book a Ride </Text>
                <Image style={{width: 200, height: 80}}
                source={require('../images/carlogo5.png')}/>
            </View>

            <View style={styles.MatContainer}>
                <Button color="#6a4f4b" title="Pick-Up Date" onPress={this.showStartDateTimePicker} />
                <DateTimePicker
                  isVisible={this.state.startDateTimePickerVisible}
                  onConfirm={this.handleStartDatePicked}
                  onCancel={this.hideStartDateTimePicker}
                />
                <TextInput 
                placeholder="Select Date"
                onFocus={ () => this.showStartDateTimePicker() }
                value={this.state.selecteddate}
                />

                <Button color="#6a4f4b" title="Drop-off Date" onPress={this.showEndDateTimePicker} />
                <DateTimePicker
                  isVisible={this.state.endDateTimePickerVisible}
                  onConfirm={this.handleEndDatePicked}
                  onCancel={this.hideEndDateTimePicker}
                />
                <TextInput 
                placeholder="Select Date"
                onFocus={ () => this.showEndDateTimePicker() }
                value={this.state.selectedenddate}
                />


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
      paddingHorizontal:17,
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