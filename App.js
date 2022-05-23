import { View, Text,SafeAreaView ,ActivityIndicator,StatusBar} from 'react-native'
import React from 'react'
import Navigator from "./utils/Navigation/index"
import {Store} from './redux/store'
import {Provider} from 'react-redux'
import Splash from './Screen/onboardingscreen'
import Signup from "./Screen/detailscreen"

export default function App() {


  return (
    <Provider store={Store}>
       
      <SafeAreaView style={{flex:1}}>
      <Signup/>
{/* <Navigator/>  */}
</SafeAreaView>
      </Provider>
  )
}