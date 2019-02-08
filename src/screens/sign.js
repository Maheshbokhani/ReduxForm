import React, { Component } from 'react';
import { View, ImageBackground,BackHandler,StyleSheet,Button, TouchableOpacity, Switch, AsyncStorage, ScrollView, TextInput, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { Actions } from 'react-native-router-flux';
import BackButton from '../helper/BackButton'
import SubmitButton from '../components/SubmitButton' 
import CancelButton from '../components/CancelButton'
import DOBText from '../components/DOBText'
import PassText from '../components/PassText';
import GenText from '../components/GenText';
import Images from '../helper/Images';
import {styles} from '../constants/constant'

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
            showPassword:true,
           
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
        })
    }
    lastname = () => {
        this.setState({
            lastname: '',
        })
    }
    email = () => {
        this.setState({
            email: '',
        })
    }
    username = () => {
        this.setState({
            username: '',
        })
    }
    switchon = () =>{
        isOn=false
    }
    reset1  = () => { 
        this.setState({
            isEdit:true
        })
      }
    save = async () => {
             const { firstname, lastname, address, email, date, password } = this.state;
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
           
            if(this.state.password == '' || this.state.email == '' || this.state.firstname == '' || this.state.lastname == '' || this.state.date == '' || this.state.address == ''){
             alert('Please Enter All Details!')
             }
             
             else{
                this.state.selected=0
                this.setState({isEdit:false})
            await alert('*** Your Details ***' + '\n' + '\n' + 'Username:' + parsed.firstname + '_' + parsed.lastname + '\n\n' + 'Address:' + parsed.address + '\n\n'  + 'Email:' + parsed.email + '\n\n' + 'Password:' + parsed.password + '\n\n' + 'DOB:' + parsed.date);
             
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
        if ( (getuser1== this.state.username || getemail1== this.state.username ) && getpassword1== this.state.passwordlogin) {
            Actions.page2();
        } 
        else{
           alert('Please Enter Valid Details!')
        }
       }
    
     backPressed = () => {
        BackHandler.exitApp()
     }

       render() {

        const buttons1 = ['Sign In', 'Sign Up']
        const { selected } = this.state

        const buttons = ['Male','Female']
        const { selectedIndex } = this.state

        

        return (



            <ScrollView style={{flex: 1, backgroundColor: '#fff' }} >

                <View style={styles.container}>

                  <TouchableOpacity onPress={this.backPressed}>
                   <BackButton />
                   </TouchableOpacity>


                    <View>

                        <ButtonGroup
                            onPress={this.update}
                            selectedIndex={selected}
                            buttons={buttons1}
                            selectedButtonStyle={{backgroundColor:'#6E9DFA'}}
                           
                            containerStyle={{marginTop:10, height: 45, borderRadius: 7, marginLeft: 35, marginRight: 35, borderColor: '#6E9DFA' }} />



            {(this.state.selected) ? (
                            
                            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} >
                             <View style={styles.container}>
                         
                         
                                 <View style={styles.InputView}>
                         
                                   <Images imagepath={require('../assets/images/user1.png')}/>
                         
                                      <TextInput
                                         editable={this.state.isEdit}
                                         onChangeText={firstname => this.setState({ firstname })}
                                         value={this.state.firstname}
                                         style={styles.UserName}
                                         keyboardType='default'
                                         placeholder="First Name"
                                         maxLength={15}
                                         underlineColorAndroid="transparent">
                                         </TextInput>
                         
                                     <TouchableOpacity
                                         onPress={this.firstname}
                                     >
                                         <Images imagepath1={require('../assets/images/cancel.png')}/>
                                     
                                     </TouchableOpacity>
                         
                                 </View>
                         
                         
                                 <View style={{ marginLeft: 35, marginRight: 35, hight: 1, backgroundColor: 'grey', borderColor: 'lightgrey', borderWidth: 1 }}></View>
                         
                         
                                 <View style={styles.InputView}>
                         
                                
                         
                                  <Images imagepath={require('../assets/images/user1.png')}/>
                         
                                     <TextInput
                                         editable={this.state.isEdit}
                                         onChangeText={lastname => this.setState({ lastname })}
                                         value={this.state.lastname}
                                         style={styles.UserName}
                                         placeholder="Last Name"
                                         underlineColorAndroid="transparent"
                                         keyboardType='default'
                                         maxLength={15}
                                     />
                         
                                     <TouchableOpacity
                                         onPress={this.lastname}
                                     >
                                         <Images imagepath1={require('../assets/images/cancel.png')}/>
                         
                                     </TouchableOpacity>
                         
                         
                         
                                 </View>
                         
                         
                                 <View style={{ marginLeft: 35, marginRight: 35, hight: 1, backgroundColor: 'grey', borderColor: 'lightgrey', borderWidth: 1 }}></View>
                         
                                 <View style={{
                                     flex: 1,
                                     height: 100,
                                     flexDirection: 'row',
                                     marginLeft: 35,
                                     marginRight: 35,
                                     marginTop: 10,
                                     backgroundColor: '#fff',
                                 }}>
                         
                                 <Images imagepath={require('../assets/images/home.png')}/>
                         
                         
                         
                                     <TextInput
                                        editable={this.state.isEdit}
                                         onChangeText={address => this.setState({ address })}
                                         value={this.state.address}
                                         style={styles.inputText}
                                         placeholder="Address"
                                         multiline
                                         underlineColorAndroid="transparent"
                                         keyboardType='default'
                                         maxLength={65}
                                     />
                                 </View>
                         
                         
                                 <View style={{ marginLeft: 35, marginRight: 35, hight: 1, backgroundColor: 'grey', borderColor: 'lightgrey', borderWidth: 1 }}></View>
                         
                         
                                 <View style={{
                                     flex: 1,
                                     height: 50,
                                     flexDirection: 'row',
                                     marginLeft: 35,
                                     marginRight: 10,
                                     marginTop: 15,
                                     backgroundColor: '#fff',
                                 }}>
                         
                         
                                 <GenText />
                         
                                     <ButtonGroup
                                         onPress={this.updateIndex}
                                         selectedButtonStyle={{backgroundColor:'#6E9DFA'}}
                                         selectedIndex={selectedIndex}
                                         buttons={buttons}
                                         containerStyle={{ width: 200, height: 35, borderRadius: 7, marginLeft: 5, marginRight: 25, borderColor: '#6E9DFA' }} />
                         
                                 </View>
                         
                                 <View style={{ marginTop: 5, marginLeft: 35, marginRight: 35, hight: 1, backgroundColor: 'grey', borderColor: 'lightgrey', borderWidth: 1 }}></View>
                         
                                 <View style={{
                                     flex: 1,
                                     height: 50,
                                     flexDirection: 'row',
                                     marginLeft: 35,
                                     marginRight: 35,
                                     marginTop:5,
                                     backgroundColor: '#fff',
                                 }}>
                         
                         
                         
                                     <TextInput
                                     editable={this.state.isEdit}
                                         onChangeText={email => this.setState({ email })}
                                         value={this.state.email}
                                         style={{flex:0.91,fontSize:17,height:50}}
                                         placeholder="Email Address"
                                         keyboardType='email-address'
                                         underlineColorAndroid="transparent"
                                         maxLength={45}
                                     />
                         
                                     <ImageBackground
                                     style={{ width: 20, height: 20, marginTop:15, flex: 0.05 }}
                                     resizeMode="stretch"
                                     source={require('../assets/images/info.png')}
                                     />
                                 </View>
                         
                                 <View style={{ marginLeft: 35, marginRight: 35, hight: 1, backgroundColor: 'grey', borderColor: 'lightgrey', borderWidth: 1 }}></View>
                         
                                 <View style={{ marginTop: 35, marginLeft: 35, marginRight: 35, hight: 1, backgroundColor: 'grey', borderColor: 'lightgrey', borderWidth: 1 }}></View>
                         
                         
                                 <View style={{
                                     height: 50,
                                     flexDirection: 'row',
                                     marginLeft: 35,
                                     marginRight: 35,
                                     marginTop: 5,
                                     backgroundColor: '#fff',
                                 }}>
                         
                         
                                 <PassText />
                         
                                     <TextInput
                                         editable={this.state.isEdit}
                                         onChangeText={password => this.setState({ password })}
                                         value={this.state.password}
                                         placeholder="* * *"
                                         secureTextEntry={true}
                                         style={styles.inputText}
                                         underlineColorAndroid="transparent"
                         
                                         maxLength={20}
                                     />
                                 </View>
                         
                                 <View style={{ marginLeft: 35, marginRight: 35, hight: 1, backgroundColor: 'grey', borderColor: 'lightgrey', borderWidth: 1 }}></View>
                         
                         
                                 <View style={{
                                     height: 100,
                                     flexDirection: 'row',
                                     marginLeft: 35,
                                     marginTop: 5,
                                     backgroundColor: '#fff',
                                 }}>
                         
                         
                         
                                     <DOBText/>
                         
                         
                                     <DatePicker
                                         style={{ width: 130, height: 70, marginTop: 8, backgroundColor: '#fff', marginRight: 25 }}
                                         date={this.state.date}
                                         mode="date"
                                         placeholder="01-01-2000"
                                         format="DD-MM-YYYY "
                                         confirmBtnText="Confirm"
                                         cancelBtnText="Cancel"
                                         customStyles={{
                                             dateIcon: {
                                                 position: 'absolute',
                                                 left: 0,
                                                 top: 4,
                                                 marginLeft: 0
                                             },
                                             dateInput: {
                                                 marginLeft: 36,
                                             }
                                         }}
                                         onDateChange={(date) => { this.setState({ date: date }) }}
                                     />
                                     
                                 </View>
                         
                                 <View style={styles.ButtonView}>
                         
                                   
                                       <TouchableOpacity
                                         onPress={this.reset1}
                                         >
                                        <CancelButton submit1={<Text style={{ fontSize: 15 }}> Edit </Text>}></CancelButton>
                                         </TouchableOpacity>
                                  
                                         <TouchableOpacity
                                         onPress = {this.save}
                                             >
                                         <SubmitButton submit={<Text style={{ fontSize: 15 }}> Save </Text>}></SubmitButton>
                                         </TouchableOpacity>
                                     
                                      </View>
                         
                             </View>
                         </ScrollView>
                         
                         
                        )

                            :

                            (

                                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} >
                                <View style={styles.container}>
                        
                                    <View style={styles.InputView}>
                        
                                    <Images imagepath={require('../assets/images/profile.png')}/>
                        
                        
                                        <TextInput
                                            onChangeText={username => this.setState({ username })}
                                            value={this.state.username}
                                            style={styles.inputText}
                                            placeholder="Enter Username or Email"
                                            underlineColorAndroid="transparent"
                                        > 
                                         
                                           </TextInput> 
                        
                                           
                        
                                        <TouchableOpacity
                                            onPress={this.username}
                                        >
                                           <Images imagepath1={require('../assets/images/cancel.png')}/>
                                      
                                        </TouchableOpacity>
                        
                        
                        
                        
                                    </View>
                        
                        
                                    <View style={{ marginLeft: 35, marginRight: 35, hight: 1, backgroundColor: 'grey', borderColor: 'lightgrey', borderWidth: 1 }}></View>
                        
                        
                                    <View style={styles.InputView}>
                        
                                    <Images imagepath={require('../assets/images/Password.png')}/>
                        
                        
                                        <TextInput
                                          onChangeText={passwordlogin => this.setState({ passwordlogin })}
                                            value={this.state.passwordlogin}
                                            secureTextEntry={true}
                                            style={styles.inputText}
                                            placeholder="Password"
                                            underlineColorAndroid="transparent"
                                            maxLength={20}
                                        />
                        
                        
                                        <TouchableOpacity>
                        
                                        <Images imagepath1={require('../assets/images/hide_password.png')}/>
                                      
                                        </TouchableOpacity>
                        
                        
                                    </View>
                        
                                    <View style={{ marginLeft: 35, marginRight: 35, hight: 1, backgroundColor: 'grey', borderColor: 'lightgrey', borderWidth: 1 }}></View>
                        
                        
                        
                                    <View style={{
                                        flex: 1,
                                        height: 50,
                                        flexDirection: 'row',
                                        marginLeft: 35,
                                        marginRight: 35,
                                        justifyContent: 'center',
                                        marginTop: 10,
                                        backgroundColor: '#fff',
                                    }}  >
                        
                                        <Text
                                            style={styles.savePassword}
                                            underlineColorAndroid="transparent">Save Password</Text>
                        
                                        <Switch
                                            style={{marginTop:5,marginLeft:15}}
                                            onPress={this.switchon}
                                            onColor='green'
                                            offColor='grey'
                                            size='small'
                                            onToggle={ (isOn) => console.log('changed to : ', isOn) }
                                        />
                        
                                    </View>
                        
                                    <View style={styles.ButtonView}>
                        
                                        <TouchableOpacity
                                        onPress={this.cancel}
                                        >
                                       <CancelButton submit1={<Text style={{ fontSize: 15 }}> Cancel </Text>}></CancelButton>
                                        </TouchableOpacity>
                        
                                      
                                        <TouchableOpacity
                                         onPress={this.login}
                                         >
                                      <SubmitButton submit={<Text style={{ fontSize: 15 }}> LogIn </Text>}></SubmitButton>   
                        
                                    
                                   </TouchableOpacity>
                                  </View>
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
   
