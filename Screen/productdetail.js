import { View, Text,Image, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { Color } from '../assets/Color'
import {windowHeight,windowWidth} from '../utils/Dimension/index'
import Ripple from 'react-native-material-ripple'

export default function Productdetail({navigation}) {
  return (
    <View style={{width:windowWidth,height:windowHeight,flex:1,backgroundColor:"white"}}>
        
        <TouchableOpacity style={{marginTop:12,backgroundColor:"transparent"}} onPress={()=>navigation.goBack()}>
            <Image style={{width:25,height:25}} source={require("../assets/Image/rights.png")}/>
        </TouchableOpacity>
        <ScrollView bounces={false} scrollEventThrottle={16}>
        <View style={{height:300,backgroundColor:"green",alignItems:"center",justifyContent:"center",marginTop:12}}>
            <Image source={require("../assets/Image/moovspray.png")}/>
        </View>
     <View style={{marginTop:12,marginHorizontal:20,justifyContent:"center"}}>
       <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:18}}>PRODUCT DETAILS</Text>
       <View>
       <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:18}}>Description</Text>
       <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:13}}>Moov Spray is made using 100% ayurvedic ingredients, which penetrate deep inside to produce the warmth hence, it helps in relieving the pain and relaxing the muscles...
 </Text>
       </View>


       <View style={{marginTop:30}}>
       <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:18}}>Key Benefits</Text>
       <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:13}}>



Reduce irritation and swelling around the affected area
The mint leaves gives a cooling effect to the pain and treats the sore muscles 
and relieves joint aches
Turpentine Oil helps to relieve pain from underneath the tissue and relaxes 
the muscles
Eucalyptus Oil in the moove cream provides a soothing warmth and makes it an
excellent massage cream for joint pain
Cinnamon Oil helps dilate blood vessels and decrease inflammation




 </Text>
       </View>
<View style={{flexDirection:"row",marginLeft:12,marginTop:30,alignItems:"center"}}>
   <Image style={{width:42,height:42,}} source={require("../assets/Image/fav.png")}/>

<Ripple  rippleColor='white' rippleDuration={800}  style={{width:260,backgroundColor: Color.maroon600 ,alignItems:"center",justifyContent:"center",borderRadius:5,marginHorizontal:10,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4,marginLeft:30}}>
    <Text style={{ color: Color.white ,fontFamily:"Roboto-Medium", fontSize:19,padding:15}}>Add to Cart</Text>
 </Ripple>
</View>

<TouchableOpacity activeOpacity={0.6}  style={{marginTop:53}}>
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <Text style={{fontFamily:"Roboto-Medium",fontWeight:"600",color:"black",fontSize:19}}>Reviews</Text>
        <Image source={require("../assets/Image/left.png")}/>
        </View>
</TouchableOpacity>

<TouchableOpacity activeOpacity={0.6} style={{marginTop:23,marginBottom:50}}>
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <Text style={{fontFamily:"Roboto-Medium",fontWeight:"600",color:"black",fontSize:19}}>Instruction</Text>
        <Image source={require("../assets/Image/left.png")}/>
        </View>
</TouchableOpacity>

     </View>
     </ScrollView>
    </View>
  )
}