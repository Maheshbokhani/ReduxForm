import React from 'react'
import {
    TouchableOpacity,Text,
    TextInput,ImageBackground,
    View
} from 'react-native'




export default  SubmitButton=({submit}) => {
    return(
      
        <View
            style={{borderRadius: 25,
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
                textAlign: 'center'}}
            >
         {submit}   
      



       

       </View>




    )
}