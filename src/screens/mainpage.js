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