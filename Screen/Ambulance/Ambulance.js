import { View, Text, Image,StyleSheet,Pressable,TextInput,ScrollView,FlatList,ImageBackground} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from "../../utils/Dimension"
import { Color } from '../../assets/Color'
import Ripple from 'react-native-material-ripple'

export default function Article({navigation}) {
  return (
    <View style={{flex:1,width:windowWidth,height:windowHeight}}>
        <View style={{marginTop:10,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:12}}>
            <Pressable onPress={()=>navigation.goBack()} >
     <Image  style={{width:18,height:18}}  source={require("../../assets/Image/leftarrow.png")}/>
     </Pressable>

     <Pressable >
     <Image    source={require("../../assets/Image/dots.png")}/>
     </Pressable>
     </View>

<ScrollView showsVerticalScrollIndicator={false} bounces={false} style={{paddingHorizontal:20,marginTop:10}}>
   
  <ImageBackground style={{height:300,borderRadius:12,marginTop:20}}  source={require("../../assets/Image/Ambu.png")}>
  <View style={{position:"absolute",left:25,top:20}}>
                <Text style={{color:"#FFF5F5",fontFamily:"Roboto-Medium",fontSize:15}}>Ambulance</Text>
                <Text style={{color:"#FFF5F5",fontFamily:"Roboto-Medium",fontSize:15}}>We'll Help You Get</Text>
             </View>
    </ImageBackground>
   <View style={{marginLeft:12}}>
       <Text style={{fontFamily:"Roboto-Bold",fontSize:22,color:"black"}}>AMBULANCE 1</Text>
       <Text style={{fontFamily:"Roboto-Medium",fontSize:13,color:"grey"}}>ICU AMBULANCE</Text>
  </View>
{/* 
  <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:12,paddingHorizontal:12,}}>
      <View style={{width:123,height:36,alignItems:"center",justifyContent:'center',elevation:1,shadowOffset:{width:0,height:3},shadowColor:Color.maroon600,shadowOpacity:0.6}}>
             
          <Pressable>
          <Text style={{fontFamily:"Roboto-Medium",fontSize:13}}>Pick-up</Text>
          </Pressable>
    </View>    
          <Pressable style={{width:123,alignItems:"center",justifyContent:'center',elevation:1}}>
             <Text style={{fontFamily:"Roboto-Medium",fontSize:13}}>Pick-0ff-time</Text>
          </Pressable>
   </View> */}

<View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:12,marginTop:20}}>



<View style={{width:140,backgroundColor:'white',marginTop:12,justifyContent:"center",height:35,elevation:5,shadowOffset:{width:0,height:3},shadowColor:Color.maroon600,shadowOpacity:0.6,shadowRadius:5,}}>
      <Pressable style={{alignItems:"center",justifyContent:"center"}}>
          
               <Text style={{fontSize:15,color:"#808080",fontFamily:"Roboto-Medium",fontSize:13}}> Pick-Up</Text>
    </Pressable>
    
          </View>


          <View style={{width:140,backgroundColor:'white',marginTop:12,justifyContent:"center",height:35,elevation:5,shadowOffset:{width:0,height:3},shadowColor:Color.maroon600,shadowOpacity:0.6,shadowRadius:5,}}>
      <Pressable style={{alignItems:"center",justifyContent:"center"}}>
          
               <Text style={{fontSize:15,color:"#808080",fontFamily:"Roboto-Medium",fontSize:13}}> Pick-off-time</Text>
    </Pressable>
    
          </View>

   </View>





   <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:12,marginTop:20}}>

        <View style={{width:140,backgroundColor:'white',marginTop:12,justifyContent:"center",height:35,elevation:5,shadowOffset:{width:0,height:3},shadowColor:Color.maroon600,shadowOpacity:0.6,shadowRadius:5,}}>
              <Pressable style={{alignItems:"center",justifyContent:"center"}}>
                   <Text style={{fontSize:15,color:"#808080",fontFamily:"Roboto-Medium",fontSize:13}}>Drop-off</Text>
              </Pressable>
    
          </View>


          <View style={{width:140,backgroundColor:'white',marginTop:12,justifyContent:"center",height:35,elevation:5,shadowOffset:{width:0,height:3},shadowColor:Color.maroon600,shadowOpacity:0.6,shadowRadius:5,}}>
      <Pressable style={{alignItems:"center",justifyContent:"center"}}>
          
               <Text style={{fontSize:15,color:"#808080",fontFamily:"Roboto-Medium",fontSize:13}}> Drop-off-time</Text>
    </Pressable>
    
          </View>

   </View>

   <View style={{backgroundColor:'white',marginTop:32,justifyContent:"center",height:42,elevation:5,shadowOffset:{width:0,height:3},shadowColor:Color.maroon600,shadowOpacity:0.6,shadowRadius:5,marginHorizontal:12,}}>
       
        <TextInput style={{color:"#808080",fontFamily:"Roboto-Medium",fontSize:15,paddingLeft:12}} placeholder='Name'/>

   </View>


   <View style={{backgroundColor:'white',marginTop:32,justifyContent:"center",height:42,elevation:5,shadowOffset:{width:0,height:3},shadowColor:Color.maroon600,shadowOpacity:0.6,shadowRadius:5,marginHorizontal:12,}}>
       
       <TextInput keyboardType='phone-pad' style={{color:"#808080",fontFamily:"Roboto-Medium",fontSize:15,paddingLeft:12}} placeholder='Phone no.'/>

  </View>


  <View style={{backgroundColor:'white',marginTop:32,justifyContent:"center",height:42,elevation:5,shadowOffset:{width:0,height:3},shadowColor:Color.maroon600,shadowOpacity:0.6,shadowRadius:5,marginHorizontal:12,}}>
       
       <TextInput keyboardType='email-address' style={{color:"#808080",fontFamily:"Roboto-Medium",fontSize:15,paddingLeft:12}} placeholder='Email'/>

  </View>


  <Ripple  rippleOpacity={0.8} rippleColor='white' rippleDuration={800} style={{backgroundColor:Color.maroon600,alignItems:"center",justifyContent:"center",marginBottom:50,marginTop:30,marginHorizontal:10,padding:20,borderRadius:20}}>
      <Text style={{color:Color.white,fontFamily:"Roboto-Bold",fontSize:16}}>Book Now</Text>
  </Ripple>

</ScrollView>


    </View>
  )
}



const styles = StyleSheet.create({
    heading:{

    }
})