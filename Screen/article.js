import { View, Text, Image,StyleSheet,Pressable,TextInput,ScrollView,FlatList} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from "../utils/Dimension"
import { Color } from '../assets/Color'
import Ripple from 'react-native-material-ripple'

export default function Article({navigation}) {
  return (
    <View style={{flex:1,width:windowWidth,height:windowHeight}}>
        <View style={{marginTop:10,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:12}}>
            <Pressable onPress={()=>navigation.goBack()}>
     <Image  style={{width:18,height:18}}  source={require("../assets/Image/leftarrow.png")}/>
     </Pressable>

     <Pressable >
     <Image    source={require("../assets/Image/dots.png")}/>
     </Pressable>
     </View>

<View style={{paddingHorizontal:20,marginTop:20}}>
    <Text style={{fontFamily:"Roboto-Bold",fontSize:17,color:"black"}}>Healthy High protein based diet: A diet for weight loss</Text>

    <View style={{height:300,marginTop:20}}>
    <Image style={{height:'100%',width:"100%",borderRadius:12}} resizeMode='contain' source={require("../assets/Image/vegetable2.png")}/>
    </View>
    <Text style={{marginTop:20,color:"black",fontFamily:"Roboto-Medium"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
   
   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Text>
</View>


    </View>
  )
}



const styles = StyleSheet.create({
    heading:{

    }
})