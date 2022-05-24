import { View, Text, StyleSheet,Image,Pressable,ScrollView } from 'react-native'
import React from 'react'
import { Color } from '../assets/Color'
import {windowHeight,windowWidth} from '../utils/Dimension/index'
export default function detailscreen() {
    const Patientdetail=[
        {id:'1'
        ,name:"Sam Arora",
        idno:"11874",
        age:"24",
        gender:"Male",
        paymentdetail:"Paid"},
        {id:'2'
        ,name:"Sam Arora",
        idno:"11874",
        age:"24",
        gender:"Male",
        paymentdetail:"Paid"},
        {id:'3'
        ,name:"Sam Arora",
        idno:"11874",
        age:"24",
        gender:"Male",
        paymentdetail:"Paid"},
        {id:'4'
        ,name:"Sam Arora",
        idno:"11874",
        age:"24",
        gender:"Male",
        paymentdetail:"Paid"},
        {id:'5'
        ,name:"Sam Arora",
        idno:"11874",
        age:"24",
        gender:"Male",
        paymentdetail:"Paid"},
        {id:'6'
        ,name:"Sam Arora",
        idno:"11874",
        age:"24",
        gender:"Male",
        paymentdetail:"Paid"},
        {id:'7'
        ,name:"Sam Arora",
        idno:"11874",
        age:"24",
        gender:"Male",
        paymentdetail:"Paid"},
    ]

    const Patients=()=>{
      return(
      <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16} style={{}}>
        {Patientdetail.map((item,index)=>(
         
          <View key={index} style={{height:"auto",margin:20,elevation:4,backgroundColor:Color.white,shadowColor:Color.maroon600,shadowRadius:2,shadowOpacity:0.9,shadowOffset:{width:0,height:3}}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingLeft:30,paddingRight:120,marginTop:30}}>
              <Text style={{color:"black",fontFamily:"Roboto-Regular",fontSize:15,fontWeight:"600"}}>Name</Text>
              <Text>{item.name}</Text>
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between",paddingLeft:30,paddingRight:170,marginTop:10}}>
              <Text style={{color:"black",fontFamily:"Roboto-Regular",fontSize:15,fontWeight:"600"}}>Age</Text>
              <Text>{item.age}</Text>
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between",paddingLeft:30,paddingRight:150,marginTop:10}}>
              <Text style={{color:"black",fontFamily:"Roboto-Regular",fontSize:15,fontWeight:"600"}}>ID number</Text>
              <Text>{item.idno}</Text>
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between",paddingLeft:30,paddingRight:155,marginTop:10}}>
              <Text style={{color:"black",fontFamily:"Roboto-Regular",fontSize:15,fontWeight:"600"}}>Gender</Text>
              <Text>{item.gender}</Text>
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between",paddingLeft:30,paddingRight:160,marginTop:10,marginBottom:20}}>
              <Text style={{color:"black",fontFamily:"Roboto-Regular",fontSize:15,fontWeight:"600"}}>Payment details</Text>
              <Text>{item.paymentdetail}</Text>
            </View>

          </View>
        
        ))}
      </ScrollView>
      )
    }
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
       <Patients/>
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