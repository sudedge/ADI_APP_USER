import { View, Text, ImageBackground, StatusBar,SafeAreaView,Image} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from "../utils/Dimension/index"
import { LinearTextGradient } from "react-native-text-gradient";
import { Color } from '../assets/Color';
import Globalstyle from '../utils/Globalstyle';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
export default function Splash2({navigation}) {
  return (
    
        
        <ImageBackground  style={{height:windowHeight,width:windowWidth,alignItems:"center"}} source={require("../assets/Image/splashimg1.png")}>
            <StatusBar hidden barStyle="light-content" translucent backgroundColor="transparent"/>

<View style={{width:windowWidth,position:"absolute",bottom:150,alignItems:"center"}}>
   <Text style={[Globalstyle.title]}>Sign-Up</Text>

 <View>
    <Image style={{position:"absolute",right:10}} source={require("../assets/Image/patient.png")}/>
        <Ripple onPress={()=>navigation.navigate('patientsignup')} rippleOpacity={1} rippleDuration={600} rippleColor={Color.white} style={[Globalstyle.btncontainer]}>
        <Text style={[Globalstyle.ButtonText]}>Patient</Text>
    </Ripple>

 </View>


    <View style={{marginTop:30}}>
         <Image style={{position:"absolute",right:10}} source={require("../assets/Image/lab.png")}/>
         <Ripple onPress={()=>navigation.navigate('labtechsignup')} rippleOpacity={1} rippleDuration={600} rippleColor={Color.white} style={[Globalstyle.btncontainer]}>
           <Text style={[Globalstyle.ButtonText]}>Lab technician</Text>
         </Ripple>
    </View>


    <View style={{marginTop:30}}>
         <Image style={{position:"absolute",right:10}} source={require("../assets/Image/doctor.png")}/>
         <Ripple onPress={()=>navigation.navigate('doctorsignup')} rippleOpacity={1} rippleDuration={600} rippleColor={Color.white} style={[Globalstyle.btncontainer]}>
           <Text style={[Globalstyle.ButtonText]}>Doctor</Text>
         </Ripple>
    </View>
    
</View>
  </ImageBackground>

  )
}