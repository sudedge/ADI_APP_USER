import { View, Text, Image,StyleSheet,Pressable,TextInput,ScrollView,FlatList,ImageBackground,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import {windowHeight,windowWidth } from '../../utils/Dimension'
import { Color } from '../../assets/Color'
import Ripple from 'react-native-material-ripple'
import CheckBox from '@react-native-community/checkbox';
export default function Booking() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={{flex:1,width:windowWidth,height:windowHeight,}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,alignItems:"center"}}>
          <Pressable style={{width:19,height:19,marginLeft:20}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../../assets/Image/leftarrow.png")}/>
          </Pressable>
     
      <Text style={{marginRight:windowWidth/2.5,color:"black",fontFamily:"Roboto-Medium",fontSize:20}}>Credit Card</Text>
      </View>


      <View style={{marginTop:30,paddingHorizontal:15,}}>
          <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:18,}}>Add Card Details</Text>

      </View>

  
  


<ScrollView bounces={false} scrollEventThrottle={16} showsVerticalScrollIndicator={false} style={{marginTop:32,marginHorizontal:windowWidth/40}}>

<View style={{}}>
    <Text style={{color:"black",fontFamily:"Roboto-Medium"}}>Card Name</Text>
    <TextInput style={{borderWidth:0.5,borderColor:Color.maroon600,backgroundColor:"white",marginTop:5,borderRadius:12,height:52,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.8,shadowRadius:2,elevation:2,paddingLeft:20}}/>
</View>
   
<View style={{marginTop:20}}>
    <Text style={{color:"black",fontFamily:"Roboto-Medium"}}>Card Number</Text>
    <TextInput style={{borderWidth:0.5,borderColor:Color.maroon600,backgroundColor:"white",marginTop:5,borderRadius:12,height:52,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.8,shadowRadius:2,elevation:2,paddingLeft:20}}/>
</View>
   

<View style={{flexDirection:"row",justifyContent:"space-between",paddingRight:20,marginTop:20}}>
<View style={{}}>
    <Text style={{color:"black",fontFamily:"Roboto-Medium"}}>Expiry Date</Text>
    <TextInput placeholder='MM/DD/YYY' style={{borderWidth:0.5,borderColor:Color.maroon600,backgroundColor:"white",marginTop:5,borderRadius:12,height:38,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.8,shadowRadius:2,elevation:2,width:windowWidth/2.8,textAlign:"center"}}/>
</View>

<View style={{}}>
    <Text style={{color:"black",fontFamily:"Roboto-Medium"}}>CVV</Text>
    <TextInput keyboardType="number-pad" placeholder='CVV' style={{borderWidth:0.5,borderColor:Color.maroon600,backgroundColor:"white",marginTop:5,borderRadius:12,height:38,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.8,shadowRadius:2,elevation:2,width:windowWidth/2.8,textAlign:"center"}}/>
</View>
      </View>


      <View style={{flexDirection:"row",alignItems:"center",marginTop:30}}>
      <CheckBox tintColors={{ true: Color.maroon600, false: 'black' }} boxType='square' onTintColor='white' onCheckColor={Color.white}  onFillColor={Color.maroon600}
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text style={{color:"black",fontFamily:"Roboto-Medium",marginLeft:4}}>Save your data securely</Text>
          </View>
</ScrollView>

    </View>
  )
}