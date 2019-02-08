import React from 'react'
import {
    Text,
    
    View
} from 'react-native'




export default  PassText=({}) => {
    return(
      
        <View>
         
           
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
          
       </View>



    )
}