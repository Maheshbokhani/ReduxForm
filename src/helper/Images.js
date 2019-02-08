import React from 'react'
import {
    TouchableOpacity,Text,
    TextInput,ImageBackground,
    View
} from 'react-native'




export default  Images=({imagepath,imagepath1}) => {
return(
    
<View>
  <ImageBackground
         style={{ flex: 0.7, width: 20, height: 20, marginTop: 15 }}
         resizeMode="stretch"
         source={imagepath}
     />


     <ImageBackground
     style={{ width: 20, height: 20, marginTop: 1, flex: 0.8 }}
     resizeMode="stretch"
     source={imagepath1}
 />







</View>



)
}