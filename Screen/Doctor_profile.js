import { View, Text,Pressable,Image,FlatList,ScrollView,StyleSheet,TextInput,TouchableOpacity,Modal} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from '../utils/Dimension'
import { Color } from '../assets/Color'
import Ripple from 'react-native-material-ripple'
import { useSelector, useDispatch } from 'react-redux';
import {setmodalvisible} from '../redux/action';
export default function Doctorprofile({navigation}) {
    const {modalvisible} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
  return (
    <View style={{width:windowWidth,height:windowHeight,flex:1}}>
        
      <View style={{flexDirection:"row",marginTop:10,paddingHorizontal:15,alignItems:"center"}}>
          <Pressable onPress={()=>navigation.goBack()} style={{width:19,height:19}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../assets/Image/leftarrow.png")}/>
          </Pressable>
     
      <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:20,marginHorizontal:windowWidth/3.4}}>Doctor Profile</Text>
   
      </View>

      <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={{marginHorizontal:25,}}>
          <View style={{alignItems:"center",justifyContent:"center"}}>
      <View style={{paddingHorizontal:8,height:150,width:120,backgroundColor:"white",marginHorizontal:10,shadowColor:Color.maroon600,shadowOffset:{width:0,height:2},shadowOpacity:0.6,shadowRadius:2,elevation:3,borderBottomLeftRadius:50,borderTopRightRadius:50,alignItems:"center",marginTop:50,marginBottom:5}}>
         <View style={{marginTop:42}}>
             <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:12}}>Dr.Hailey Fox</Text>
             <Text style={{color:"black",fontFamily:"Roboto-Regular",fontSize:10,color:"grey"}} >Cardiologist</Text>
             
         </View>
        

             <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:12,marginRight:6}}>
           

                 </View>
                
                
             
{/* <Image style={{width:100,height:120}} source={item.drimg}/> */}

<Image style={{width:80,height:60,borderRadius:50,position:"absolute",top:-25,right:12}}  source={require("../assets/Image/halley.png")}/>

             
          </View>
          </View>   
<View>
    <Text  style={{color:"black",fontFamily:"Roboto-Medium",marginTop:21,fontSize:17}}>About</Text>
<Text style={{width:280,color:"#808080",fontFamily:"Roboto-Medium",marginTop:15}}>

Dr Fox was born and raised in Queensland, 
and completed her medical degree at the 
University of Queensland. She is fully trained
in all aspects of cardiology and a founding 
member of Blitz & Hertz

</Text>
</View>

<View>
<Text  style={{color:"black",fontFamily:"Roboto-Medium",marginTop:21,fontSize:17}}>Qualification</Text>
<View style={{flexDirection:"row",alignItems:"center",marginTop:15}}>
    <View style={{height:10,width:10,backgroundColor:"black",borderRadius:5}}></View>
   <Text style={{marginLeft:12}}>Bachelor of Medicine, Bachelor of Surgery (MBBS). 1989</Text>
  
</View>

<View style={{flexDirection:"row",alignItems:"center",marginTop:20}}>
    <View style={{height:10,width:10,backgroundColor:"black",borderRadius:5}}></View>
   <Text style={{marginLeft:12}}>Fellow of the Royal Australian of Surgeon,1999</Text>
  
</View>

<View style={{flexDirection:"row",alignItems:"center",marginTop:20}}>
    <View style={{height:10,width:10,backgroundColor:"black",borderRadius:5}}></View>
   <Text style={{marginLeft:12}}>Advance Diploma in Business Management 2010</Text>
  
</View>


<View>
<Text  style={{color:"black",fontFamily:"Roboto-Medium",marginTop:32,fontSize:17}}>Services</Text>
<View style={{flexDirection:"row",alignItems:"center",marginTop:15}}>
    <View style={{height:10,width:10,backgroundColor:"black",borderRadius:5}}></View>
   <Text style={{marginLeft:12}}>Surgery for coronary heart disease</Text>
  
</View>

<View style={{flexDirection:"row",alignItems:"center",marginTop:20}}>
    <View style={{height:10,width:10,backgroundColor:"black",borderRadius:5}}></View>
   <Text style={{marginLeft:12}}>Combined cardiac procedures</Text>
  
</View>

<View style={{flexDirection:"row",alignItems:"center",marginTop:20}}>
    <View style={{height:10,width:10,backgroundColor:"black",borderRadius:5}}></View>
   <Text style={{marginLeft:12}}>Diagnosis and treatment of heart conditions</Text>
  
</View>
</View>
<TouchableOpacity onPress={()=>navigation.navigate("review")} style={{backgroundColor:Color.white,borderRadius:8,height:46,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.5,shadowRadius:2,borderColor:Color.maroon600,elevation:12,marginTop:32,justifyContent:"center",marginBottom:10}}>
    <View style={{flexDirection:"row",alignItems:"center"}}>
    <Text style={{margin:12,color:'black',fontFamily:"Roboto-Medium",fontSize:18}}>Reviews</Text>
    <Image style={{position:"absolute",right:15}} source={require("../assets/Image/left.png")}/>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("review")} style={{backgroundColor:Color.white,borderRadius:8,height:46,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.5,shadowRadius:2,borderColor:Color.maroon600,elevation:12,marginTop:22,justifyContent:"center",}}>
    <View style={{flexDirection:"row",alignItems:"center"}}>
    <Text style={{margin:12,color:'black',fontFamily:"Roboto-Medium",fontSize:18}}>Fees</Text>
    <Image style={{position:"absolute",right:15}} source={require("../assets/Image/left.png")}/>
    </View>
    </TouchableOpacity>

  
</View>

<View style={{marginTop:20}}>
        <View style={{flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
            <TouchableOpacity activeOpacity={0.6}>
           <Image  source={require("../assets/Image/message.png")}/> 
           </TouchableOpacity>
           <Ripple onPress={()=>navigation.navigate('timeslot')} rippleColor={Color.white} rippleDuration={800}rippleOpacity={0.8} style={{alignItems:"center",justifyContent:"center",backgroundColor:Color.maroon600,borderRadius:3,elevation:3,shadowOffset:{width:0,height:3},shadowColor:"black",shadowOpacity:0.6,shadowRadius:2,height:38,width:150,marginLeft:12}}>
       <Text style={{color:Color.white,fontFamily:"Roboto-Medium",fontSize:15,}}>Book Appointment</Text>
       </Ripple> 
            </View>
    </View>
          </ScrollView>
    </View>
  )
}