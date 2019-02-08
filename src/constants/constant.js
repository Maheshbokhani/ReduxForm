import {StyleSheet, Dimensions} from 'react-native'

export const styles = StyleSheet.create({
    container:{
     flexDirection: 'column',
     flex: 1,
     paddingTop:10,
     backgroundColor: 'white',
    marginBottom:25
 
    },
    UserName:{
     flex: 8,
     height: 50,
     width: 250,
     paddingRight: 10,
     fontSize: 17,
     color: 'black',
     paddingLeft: 5,
     backgroundColor: '#fff',
     color: '#424242',
    },
    InputView:{
     flex: 1,
     height: 50,
     flexDirection: 'row',
     marginLeft: 35,
     marginRight: 35,
     marginTop: 20,
     backgroundColor: '#fff',
    },
   Address:{},
   view:{},
   
     ButtonView:{
         flex: 1,
         justifyContent: 'center',
         height: 50,
         flexDirection: 'row',
         marginLeft: 35,
         marginRight: 35,
         marginTop: 25,
         backgroundColor: '#fff',
     
      },


    savePassword:{
        flex: 0.70,
        height: 50,
        marginTop: 15,
        fontSize: 18,
        backgroundColor: 'white',
        color: 'black',
        paddingLeft: 10,
        textAlign: 'right',
        color: '#424242',
    },

    inputText:{
        height: 50,
        flex: 8,
        paddingRight: 10,
        fontSize: 17,
        color: 'black',
        paddingLeft: 10,
        backgroundColor: '#fff',
        color: '#424242',
    }
    } )
