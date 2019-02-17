# Simple Login and Signup Form React-native

![](https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png)

<img src="https://camo.githubusercontent.com/..." data-canonical-src="https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png" width="200" height="400" />

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
 
* Then first of create router flux in App.js add Signup-Signin.js screen and MainPage.js

       //------App.js------
       
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
      
      
* Second create Signin-Signup.js form using Buttongroup

      
         //------Signin-Signup.js-----
         
              import React, { Component } from 'react';
              import { View,BackHandler, AsyncStorage, ScrollView } from 'react-native';
              import { ButtonGroup } from 'react-native-elements';
              import { Actions } from 'react-native-router-flux';
              import BackButton from '../helper/BackButton'
              import DOBText from '../components/DateOfBirth'
              import Password from '../components/Password';
              import {styles} from '../constants/styles'
              import InputField from '../components/InputText'
              import Buttons from '../components/Buttons'
              import SavePassword from '../components/SavePassword';
              import GenderButton from '../components/GenderButton';

              export default class Sign extends  Component {
                  constructor() {
                      super()
                      this.state = {
                          firstname:'',
                          selected: 1,
                          selectedIndex: 2,
                          date: "",
                          lastname: '',
                          address: '',
                          email: '',
                          password: '',
                          username: '',
                          passwordlogin: true,
                          getemail:'',
                          getpassword:'',
                          isEdit:true,  
                      }
                      this.updateIndex = this.updateIndex.bind(this)
                      this.update = this.update.bind(this)
                      }

                  updateIndex(selectedIndex) {
                      this.setState({ selectedIndex })
                  }
                  update(selected) {
                      this.setState({ selected })  
                  }
                  firstname = () => {
                      this.setState({
                          firstname: '',
                      })}
                  lastname = () => {
                      this.setState({
                          lastname: '',
                      })}
                  email = () => {
                      this.setState({
                          email: '',
                      })}
                  username = () => {
                      this.setState({
                          username: '',
                      })}
                  switchon = () =>{
                      isOn=false
                  }
                  reset1  = () => { 
                      this.setState({
                          isEdit:true
                      })  }

                 save = async () => {
       
        const { firstname, lastname, email, password } = this.state;
            let obj = {
                firstname: this.state.firstname.trim(),
                lastname: this.state.lastname.trim(),
                email:this.state.email.trim(),
                password:this.state.password,
                address: this.state.address.trim(),
                date: this.state.date
            }
           
           await AsyncStorage.setItem('EMAIL',JSON.stringify(email));
           await AsyncStorage.setItem('USERNAME',JSON.stringify(firstname +'_'+ lastname));
           await AsyncStorage.setItem('PASSWORD',JSON.stringify(password));
           await AsyncStorage.setItem('user', JSON.stringify(obj));
           let user = await AsyncStorage.getItem('user');
           let parsed = JSON.parse(user);
           
            if(this.state.email == '' || this.state.firstname == '' || 
            this.state.lastname == '' || this.state.date == '' || this.state.address == ''){
                alert('Please Enter All Details!')
            }
             else if(this.state.password.length<6){
              alert('Password:'+' Minimum 6 character required!')
             }
              else{
                this.state.selected=0
                this.setState({isEdit:false})
            await alert('*** Your Details ***' + '\n' + '\n' + 
            'Username:' + parsed.firstname + '_' + parsed.lastname + '\n\n' + 
            'Address:' + parsed.address + '\n\n'  + 'Email:' + parsed.email + '\n\n' + 
            'Password:' + parsed.password + '\n\n' + 'DOB:' + parsed.date);
             
          }    
        }
        cancel = () => {
            this.setState({
                username:'',
                passwordlogin:'',
               
            })
            this.state.selected=1
        }
    
           login= async() => {
               let getemail = await AsyncStorage.getItem('EMAIL');
               let getemail1=JSON.parse(getemail);
               let getuser = await AsyncStorage.getItem('USERNAME');
               let getuser1=JSON.parse(getuser);
               let getpassword = await AsyncStorage.getItem('PASSWORD');
               let getpassword1=JSON.parse(getpassword);
               if (getuser1 !== this.state.username  && getpassword1 !== this.state.passwordlogin) {
                 alert('Username and Password are Incorrect!')
               }else if(getuser1 !== this.state.username){
                   alert('Username is Incorrect!')
               }
               else if(getpassword1 !== this.state.passwordlogin){
                 alert('Password are Incorrect!')
                }
               else{
                   Actions.page2();
               }
              }

            render() {

               const buttons1 = ['Sign In', 'Sign Up']
               const { selected } = this.state

               const buttons = ['Male','Female']
               const { selectedIndex } = this.state

               return (

                     <ScrollView style={{flex: 1, backgroundColor: '#fff' }} >

                       <View style={styles.container}>

                          <BackButton onPress={()=>BackHandler.exitApp()}/>

                           <View>

                        <ButtonGroup
                            onPress={this.update}
                            selectedIndex={selected}
                            buttons={buttons1}
                            selectedButtonStyle={{backgroundColor:'#6E9DFA'}}
                            containerStyle={{marginTop:10, height: 45, 
                            borderRadius: 7, marginLeft: 35, marginRight: 35, borderColor: '#6E9DFA' }} />

                  {(this.state.selected) ? (
                            
                           <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} >
                             <View style={styles.container}>
                         
                                <InputField 
                                  style={styles.InputView}
                                  leftimage={require('../assets/images/user1.png')}
                                  editable={this.state.isEdit}
                                  onChangeText={firstname => this.setState({ firstname })}
                                  value={this.state.firstname}
                                  placeholder={"First Name"}
                                  rightimage={require('../assets/images/cancel.png')}
                                  onpress={this.firstname}
                                  />

                                 <InputField 
                                  style={styles.InputView}
                                  leftimage={require('../assets/images/user1.png')}
                                  editable={this.state.isEdit}
                                  onChangeText={lastname => this.setState({ lastname })}
                                  value={this.state.lastname}
                                  placeholder={"Last Name"}
                                  rightimage={require('../assets/images/cancel.png')}
                                  onpress={this.lastname}
                                  />

                                <InputField 
                                  style={styles.addressView}
                                  leftimage={require('../assets/images/home.png')}
                                  editable={this.state.isEdit}
                                  onChangeText={address => this.setState({ address })}
                                  value={this.state.address}
                                  placeholder={"Address"}
                                  />

                                <GenderButton 
                                    onPress={this.updateIndex}
                                    selectedButtonStyle={{backgroundColor:'#6E9DFA'}}
                                    selectedIndex={selectedIndex}
                                    buttons={buttons}
                                    />


                                 <View style={{ marginTop: 5, marginLeft: 35, 
                                 marginRight: 35, hight: 1, backgroundColor: 'grey', 
                                 borderColor: 'lightgrey', borderWidth: 1 }}></View>
                         
                                 
                                 <InputField 
                                  style={styles.emailView}
                                  editable={this.state.isEdit}
                                  onChangeText={email => this.setState({ email })}
                                  value={this.state.email}
                                  placeholder={"Email Address"}
                                  rightimage={require('../assets/images/info.png')}
                                  onpress={this.email}
                                  />
                               
                                <View style={{ marginTop: 35, marginLeft: 35, 
                                marginRight: 35, hight: 1, backgroundColor: 'grey', 
                                borderColor: 'lightgrey', borderWidth: 1 }}></View>
                         
                                    <Password
                                    editable={this.state.isEdit}
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                    />      

                                <View style={{ marginLeft: 35, marginRight: 35, hight: 1, 
                                backgroundColor: 'grey', borderColor: 'lightgrey', borderWidth: 1 }}></View>
                         
                                 <DOBText 
                                    date={this.state.date}
                                    onDateChange={(date) => { this.setState({ date: date })}}
                                    />

                                 <Buttons 
                                     lefttext={' Edit '}
                                     righttext={' Save '}
                                     onpressleftbutton={this.reset1}
                                     onpressrightbutton={this.save}
                                     />
                                   
                                    </View>
                                </ScrollView>
                         
                         
                            )

                            :

                            (

                 <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} >
                               
                     <View style={styles.container}>
                        
                             
                        
                              <InputField 
                                  style={styles.InputView}
                                  leftimage={require('../assets/images/profile.png')}
                                 // editable={this.state.isEdit}
                                  onChangeText={username => this.setState({ username })}
                                  value={this.state.username}
                                  placeholder={"Enter UserName"}
                                  rightimage={require('../assets/images/cancel.png')}
                                  onpress={this.username}
                                  /> 

                             <InputField 
                                  style={styles.InputView}
                                  leftimage={require('../assets/images/Password.png')}
                                 // editable={this.state.isEdit}
                                  onChangeText={passwordlogin => this.setState({ passwordlogin })}
                                  value={this.state.passwordlogin}
                                  placeholder={"Password"}
                                  securetextentry={true}
                                  rightimage={require('../assets/images/hide_password.png')}
                                 // onpress={this.passwordlogin}
                                  />  

                                    <SavePassword 
                                    onpress={this.switchon}/>

                                   
                                    <Buttons 
                                     lefttext={' Cancel '}
                                     righttext={' Login '}
                                     onpressleftbutton={this.cancel}
                                     onpressrightbutton={this.login}
                                     />

                                   </View>
                                   </ScrollView>
                                 )
                               }
                             </View>
                       </View>
              </ScrollView>

               )
              }
          }
  
  
*  Then after create Mainpage.js 
-  this screen open for successfull login completed.
  
  
          //------MainPage.js------
          
          
          import React, {Component} from 'react';
          import {View, Image, Text} from 'react-native';

          export default class Mainpage extends Component{

            render(){

              return(
   
               <View style={{
                   flexDirection:'column',
                   flex:1,
                   backgroundColor:'white',
                   }}>

               <View style={{
                   flex:0.5,
                   alignItems:'center',
                   justifyContent:'center'
               }}>


                <Image   
                 style={{width: 100,height:100,  }}
                 resizeMode="stretch"
                 source={require('..//assets/images/bluestacks.png')}
               />

                </View>


                 <Text style={{alignItems:'center',
                   justifyContent:'center',
                   fontSize:22,
                   flex:0.2,
                   textAlign:'center',
                   color:'#54A1F9'}}>Thank You For Sign-In</Text>



                 <View style={{
                   flex:0.15,
                   alignItems:'center',
                   justifyContent:'center'
                 }}>



                 <Image   
                 style={{width: 30,height:30}}
                 resizeMode="stretch"
                 source={require('..//assets/images/correct_button.png')}
                 />

                </View>


                <Text style={{alignItems:'center',

                   fontSize:19,
                   paddingTop:30,
                   flex:0.2,
                   textAlign:'center',
                   color:'#54A1F9'}}>Version 2.1</Text>

                  </View>


                )
              }
             }
  
  
  
# Output:



