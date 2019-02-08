import React from 'react'
import {
    Text,
    
    View
} from 'react-native'




export default  GenText=({}) => {
    return(
      
        <View>
         
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
    >Gender:  </Text>
          
       </View>



    )
}