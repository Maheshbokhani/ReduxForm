import React from 'react'
import {
    TouchableOpacity,Text,
    TextInput,ImageBackground,
    View
} from 'react-native'




export default  CancelButton=({submit1}) => {
    return(
      
        <View
               style={{borderRadius: 25,
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
                textAlign: 'center'}}
            >
         {submit1}   

        </View>




    )
}