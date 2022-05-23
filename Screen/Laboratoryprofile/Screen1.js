import { View, Text,Pressable,Image,FlatList,ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from '../../utils/Dimension'
import { Color } from '../../assets/Color'
import Ripple from 'react-native-material-ripple'
export default function Screen1({navigation}) {
  return (
    <View style={{width:windowWidth,height:windowHeight}}>
       
    <View style={{flexDirection:"row",marginTop:10,paddingHorizontal:15}}>
          <Pressable onPress={()=>navigation.goBack()} style={{width:19,height:19}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../../assets/Image/leftarrow.png")}/>
          </Pressable>
     
      <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:20,marginHorizontal:windowWidth/4}}>Laboratory Profile</Text>
   
      </View>
      <ScrollView  bounces={false} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
      <View style={{height:82,elevation:5,shadowOffset:{width:0,height:3},shadowColor:Color.maroon600,shadowOpacity:0.5,shadowRadius:2,backgroundColor:Color.white,marginHorizontal:20,marginTop:20,justifyContent:"center"
    }}>
          <View style={{flexDirection:"row",paddingHorizontal:20,alignItems:"center"}}>
             <Image source={require("../../assets/Image/sunway.png")}/>
             <View style={{marginLeft:20,marginTop:-12}}>
                 <Text style={{color:"black",fontSize:18,fontFamily:"Roboto-Medium"}}>Metropolis</Text>
                 <View style={{flexDirection:"row",marginVertical:5}}>
                     <Image source={require("../../assets/Image/onstar.png")}/>
                     <Image source={require("../../assets/Image/onstar.png")}/>
                     <Image source={require("../../assets/Image/onstar.png")}/>
                     <Image source={require("../../assets/Image/onstar.png")}/>
                     <Image source={require("../../assets/Image/offstar.png")}/>
                 </View>
                 <Text style={{fontSize:10,color:"#808080",fontFamily:"Roboto-Medium"}}>Last Seen 20 mins ago</Text>
             </View>
          </View>
          </View>
          <View style={{marginTop:40,marginHorizontal:50}}>
             <View style={{marginLeft:22}}>
             <Text style={{...styles.heading,}}>SPECIALITIES</Text>
             <Text style={{...styles.detailtxt}}>
Covid-19 Center, Anesthesiology,
Dermatology,Family medicine, Internal
medicine, Diagnostic radiology
</Text>
</View> 
<View style={{flexDirection:"row",alignItems:"center",marginLeft:-32}}>
    <Image source={require("../../assets/Image/loc.png")}/>
    <View style={{marginTop:28,marginLeft:22}}>
<Text style={{...styles.heading,}}>ADDRESS</Text>
<Text style={{...styles.detailtxt,width:300}}>
    5, Jalan Lagoon Selatan Bandar Sunway, 47500 Petailing Jaya, Selangor.
    </Text>
</View>
</View>


       <View style={{flexDirection:"row",alignItems:"center",marginLeft:-32}}>
    <Image source={require("../../assets/Image/usbicon.png")}/>
    <View style={{marginTop:28,marginLeft:22}}>
<Text style={{...styles.heading,}}>Established</Text>
<Text style={{...styles.detailtxt,width:300}}>
 1999
    </Text>
</View>
</View>  


<View style={{flexDirection:"row",alignItems:"center",marginLeft:-32}}>
    <Image source={require("../../assets/Image/city.png")}/>
    <View style={{marginTop:28,marginLeft:22}}>
<Text style={{...styles.heading,}}>CITY</Text>
<Text style={{...styles.detailtxt,width:300}}>
NOIDA
    </Text>
</View>
</View>   


<View style={{flexDirection:"row",alignItems:"center",marginLeft:-32}}>
    <Image source={require("../../assets/Image/language.png")}/>
    <View style={{marginTop:28,marginLeft:22}}>
<Text style={{...styles.heading,}}>LANGUAGE</Text>
<Text style={{...styles.detailtxt,width:300}}>
Hindi,English,Punjabi
    </Text>
</View>
</View> 



<View style={{flexDirection:"row",alignItems:"center",marginLeft:-32}}>
    <Image source={require("../../assets/Image/about.png")}/>
    <View style={{marginTop:28,marginLeft:22}}>
<Text style={{...styles.heading,}}>About</Text>
<Text style={{...styles.detailtxt,width:300}}>
Established in November 1999 Sunway Medical Center is an Australian Council on Healthcare Standard(ACHS accredited private hospital located in Malaysia first)
    </Text>
</View>
</View> 
          </View>

   <Ripple rippleColor={Color.white} rippleDuration={800}rippleOpacity={0.8} style={{marginTop:30,alignItems:"center",justifyContent:"center",backgroundColor:Color.maroon600,marginHorizontal:30,borderRadius:10,marginBottom:100,elevation:3,shadowOffset:{width:0,height:3},shadowColor:"black",shadowOpacity:0.6,shadowRadius:2}}>
       <Text style={{color:Color.white,fontFamily:"Roboto-Medium",fontSize:18,padding:20}}>PROCEED</Text>
       </Ripple>       
      </ScrollView>
    </View>
   
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:18,
        fontFamily:"Roboto-Medium",
    },
    detailtxt:{
        fontSize:15,color:"black",marginTop:5,fontFamily:'Roboto-Regular'
    }
})