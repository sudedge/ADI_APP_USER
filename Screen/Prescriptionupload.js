import { View, Text,Image } from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from '../utils/Dimension'
import Ripple from 'react-native-material-ripple'
import { Color } from '../assets/Color'
export default function Verificartion() {
  return (
    <View style={{width:windowWidth,height:windowHeight}} >
        <View style={{alignItems:"center",justifyContent:"center",marginTop:windowHeight/4}}>
      <Text style={{fontFamily:'Roboto-Medium',fontSize:24}}>Prescription Uploaded</Text>
      <Text style={{fontSize:13,color:"#808080",fontFamily:"Roboto-Medium",marginTop:5,}}>Your priscription is being reviewed .
       </Text>
       <Text  style={{fontSize:13,color:"#808080",fontFamily:"Roboto-Medium",marginTop:5,}}>  You will be notifies soon</Text>
      <View style={{height:180,borderWidth:1,width:"90%",borderStyle:"dashed",borderWidth:3,borderRadius:8,marginTop:30,borderColor:"#808080",alignItems:"center",justifyContent:"center"}}>
          <Image source={require("../assets/Image/uploaded.png")}/>
          </View>
          <Ripple onPress={()=>dispatch(setmodalvisible(true))} rippleColor={Color.white} rippleDuration={800}rippleOpacity={0.8} style={{marginTop:30,alignItems:"center",justifyContent:"center",backgroundColor:Color.maroon600,marginHorizontal:20,borderRadius:10,marginBottom:100,elevation:3,shadowOffset:{width:0,height:3},shadowColor:"black",shadowOpacity:0.6,shadowRadius:2,width:150,height:42}}>
       <Text style={{color:Color.white,fontFamily:"Roboto-Medium",fontSize:18}}>OK</Text>
       </Ripple> 
      </View>
    </View>
  )
}