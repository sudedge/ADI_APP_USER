import { View, Text, StyleSheet,Image,Pressable } from 'react-native'
import React from 'react'
import { Color } from '../assets/Color'
import {windowHeight,windowWidth} from '../utils/Dimension/index'
export default function detailscreen() {
    const Patientdetail=[
        {id:'1',name:"Sam Arora",idno:"11874",age:"24",gender:"Male",paymentdetail:""}
    ]
  return (
    <View style={{...styles.maincontainer}}>
       <View style={{...styles.headercontainer}}>
         <Pressable style={{width:22,height:22}}>
             <Image resizeMode="contain" style={{width:"100%",height:"100%"}} source={require("../assets/Image/leftarrow.png")}/>
         </Pressable>
         <Text style={{fontFamily:"Roboto-Medium",color:"black",fontSize:25}}>Details</Text>
         <Pressable style={{width:28,height:28}}>
             <Image resizeMode="contain" style={{width:"100%",height:"100%"}} source={require("../assets/Image/search.png")}/>
         </Pressable>
       </View>
       <View style={{...styles.headercontainer,marginTop:30}}>
         <Text style={{color:'black',fontFamily:"Roboto-Medium",fontSize:13}}>Top Patients</Text>
         <Pressable>
         <Text style={{color:Color.maroon600,fontFamily:"Roboto-Medium",fontSize:13}}>See more</Text>
         </Pressable>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    maincontainer:{
        height:windowHeight,
        width:windowWidth,flex:1
    },
    headercontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:15,marginTop:10,alignItems:"center"
    }
})