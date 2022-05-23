 import { View, Text,SafeAreaView,ImageBackground,Image } from 'react-native'
 import React,{useState} from 'react'
 import {windowHeight,windowWidth} from "../utils/Dimension"
 import {Color} from "../assets/Color"
 import * as Animatable from 'react-native-animatable';
 export default function Splashscreen({navigation}) {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 1000);


  if (!timePassed) {
    return (
        <Animatable.View duration={800}  animation="fadeInUpBig" style={{alignItems:"center",justifyContent:"center",backgroundColor:Color.white,height:windowHeight,width:windowWidth,flex:1}}>
                   <Image style={{width:320,height:350}} source={require("../assets/Image/Adilogo.png")}/>
            
           </Animatable.View>
    );
  }
  navigation.navigate('OnboardingScreen');
  return null;
};

  






// import React, { useState } from "react";
// import { View, Text, StyleSheet,Image } from "react-native";
// import {Color} from "../assets/Color"
// import {windowHeight,windowWidth} from "../utils/Dimension"
// const SplashScreen = ({ navigation }) => {
//   const [timePassed, setTimePassed] = useState(false);

//   setTimeout(function () {
//     setTimePassed(true);
//   }, 1000);

//   if (!timePassed) {
//     return (
//         <View style={{alignItems:"center",justifyContent:"center",backgroundColor:Color.white,height:windowHeight,width:windowWidth,flex:1}}>
//                    <Image style={{width:320,height:350}} source={require("../assets/Image/Adilogo.png")}/>
            
//            </View>
//     );
//   }
//   navigation.navigate('OnboardingScreen');
//   return null;
// };

// const styles = StyleSheet.create({
//   splash: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     height: 100
//   },
//   text: {
//     fontSize: 20
//   }
// });

// export default SplashScreen;