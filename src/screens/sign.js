import React, { Component } from 'react';
import { View, ImageBackground, TouchableOpacity, Switch, AsyncStorage, ScrollView, TextInput, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { Actions } from 'react-native-router-flux';



export default class Sign extends  Component {
    constructor() {
        super()
        this.state = {
            selected: 1,
            selectedIndex: 2,
            date: "",
            firstname: '',
            lastname: '',
            address: '',
            email: '',
            password: '',
            username: '',
            passwordlogin: true,
            getemail:'',
            getpassword:'',
            isEdit:true,
            showPassword:true

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


    showpassword() {
        this.setState({ passwordlogin: !this.state.passwordlogin });
      }



      reset1  = () => { 
        this.setState({
            isEdit:true
        })
      }




  
    save = async () => {

        //  if(
        //     this.validate({
        //         firstname:{required:true},
        //         lastname:{required:true},
        //         address:{required:true},
        //         email:{required:true},
        //         password:{required:true},
        //         date:{required:true},
        //     })
        //  )
            this.setState({isEdit:false})
    
            const { firstname, lastname, address, email, date, password } = this.state;
    
            let obj = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email:this.state.email,
                password:this.state.password,
                address: this.state.address,
                date: this.state.date
            }
    
    
           await AsyncStorage.setItem('EMAIL',JSON.stringify(email));
           await AsyncStorage.setItem('USERNAME',JSON.stringify(firstname + lastname));
           await AsyncStorage.setItem('PASSWORD',JSON.stringify(password));
           await AsyncStorage.setItem('user', JSON.stringify(obj));
           let user = await AsyncStorage.getItem('user');
           let parsed = JSON.parse(user);

        //    if(this.state.password == '' && this.state.firstname == '' && this.state.lastname == '' && this.state.address == '' && this.state.email == ''){
        //     alert('Please All Details Fill Up!')
        //     } 
        //     else{
               
             alert('*** Your Details ***' + '\n' + '\n' + 'Username:' + parsed.firstname  + parsed.lastname + '\n' + 'Address:' + parsed.address + '\n'  + 'Email:' + parsed.email + '\n' + 'Password:' + parsed.password + '\n' + 'DOB:' + parsed.date);
       
            // }
           


         
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
    
    //    componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    //   }
    
  


    render() {

        const buttons1 = ['Sign In', 'Sign Up']
        const { selected } = this.state

        const buttons = ['Male','Female']
        const { selectedIndex } = this.state

        

        return (



            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} >

                <View style={{
                    flexDirection: 'column',
                    flex: 1,
                    backgroundColor: 'white',
                    marginBottom: 30,
                }}>


                    <TouchableOpacity
                        onPress={this.exit}
                        style={{
                            flexDirection: 'row',
                            flex: 0.1
                        }}>

                        <ImageBackground
                            style={{ width: 35, height: 35, marginTop: 15 }}
                            resizeMode="stretch"
                            source={require('../assets/images/back.png')}
                        />

                        <Text style={{ color: '#04C0F9', marginLeft: 0, marginTop: 15, fontSize: 23, width: 200, height: 50 }}>Back</Text>

                    </TouchableOpacity>

                    <View>


                        <ButtonGroup

                            onPress={this.update}
                            selectedIndex={selected}
                            buttons={buttons1}
                            selectedButtonStyle={{backgroundColor:'#6E9DFA'}}
                           
                            containerStyle={{ height: 45, borderRadius: 7, marginLeft: 35, marginRight: 35, borderColor: '#6E9DFA' }} />



                        {(this.state.selected) ? (

                            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} >
                                <View style={{
                                    flexDirection: 'column',
                                    flex: 1,
                                    backgroundColor: 'white',
                                    marginBottom: 30,
                                }}>


                                    <View 
                                    style={{
                                        flex: 1,
                                        height: 50,
                                        flexDirection: 'row',
                                        marginLeft: 35,
                                        marginRight: 35,
                                        marginTop: 20,
                                        backgroundColor: '#fff',
                                    }}>


                                        <ImageBackground
                                            style={{ width: 20, flex: 0.7, height: 20, marginTop: 15 }}
                                            resizeMode="stretch"
                                            source={require('../assets/images/user1.png')}
                                        />




                                        <TextInput
                                            editable={this.state.isEdit}
                                            onChangeText={firstname => this.setState({ firstname })}
                                            value={this.state.firstname}
                                            style={{
                                                flex: 8,
                                                height: 50,
                                                width: 250,
                                                paddingRight: 10,
                                                fontSize: 17,
                                                color: 'black',
                                                paddingLeft: 5,
                                                backgroundColor: '#fff',
                                                color: '#424242',
                                            }}
                                            keyboardType='default'
                                            placeholder="First Name"
                                            maxLength={15}
                                            underlineColorAndroid="transparent"
                                        />

                                        <TouchableOpacity
                                            onPress={this.firstname}
                                        >
                                            <ImageBackground
                                                style={{ width: 20, height: 20, marginTop: 17, flex: 0.8 }}
                                                resizeMode="stretch"
                                                source={require('../assets/images/cancel.png')}
                                            />
                                        </TouchableOpacity>

                                    </View>


                                    <View style={{ marginLeft: 35, marginRight: 35, hight: 1, backgroundColor: 'grey', borderColor: 'lightgrey', borderWidth: 1 }}></View>


                                    <View style={{
                                        flex: 1,
                                        height: 50,
                                        flexDirection: 'row',
                                        marginLeft: 35,
                                        marginRight: 35,
                                        marginTop: 10,
                                        backgroundColor: '#fff',
                                    }}>

                                        <ImageBackground
                                            style={{ flex: 0.7, width: 20, height: 20, marginTop: 15 }}
                                            resizeMode="stretch"
                                            source={require('../assets/images/user1.png')}
                                        />


                                        <TextInput
                                            editable={this.state.isEdit}
                                            onChangeText={lastname => this.setState({ lastname })}
                                            value={this.state.lastname}
                                            style={{
                                                flex: 8,
                                                height: 50,
                                                width: 250,
                                                paddingRight: 10,
                                                fontSize: 17,
                                                color: 'black',
                                                paddingLeft: 5,
                                                backgroundColor: '#fff',
                                                color: '#424242',
                                            }}
                                            placeholder="Last Name"
                                            underlineColorAndroid="transparent"
                                            keyboardType='default'
                                            maxLength={15}
                                        />

                                        <TouchableOpacity
                                            onPress={this.lastname}
                                        >
                                            <ImageBackground
                                                style={{ width: 20, flex: 0.8, height: 20, marginTop: 15, justifyContent: 'flex-end' }}
                                                resizeMode="stretch"
                                                source={require('../assets/images/cancel.png')}
                                            />

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

                                        <ImageBackground
                                            style={{ width: 17, height: 17, marginTop: 35 }}
                                            resizeMode="stretch"
                                            source={require('../assets/images/home.png')}
                                        />



                                        <TextInput
                                           editable={this.state.isEdit}
                                            onChangeText={address => this.setState({ address })}
                                            value={this.state.address}
                                            style={{
                                                flex: 1,
                                                height: 90,
                                                paddingRight: 10,
                                                fontSize: 17,
                                                color: 'black',
                                                paddingLeft: 5,
                                                backgroundColor: '#fff',
                                                color: '#424242',
                                            }}
                                            placeholder="Address"
                                            multiline
                                            underlineColorAndroid="transparent"
                                            keyboardType='default'
                                            maxLength={55}
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


                                        <Text
                                            style={{
                                                flex: 1,
                                                height: 50,
                                                paddingRight: 5,
                                                marginTop: 10,
                                                fontSize: 18,
                                                color: 'black',
                                                paddingLeft: 10,
                                                backgroundColor: '#fff',
                                                color: '#424242',
                                            }}
                                            underlineColorAndroid="transparent"
                                        >Gender:</Text>

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
                                        marginTop: 7,
                                        backgroundColor: '#fff',
                                    }}>



                                        <TextInput
                                        editable={this.state.isEdit}
                                            onChangeText={email => this.setState({ email })}
                                            value={this.state.email}
                                            style={{
                                                flex: 1,
                                                height: 50,
                                                paddingRight: 10,
                                                fontSize: 17,
                                                color: 'black',
                                                paddingLeft: 10,
                                                backgroundColor: '#fff',
                                                color: '#424242',
                                            }}
                                            placeholder="Email Address"
                                            keyboardType='email-address'
                                            underlineColorAndroid="transparent"
                                            maxLength={45}
                                        />

                                        <ImageBackground
                                            style={{ width: 20, height: 20, marginTop: 15, flex: 0.1 }}
                                            resizeMode="stretch"
                                            source={require('..//assets/images/info.png')}
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



                                        <Text
                                            style={{
                                                height: 50,
                                                width: 100,
                                                marginRight: 5,
                                                fontSize: 18,
                                                marginTop: 10,
                                                color: 'black',
                                                paddingLeft: 10,
                                                backgroundColor: '#fff',
                                                color: '#424242',
                                            }}
                                            underlineColorAndroid="transparent">
                                            Password:
                                        </Text>

                                        <TextInput
                                            editable={this.state.isEdit}
                                            onChangeText={password => this.setState({ password })}
                                            value={this.state.password}
                                            placeholder="* * *"
                                            secureTextEntry={true}
                                            style={{
                                                height: 45,
                                                paddingRight: 10,
                                                fontSize: 17,
                                                color: 'black',
                                                paddingLeft: 5,
                                                backgroundColor: '#fff',
                                                color: '#424242',
                                            }}
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



                                        <Text
                                            style={{
                                                height: 50,
                                                width: 150,
                                                marginRight: 5,
                                                fontSize: 18,
                                                marginTop: 10,
                                                color: 'black',
                                                paddingLeft: 10,
                                                backgroundColor: '#fff',
                                                color: '#424242',
                                            }}
                                            underlineColorAndroid="transparent">
                                            Date Of Birth:
                                        </Text>

                                        <DatePicker
                                            style={{ width: 130, height: 70, marginTop: 8, backgroundColor: '#fff', marginRight: 25 }}
                                            date={this.state.date}
                                            mode="date"
                                            placeholder="select date"
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

                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        height: 50,
                                        flexDirection: 'row',
                                        marginLeft: 35,
                                        marginRight: 35,
                                        backgroundColor: '#fff',
                                    }}>

                                        <TouchableOpacity
                                        onPress = {this.reset1}
                                            style={{
                                                borderRadius: 25,
                                                backgroundColor: 'lightgrey',
                                                fontFamily: 'Cochin',
                                                margin: 15,
                                                fontWeight: 'bold',
                                                justifyContent: 'center',
                                                height: 50,
                                                width: 130,
                                                marginTop: 20,
                                                marginBottom: 60,
                                                marginRight: 15,
                                                borderWidth: 1,
                                                alignItems: 'center',
                                                fontSize: 15,
                                                borderColor: 'lightgrey',
                                                textAlign: 'center'
                                            }}
                                            >
                                            <Text style={{ fontSize: 15 }}> Edit </Text>

                                        </TouchableOpacity>



                                        <TouchableOpacity
                                           
                                            onPress={this.save}
                                            style={{
                                                borderRadius: 25,
                                                backgroundColor: '#8B9AFA',
                                                fontFamily: 'Cochin',
                                                margin: 5,
                                                fontWeight: 'bold',
                                                justifyContent: 'center',
                                                height: 50,
                                                width: 130,
                                                marginTop: 20,
                                                marginBottom: 60,
                                                marginLeft: 15,
                                                borderWidth: 1,
                                                alignItems: 'center',
                                                fontSize: 15,
                                                borderColor: '#8B9AFA',
                                                textAlign: 'center'
                                            }}
                                        >
                                            <Text 

                                            style={{ fontSize: 15 }}> Save </Text>

                                        </TouchableOpacity>




                                    </View>




                                </View>
                            </ScrollView>
                        )

                            :

                            (

                                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} >
                                    <View style={{
                                        flexDirection: 'column',
                                        flex: 1,
                                        backgroundColor: 'white',
                                        marginBottom: 30,
                                    }}>

                                        <View style={{
                                            flex: 10,
                                            height: 50,
                                            flexDirection: 'row',
                                            marginLeft: 35,
                                            marginRight: 35,
                                            marginTop: 40,
                                            backgroundColor: '#fff',
                                        }}>

                                            <ImageBackground
                                                style={{ width: 20, height: 20, marginTop: 15, flex: 0.7, }}
                                                resizeMode="stretch"
                                                source={require('..//assets/images/profile.png')}
                                            />



                                            <TextInput
                                                onChangeText={username => this.setState({ username })}
                                                value={this.state.username}
                                                style={{
                                                    flex: 8,
                                                    height: 50,
                                                    paddingRight: 10,
                                                    fontSize: 17,
                                                    color: 'black',
                                                    paddingLeft: 10,
                                                    backgroundColor: '#fff',
                                                    color: '#424242',
                                                }}
                                                placeholder="Enter User Name or Email"
                                                underlineColorAndroid="transparent"
                                                keyboardType='email-address'

                                            />

                                            <TouchableOpacity
                                                onPress={this.username}
                                            >
                                                <ImageBackground
                                                    style={{ width: 20, height: 20, marginTop: 17, flex: 0.8, }}
                                                    resizeMode="stretch"
                                                    source={require('..//assets/images/cancel.png')}
                                                />
                                            </TouchableOpacity>




                                        </View>


                                        <View style={{ marginLeft: 35, marginRight: 35, hight: 1, backgroundColor: 'grey', borderColor: 'lightgrey', borderWidth: 1 }}></View>


                                        <View style={{
                                            height: 50,
                                            flex: 10,
                                            flexDirection: 'row',
                                            marginLeft: 35,
                                            marginRight: 35,
                                            marginTop: 10,
                                            backgroundColor: '#fff',
                                        }}>

                                            <ImageBackground
                                                style={{ flex: 0.7, width: 20, height: 20, marginTop: 17 }}

                                                resizeMode="stretch"
                                                source={require('..//assets/images/Password.png')}
                                            />


                                            <TextInput
                                                onChangeText={passwordlogin => this.setState({ passwordlogin })}
                                                value={this.state.passwordlogin}
                                                secureTextEntry={true}
                                                style={{
                                                    height: 50,
                                                    flex: 8,
                                                    paddingRight: 10,
                                                    fontSize: 17,
                                                    color: 'black',
                                                    paddingLeft: 10,
                                                    backgroundColor: '#fff',
                                                    color: '#424242',
                                                }}
                                                placeholder="Password"
                                                underlineColorAndroid="transparent"
                                                maxLength={20}
                                            />


                                            <TouchableOpacity>

                                                <ImageBackground
                                                    onValueChange={this.showpassword}
                                                    value={!this.state.showPassword}
                                                    style={{ flex: 0.9, width: 25, height: 25, marginTop: 20, justifyContent: 'flex-end' }}
                                                    resizeMode="stretch"
                                                    source={require('..//assets/images/hide_password.png')}
                                                />
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
                                                style={{
                                                    flex: 0.80,
                                                    height: 50,
                                                    marginTop: 15,
                                                    fontSize: 18,
                                                    backgroundColor: 'white',
                                                    color: 'black',
                                                    paddingLeft: 10,
                                                    textAlign: 'right',
                                                    color: '#424242',
                                                }}
                                                underlineColorAndroid="transparent">Save Password</Text>

                                            <Switch
                                                style={{ marginTop: 10, fontSize: 20, flex: 0.2, }} />

                                        </View>

                                        <View style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            height: 50,
                                            flexDirection: 'row',
                                            marginLeft: 35,
                                            marginRight: 35,
                                            marginTop: 25,
                                            backgroundColor: '#fff',
                                        }}>

                                            <TouchableOpacity
                                                style={{
                                                    borderRadius: 25,
                                                    backgroundColor: 'lightgrey',
                                                    fontFamily: 'Cochin',
                                                    margin: 5,
                                                    marginRight: 15,
                                                    fontWeight: 'bold',
                                                    justifyContent: 'center',
                                                    height: 50,
                                                    width: 130,
                                                    marginTop: 20,
                                                    marginBottom: 60,
                                                    borderWidth: 1,
                                                    alignItems: 'center',
                                                    fontSize: 15,
                                                    borderColor: 'lightgrey',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                <Text style={{ fontSize: 15 }}> Cancel </Text>

                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                onPress={this.login.bind(this)}
                                                style={{
                                                    borderRadius: 25,
                                                    backgroundColor: '#8B9AFA',
                                                    fontFamily: 'Cochin',
                                                    margin: 5,
                                                    marginLeft: 15,
                                                    fontWeight: 'bold',
                                                    justifyContent: 'center',
                                                    height: 50,
                                                    width: 130,
                                                    marginTop: 20,
                                                    marginBottom: 60,
                                                    borderWidth: 1,
                                                    alignItems: 'center',
                                                    fontSize: 15,
                                                    borderColor: '#8B9AFA',
                                                    textAlign: 'center'
                                                }}
                                            >

                                                <Text style={{ fontSize: 17 }}> Login </Text>

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

