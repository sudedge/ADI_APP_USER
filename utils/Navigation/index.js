import { View, Text ,StatusBar} from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../../Screen/onboardingscreen';
import SplashScreen from '../../Screen/Splashscreen';
import Splashscrn2 from "../../Screen/Splash2"
import Splashscrn3 from "../../Screen/Splash3"
import Login from "../../Screen/login"
import Doctorsignup from '../../Screen/Signup/doctor'
import Patientsignup from '../../Screen/Signup/user'
import Labtechsignup from '../../Screen/Signup/labtech'

import Doctorlogin from '../../Screen/doctorlogin'
import Patientlogin from '../../Screen/login'
import Labtechlogin from '../../Screen/labtechlogin'

import Dashboard from '../../Screen/Dashboard'

import Booking from '../../Screen/Bookiong'
import Pharmacy from '../../Screen/Screen1'
import Message from '../../Screen/Message'
import Article from '../../Screen/article'
import Bye from '../../Screen/Bookiong'

import Medicalprofscrn1 from "../../Screen/Medicalcenterprofile/Screen1"
import Medicalprofscrn2 from "../../Screen/Medicalcenterprofile/Screen2"
import Labtestprof from "../../Screen/Laboratoryprofile/Screen1"
import Ambulance from '../../Screen/Ambulance/Ambulance_screen2'
import Ambulancescrn1 from '../../Screen/Ambulance/Ambulance'
import Doctorprof from "../../Screen/Doctor_profile"
import Review from "../../Screen/Review"
import Timeslot from "../../Screen/timeslot"
import Drugcabinet from '../../Screen/Pharmacy/Drugcabinet'
import Productdetail from "../../Screen/productdetail"
export default function Index() {

  const Stack = createStackNavigator();
  return (

   <NavigationContainer>
   
       <Stack.Navigator initialRouteName='Home'  screenOptions={{ headerShown: false}} >
      
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen } />
    <Stack.Screen name='Home' component={SplashScreen}/>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name="splash2" component={Splashscrn2}/>
    <Stack.Screen name='splash3' component={Splashscrn3 }/>
    <Stack.Screen name="doctorsignup" component={Doctorsignup}/>
    <Stack.Screen name="labtechsignup" component={Labtechsignup}/>
    <Stack.Screen name="patientsignup" component={Patientsignup}/>

    <Stack.Screen name="doctorlogin" component={Doctorlogin}/>
    <Stack.Screen name="labtechlogin" component={Labtechlogin}/>
    <Stack.Screen name="patientlogin" component={Patientlogin}/>


    <Stack.Screen name="Dashboar" component={Dashboard}/>

    <Stack.Screen name="booking" component={Booking}/> 
    <Stack.Screen name="pharmacy" component={Pharmacy}/>
     <Stack.Screen name="Message" component={Message}/> 
     <Stack.Screen name="article" component={Article}/> 
     <Stack.Screen name="bye" component={Bye}/>

<Stack.Screen name="medicalprofscrn1" component={Medicalprofscrn1}/>
<Stack.Screen name="labtestprof" component={Labtestprof}/>
<Stack.Screen name="Ambulancebook" component={Ambulance}/>

<Stack.Screen name="doctorprof" component={Doctorprof}/>
<Stack.Screen name="review" component={Review}/>
<Stack.Screen name="timeslot" component={Timeslot }/>
<Stack.Screen name="medicalprofscrn2" component={Medicalprofscrn2}/>
<Stack.Screen name="ambulancescrn1" component={Ambulancescrn1}/>
<Stack.Screen name='drugcabinet' component={Drugcabinet}/>
<Stack.Screen name="productdetail"component={Productdetail}/>
     </Stack.Navigator>
   </NavigationContainer>

  )
}