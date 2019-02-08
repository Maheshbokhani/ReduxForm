import React from 'react'
import {
    TouchableOpacity,Text,
    TextInput,ImageBackground,
    View
} from 'react-native'




export default  Button=({}) => {
   
  return(
      
     <View             
                        onPress={this.backPressed}
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

                
  </View>
 


    )
}