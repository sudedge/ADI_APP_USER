import { View, Text, Image,StyleSheet,Pressable,TextInput,ScrollView,FlatList,ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from "../../utils/Dimension"
import { Color } from '../../assets/Color'
import Ripple from 'react-native-material-ripple'

export default function Article({navigation}) {

const AmbulanceData = [
    {
        id:"1",
        ambulancesno:"AMBULANCE 1",
        Total_Ambulance:"21 Ambulances",
        btntitle:"Book Now",
        img:require("../../assets/Image/ambulance1.png"),
        navigate:"ambulancescrn1"
    },
    {
        id:"2",
        ambulancesno:"AMBULANCE 2",
        Total_Ambulance:"21 Ambulances",
        btntitle:"Book Now",
        img:require("../../assets/Image/ambulance1.png"),
        navigate:"ambulancescrn1"
    },
    {
        id:"3",
        ambulancesno:"AMBULANCE 3",
        Total_Ambulance:"21 Ambulances",
        btntitle:"Book Now",
        img:require("../../assets/Image/ambulance1.png"),
        navigate:"ambulancescrn1"
    },
]

const Ambulancelist =()=>{
    return(
        <View> 
            {AmbulanceData.map((item,index)=>(
                 <View key={index}>
                    <TouchableOpacity onPress={()=>navigation.navigate('ambulancescrn1')} activeOpacity={0.6} style={{justifyContent:"center",height:60,backgroundColor:Color.white,marginVertical:20,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.5,shadowRadius:5,elevation:2}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20}}> 
                        <Image source={item.img}/>
                        <View style={{position:"absolute",left:70}}>
                            <Text style={{color:"black",fontFamily:"Roboto-Bold",fontSize:14}}>{item.ambulancesno}</Text>
                            <Text style={{color:"grey",fontFamily:"Roboto-Bold",fontSize:13}}>{item.Total_Ambulance}</Text>
                        </View>
                        <Text style={{color:Color.maroon600,fontFamily:"Roboto-Bold",alignSelf:"center"}}>{item.btntitle}</Text>
                    </View>
                    </TouchableOpacity>
                 </View>
            ))}
        </View>
    )
}
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
  
<View style={{marginTop:12}}>
    <Text style={{textAlign:"center",fontSize:25,color:"black",fontFamily:"Roboto-Medium"}}>Getting you out </Text>
    <Text style={{textAlign:"left",fontSize:25,color:"black",fontFamily:"Roboto-Medium"}}>of Hurdle is Our </Text>
    <Text style={{textAlign:'right',fontSize:25,color:Color.maroon400,fontFamily:"Roboto-Medium",marginRight:20}}>responsibility </Text>
</View>

<Ambulancelist/>



</ScrollView>


    </View>
  )
}



const styles = StyleSheet.create({
    heading:{

    }
})