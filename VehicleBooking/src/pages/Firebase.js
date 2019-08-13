import React, {Component} from 'react';
import * as firebase from 'firebase';
import 'firebase/auth';
//import firebase from 'react-native-firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC5PDVhB7JettPj-737K3S4PJcTuaCXcmA",
    authDomain: "vehiclebooking-38faf.firebaseapp.com",
    databaseURL: "https://vehiclebooking-38faf.firebaseio.com",
    projectId: "vehiclebooking-38faf",
    storageBucket: "vehiclebooking-38faf.appspot.com",
    messagingSenderId: "931283457415",
    appId: "1:931283457415:web:3a33ad3e563bc860"
  };
const fire= firebase.initializeApp(firebaseConfig);
export default fire;