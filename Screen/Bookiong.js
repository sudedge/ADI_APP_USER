import { View, Text, Image,StyleSheet,Pressable,TextInput,ScrollView,FlatList,ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from "../utils/Dimension"
import { Color } from '../assets/Color'
import Ripple from 'react-native-material-ripple'

export default function Booking({navigation}) {
  return (
    <View style={{flex:1,width:windowWidth,height:windowHeight}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,alignItems:"center"}}>
          <Pressable onPress={()=>navigation.goBack()} style={{width:19,height:19,marginLeft:20}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../assets/Image/leftarrow.png")}/>
          </Pressable>
     
      <Text style={{marginRight:windowWidth/2.5,color:"black",fontFamily:"Roboto-Medium",fontSize:20}}>Bookings</Text>
      </View>
      <View style={{marginTop:30,paddingHorizontal:15}}>
          <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:18,}}>Book an appointment</Text>
          <Text style={{color:"grey",fontFamily:"Roboto-Medium",fontSize:13,}}>What are you looking for?</Text>
      </View>

      <View style={{backgroundColor:'white',marginTop:12,marginHorizontal:10,justifyContent:"center",borderRadius:40,height:50,elevation:10,shadowOffset:{width:0,height:3},shadowColor:Color.maroon600,shadowOpacity:0.6,shadowRadius:5}}>
      <View style={{flexDirection:"row",alignItems:"center",marginLeft:12}}>
          <View style={{width:22,height:22}}>
          <Image style={{width:"100%",height:"100%"}} source={require("../assets/Image/search.png")}/>
          </View>
               <TextInput style={{fontSize:15,paddingLeft:12,paddingRight:25,color:"black",fontFamily:"Roboto-Medium",flex:1}}  placeholder='Search your prefrence here'/>
    </View>
          </View>


<ScrollView bounces={false} scrollEventThrottle={16} showsVerticalScrollIndicator={false} style={{marginTop:32,marginHorizontal:windowWidth/40}}>
<TouchableOpacity onPress={()=>navigation.navigate('medicalprofscrn1')} activeOpacity={0.6}>
       <ImageBackground  source={require("../assets/Image/medicalcenter.png")} style={{height:100,backgroundColor:"white",borderRadius:40}}>
             <View style={{position:"absolute",bottom:18,left:30}}>
                <Text style={{color:"#FFF5F5",fontFamily:"Roboto-Medium",fontSize:15}}>Medical Center</Text>
                <Text style={{color:"#FFF5F5",fontFamily:"Roboto-Medium",fontSize:15}}>Seek Proffessionals Services</Text>
             </View>
         </ImageBackground>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('pharmacy')} activeOpacity={0.6}>
        <ImageBackground  source={require("../assets/Image/pharm.png")} style={{height:100,backgroundColor:"white",marginTop:42,borderRadius:40}}>
             <View style={{position:"absolute",bottom:18,left:30}}>
                  <Text style={{color:"#FFF5F5",fontFamily:"Roboto-Medium",fontSize:15}}>Pharmacy</Text>
                  <Text style={{color:"#FFF5F5",fontFamily:"Roboto-Medium",fontSize:15}}>A Moments of Caring Health</Text>
             </View>
         </ImageBackground>

</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('labtestprof')} activeOpacity={0.6}> 
        <ImageBackground  source={require("../assets/Image/labtest.png")} style={{height:100,backgroundColor:"white",marginTop:42,borderRadius:40}}>
             <View style={{position:"absolute",bottom:18,left:30}}>
                 <Text style={{color:"#FFF5F5",fontFamily:"Roboto-Medium",fontSize:15}}>Lab Testing</Text>
               <Text style={{color:"#FFF5F5",fontFamily:"Roboto-Medium",fontSize:15}}>Turning hypotheses into theories</Text>
            </View>
         </ImageBackground>

</TouchableOpacity>
   
   <TouchableOpacity onPress={()=>navigation.navigate('Ambulancebook')} activeOpacity={0.6}>
      <ImageBackground  source={require("../assets/Image/ambulance.png")} style={{height:100,backgroundColor:"white",marginTop:42,borderRadius:40}}>
           <View style={{position:"absolute",bottom:18,left:30}}>
                <Text style={{color:"#FFF5F5",fontFamily:"Roboto-Medium",fontSize:15}}>Ambulance</Text>
                <Text style={{color:"#FFF5F5",fontFamily:"Roboto-Medium",fontSize:15}}>We'll Help You Get
</Text>
            </View>
       </ImageBackground>

       </TouchableOpacity>
</ScrollView>

    </View>
  )
}