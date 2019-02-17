# React Native Login and Signup Form

# Features:

- Generate Form Fields UI 
- Manage, track state & values of fields
- Use Asyncstorage in data can set and get.
- Handle all keyboard related problems smartly
- Supports custom validations
- Uses Nativebase Custom components

# Installation:
       $ npm install --save react-native-elements
       $ npm install --save react-native-router-flux
       
# Steps:

* Install react-native first
       
      $ npm install react-native

* Initialization of a react-native project

      $ react-native init projectname
 
* Then first of create router flux in add Signup-Signin screen and Mainpage

  --- App.js ---

       import React, {Component} from 'react';
       import {} from 'react-native';
       import { Router, Scene, Stack } from 'react-native-router-flux';
       import signUp from './src/screens/sign'
       import mainPage from  './src/screens/mainpage'

       export default class App extends Component {
           render() {
               return (
                  <Router>
           
           <Scene key='root'>
              <Scene key="page1"
                component={signUp}
                hideNavBar
                initial
              />
              <Scene
                key="page2"
                component={mainPage}
                hideNavBar
              />
          </Scene>
         </Router>
        );
       }
      }    
