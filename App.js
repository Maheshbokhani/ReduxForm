import React, {Component} from 'react';
import {} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import signup from '..//practicaltest/src/screens/signup'
import mainpage from  '..//practicaltest/src/screens/mainpage'

export default class App extends Component {
    render() {
        return (
         <Router>
            <Scene key="root">
              <Scene key="page1"
                component={signup}
                hideNavBar
                initial
              />
              <Scene
                key="page2"
                component={mainpage}
                hideNavBar
              />
         </Scene>
         </Router>
        )
    }
}

