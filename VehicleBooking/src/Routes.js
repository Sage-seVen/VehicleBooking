import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Details from './pages/Details';



export default class Routes extends Component<{}> {
    render() {
        return(
                <Router>
                  <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="signup" component={Signup} title="Signup"/>
                    <Scene key="details" component={Details} title="Details"/>
                  </Stack>
                </Router>
              )
    }
}