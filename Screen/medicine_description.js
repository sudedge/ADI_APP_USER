import { View, Text ,Pressable,Image} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from '../utils/Dimension'
import { Color } from '../assets/Color'
export default function Medicine_description() {
  return (
    <View style={{width:windowWidth,height:windowHeight}}>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,alignItems:"center"}}>
          <Pressable style={{width:19,height:19,marginLeft:20}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../assets/Image/leftarrow.png")}/>
          </Pressable>
     
      <Text style={{marginRight:windowWidth/2.5,color:"black",fontFamily:"Roboto-Medium",fontSize:20}}>My Cart</Text>
      </View>

<View style={{flexDirection:"row",marginTop:20}}>
      <View style={{paddingHorizontal:8,height:160,width:120,backgroundColor:Color.white,marginHorizontal:20,shadowColor:Color.maroon800,shadowOffset:{width:0,height:5},shadowOpacity:0.8,shadowRadius:2,elevation:3,borderBottomLeftRadius:50,borderTopRightRadius:50,alignItems:"center",marginBottom:5,}}>
      <View style={{width:90,height:90,backgroundColor:Color.white,marginTop:30,borderRadius:35,shadowColor:"black",shadowOffset:{width:0,height:3},shadowOpacity:0.5,shadowRadius:2,elevation:3,}}>
      <Image style={{width:'100%',height:"100%"}}resizeMode="repeat" source={require("../assets/Image/moov.png")}/>
        </View>
  </View>
<View style={{marginTop:20}}>
  <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:18}}>Moov</Text>
  <Text style={{color:"grey",fontFamily:"Roboto-Bold",fontSize:10}}>500gm</Text>
</View>
  </View>
    </View>
  )
}