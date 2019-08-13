import React, {Component} from 'react';
import {Platform, 
StyleSheet, Text, View, 
TextInput, Image, StatusBar,
TouchableOpacity, Math, ScrollView}
from 'react-native';

import {Actions} from 'react-native-router-flux';
//import {Details} from './src/pages/Details';

export default class Result extends Component<Props>{
	
	goBack(){
        Actions.pop();
    }
	
	Confirmation(){
		Actions.Confirmation()
    }
    //Experimental Work Ahead
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       NumDays:'example',
    //     };
    //   }
    
    //    days_between(date1, endate) {

    //     // The number of milliseconds in one day
    //     var ONE_DAY = 1000 * 60 * 60 * 24;
    
    //     // Convert both dates to milliseconds
    //     var date1_ms = stdate.getTime();
    //     var date2_ms = endate.getTime();
    
    //     // Calculate the difference in milliseconds
    //     var difference_ms = Math.abs(date1_ms - date2_ms);
    
    //     // Convert back to days and return
    //     return Math.round(difference_ms/ONE_DAY);
    
    // }
	
	render(){
		return(
			<View style={styles.container}>
                <ScrollView>
					<View style={styles.Titlecontainer}>
						<Text style={styles.Title} > Confirm Your Ride </Text>
						<Image style={{width: 200, height: 80}}
						source={require('../images/carlogo5.png')}/>
					</View>
					<View style={styles.confirmContainer}>
						<View style={styles.infoContainer}>
                            <Text style={styles.label}> Vehicle Type: </Text>
                            <Text style={styles.labeltext}> {this.props.text2} </Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.label}> Seats Needed: </Text>
                            <Text style={styles.labeltext}> {this.props.text1} </Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.label}> Self Pickup from: </Text>
                            <Text style={styles.labeltext}> " {this.props.text} " on </Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.label}> Pickup Date: </Text>
                            <Text style={styles.labeltext}> {this.props.date1} to </Text>
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.label}> Drop Date: </Text>
                            <Text style={styles.labeltext}> {this.props.date2} </Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.label}> Pricing Info: </Text>
                            <Text style={styles.labeltext}> Mini-150, Normal-200, Premium-300 </Text>
                        </View>
						<View style={styles.infoContainer}>
                         <Text style={styles.labeltext}> *All Prices per day  </Text>
                         {/* for {this.days_between.call()} {this.state.NumDays} */}
                        </View>
                    </View> 
					<View style={styles.conContainer}>
						<TouchableOpacity onPress={this.Confirmation} style={styles.button}>
						<Text style={styles.buttonText}>Book</Text>
                        </TouchableOpacity>

						<TouchableOpacity onPress={this.goBack} style={styles.button}>
						<Text style={styles.buttonText}>Cancel</Text>
						</TouchableOpacity>
					</View>
                </ScrollView>
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
        fontSize:25,
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical:20,
        marginVertical:16
        // flexDirection:'row'
    },
	
	conContainer:{
		flexGrow:1,
		alignItems:'flex-end',
		justifyContent: 'center',
        paddingHorizontal: 10,
        marginHorizontal:10,
		flexDirection:'row'
	},
	
    button:{
        width:120,
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
    },

    infoContainer:{
        // flexGrow:1,
        // alignItems: 'flex-start',
        // justifyContent: 'center',
        // paddingVertical:16,
        flexDirection:'row'
    },

    label:{
        color:'#fdd835',
        fontSize:16,
    },

    labeltext:{
        fontSize:16,
        color:'#ffffff',
    }
});