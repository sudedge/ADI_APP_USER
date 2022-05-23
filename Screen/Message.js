import { View, Text,Pressable,Image,FlatList,ScrollView,StyleSheet,TextInput,TouchableOpacity,Modal} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from '../utils/Dimension'
import { Color } from '../assets/Color'
import Ripple from 'react-native-material-ripple'
import { useSelector, useDispatch } from 'react-redux';
import {setmodalvisible} from '../redux/action';
export default function Message({navigation}) {
    const {modalvisible} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
  return (
    <View style={{width:windowWidth,height:windowHeight,flex:1,backgroundColor:'#FAF1F1',opacity:modalvisible? 0.3 : 1}}>
         <Modal  transparent visible={modalvisible}>
           <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
         <View style={{backgroundColor:Color.white,borderRadius:20,width:286,height:330,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.5,shadowRadius:2,borderWidth:0.6,borderColor:Color.maroon600,alignItems:"center",elevation:12}}>
            <View style={{marginTop:32,alignItems:"center"}}> 
             <Image  source={require("../assets/Image/aeroplane.png")}/>
             <Text style={{color:"black",fontFamily:"Roboto-Bold",fontSize:26,letterSpacing:2,marginTop:8}}>SUCCESS!</Text>
             <Text style={{color:"black",fontFamily:"Roboto-Bold",fontSize:15,marginTop:8,color:'#808080'}}>Your message has been sent</Text>
             </View>
             <Ripple onPress={()=>dispatch(setmodalvisible(false))} rippleColor={Color.white} rippleDuration={800}rippleOpacity={0.8} style={{marginTop:30,alignItems:"center",justifyContent:"center",backgroundColor:Color.maroon600,marginHorizontal:30,borderRadius:10,marginBottom:100,elevation:3,shadowOffset:{width:0,height:3},shadowColor:"black",shadowOpacity:0.6,shadowRadius:2,width:90}}>
       <Text style={{color:Color.white,fontFamily:"Roboto-Medium",fontSize:18,padding:12}}>OK</Text>
       </Ripple>
             </View>
         </View>
       </Modal>
      <View style={{flexDirection:"row",marginTop:10,paddingHorizontal:15,alignItems:"center"}}>
          <Pressable onPress={()=>navigation.goBack()} style={{width:19,height:19}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../assets/Image/leftarrow.png")}/>
          </Pressable>
     
      <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:20,marginHorizontal:windowWidth/3.4}}>Message</Text>
   
      </View>

      <View style={{marginTop:35,marginHorizontal:25}}>
             <View>
                 <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:16}}>Full Name</Text>
                 <TextInput style={{borderRadius:5,height:48,marginTop:10,backgroundColor:'#F7F7F7',elevation:5,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.6,shadowRadius:2,fontFamily:'Roboto-Medium',paddingHorizontal:20}} placeholderTextColor="#808080" placeholder='John Smith'/>
             </View>

             <View style={{marginTop:29}}>
                 <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:16}}>Title Of Concern</Text>
                 <TextInput style={{borderRadius:5,height:48,marginTop:10,backgroundColor:'#F7F7F7',elevation:5,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.6,shadowRadius:2,fontFamily:'Roboto-Medium',paddingHorizontal:20}} placeholderTextColor="#808080" placeholder='Cardiac'/>
             </View>

                          <View style={{marginTop:29}}>
                 <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:16}}>Drop Your Message</Text>
                 <TextInput multiline style={{borderRadius:5,minHeight:220,marginTop:12,backgroundColor:'#F7F7F7',elevation:5,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.6,shadowRadius:2,fontFamily:'Roboto-Medium',paddingHorizontal:10,textAlignVertical:"top",fontSize:15,paddingTop:12}} />
             </View>
             <View style={{height:82,elevation:5,shadowOffset:{width:0,height:3},shadowColor:Color.maroon600,shadowOpacity:0.5,shadowRadius:2,backgroundColor:'#F7F7F7',marginHorizontal:20,marginTop:20,justifyContent:"center"
    }}></View>
             <Ripple onPress={()=>dispatch(setmodalvisible(true))} rippleColor={Color.white} rippleDuration={800}rippleOpacity={0.8} style={{marginTop:30,alignItems:"center",justifyContent:"center",backgroundColor:Color.maroon600,marginHorizontal:2,borderRadius:10,marginBottom:100,elevation:3,shadowOffset:{width:0,height:3},shadowColor:"black",shadowOpacity:0.6,shadowRadius:2,}}>
       <Text style={{color:Color.white,fontFamily:"Roboto-Medium",fontSize:18,padding:15}}>SEND</Text>
       </Ripple>



          </View>
    </View>
  )
}