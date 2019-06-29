import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import {BackHandler, ToastAndroid} from "react-native";

import Login from './pages/Login';
import Signup from './pages/Signup';
import Details from './pages/Details';
import Result from './pages/Result';
import Confirmation from './pages/Confirmation';

let backPressed = 0;

export default class Routes extends Component<{}> {


    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    constructor(){
        super();
        this.state={
            // isloggedin: false,
            backPressed: 1
        }
    }

    handleBackButton(){
        if(Actions.currentScene === 'login'){
            if(backPressed > 0){
                BackHandler.exitApp();
                backPressed = 0;
            }else {
                backPressed++;
                ToastAndroid.show("Press Again To Exit", ToastAndroid.SHORT);
                setTimeout( () => { backPressed = 0}, 2000);
                return true;
            }
        }
    }
    render() {
        return(
                <Router>
                  <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="signup" component={Signup} title="Signup"/>
                    <Scene key="details" component={Details} title="Details"/>
                    <Scene key="result" component={Result} title="Result" />
					          <Scene key="Confirmation" component={Confirmation} title="Confirmation" />
                  </Stack>
                </Router>
              )
    }
}