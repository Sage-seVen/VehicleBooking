import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Details from './pages/Details';
import Result from './pages/Result';
import Confirmation from './pages/Confirmation';



export default class Routes extends Component<{}> {
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