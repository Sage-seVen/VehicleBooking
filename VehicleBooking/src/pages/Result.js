import React, {Component} from 'react';
import {Platform, 
StyleSheet, Text, View, 
TextInput, Image, StatusBar,
TouchableOpacity, ScrollView}
from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Result extends Component<Props>{
	
	goBack(){
        Actions.pop();
    }
	
	Confirmation(){
		Actions.Confirmation()
	}
	
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
						<Text> Vehicle Type: </Text>
						<Text> Model: </Text>
						<Text> Price: </Text>
						<Text> Free KMs: </Text>
					</View> 
					<View style={styles.conContainer}>
						<TouchableOpacity onPress={this.Confirmation} style={styles.button}>
						<Text style={styles.buttonText}>Book</Text></TouchableOpacity>

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
        paddingVertical:16,
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