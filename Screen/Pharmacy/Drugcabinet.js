import { View, Text ,Pressable,Image,TouchableOpacity,TextInput,StyleSheet,FlatList} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from '../../utils/Dimension'
import { Color } from '../../assets/Color'
import Ripple from 'react-native-material-ripple'
export default function Drugcabinet({navigation}) {
    const Doctor = [
        {
          id:"1",
        
          productname:"Moov Gel",
          weight:"500gm",
          Rating:4.6,
          productimg:require("../../assets/Image/moov.png")
        },
        {
            id:"2",
           
            productname:"Asprine",
            weight:"500mg",
            Rating:4.6,
            productimg:require("../../assets/Image/moov.png")
          },
          {
            id:"3",
            productname:"Vicksrub",
            weight:"50gm",
            Rating:4.6,
            productimg:require("../../assets/Image/moov.png")
          },
          {
            id:"4",
           
            productname:"Asprine",
            weight:"500mg",
            Rating:4.6,
            productimg:require("../../assets/Image/moov.png")
          },
          {
            id:"5",
           
            productname:"Asprine",
            weight:"500mg",
            Rating:4.6,
            productimg:require("../../assets/Image/moov.png")
          },
          {
            id:"6",
           
            productname:"Asprine",
            weight:"500mg",
            Rating:4.6,
            productimg:require("../../assets/Image/moov.png")
          },
    ]
    
    
  return (
    <View style={{width:windowWidth,height:windowHeight}}>
        <View>
   <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,alignItems:"center"}}>
          <Pressable onPress={()=>navigation.goBack()} style={{width:19,height:19,marginLeft:20}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../../assets/Image/leftarrow.png")}/>
          </Pressable>
     
      <Text style={{marginRight:windowWidth/3.8,color:"black",fontFamily:"Roboto-Medium",fontSize:20}}>Your Drug Cabinet</Text>
      </View>

<View style={{marginTop:40,marginHorizontal:windowWidth/40}}>
    <View style={{flexDirection:"row"}}>
           <View style={{elevation:2,width:"80%",height:50,justifyContent:"center",paddingHorizontal:20,backgroundColor:Color.white,borderTopLeftRadius:8,borderBottomLeftRadius:8,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.8,shadowRadius:2}}>
               <TextInput style={{color:"black"}}  placeholder='Search doctors,drugs,articles..... '/>
               </View>
               <Pressable style={{width:'15%',height:51,backgroundColor:Color.maroon600,borderTopRightRadius:8,borderBottomRightRadius:8,alignItems:"center",justifyContent:"center",shadowOffset:{width:0,height:3},shadowOpacity:0.5,shadowRadius:2}}>
                   <Image source={require("../../assets/Image/categoryicon.png")}/>
                   </Pressable>
    </View>

<Pressable style={{elevation:12,height:50,justifyContent:"center",paddingHorizontal:20,backgroundColor:Color.white,borderRadius:8,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},shadowOpacity:0.8,shadowRadius:2,marginTop:20,width:"95%"}}>
    <Text style={{fontFamily:"Roboto-Medium",fontSize:15}}>Available Doctor</Text>
    </Pressable>
<Pressable style={{}}>
    <Text style={{color:Color.maroon600,fontFamily:"Roboto-Medium",right:18,position:"absolute",top:15}}>See more</Text>
</Pressable>


<FlatList style={{marginTop:40,marginBottom:140}} showsVerticalScrollIndicator={false}  bounces={false}   contentContainerStyle={{}}  keyExtractor={(item)=>item.id} data={Doctor} renderItem={({item})=>{
    return(
        <View style={{flexDirection:"row",}}>
      <View style={{paddingHorizontal:8,height:190,width:120,backgroundColor:"white",marginHorizontal:10,shadowColor:Color.maroon800,shadowOffset:{width:0,height:5},shadowOpacity:0.8,shadowRadius:2,elevation:8,borderBottomLeftRadius:50,borderTopRightRadius:50,alignItems:"center",marginVertical:12,}}>
        <View style={{width:90,height:90,backgroundColor:Color.white,marginTop:30,borderRadius:35,shadowColor:"black",shadowOffset:{width:0,height:3},shadowOpacity:0.5,shadowRadius:2,elevation:3,}}>
      <Image style={{width:'100%',height:"100%"}}resizeMode="repeat" source={item.productimg}/>
        </View>
        


            
                 <View style={{backgroundColor:Color.maroon50,width:40,alignItems:"center",justifyContent:"center",padding:2,borderRadius:3,position:"absolute",right:12,bottom:40,}}>
                    <Text style={{fontFamily:"Roboto-Medium",fontSize:12,color:"black"}}>4.7</Text>
                
                 </View>
                <View style={{position:"absolute",bottom:12,right:13}}>
                <Text style={{color:"black",fontFamily:"Roboto-Bold",fontSize:12}}>{item.productname}</Text>
                <Text style={{fontSize:10,color:"grey",fontFamily:"Roboto-Bold"}}>{item.weight}</Text>
                </View>
                
             
</View>
<Ripple rippleColor={Color.white} rippleDuration={800} rippleOpacity={0.6} style={{backgroundColor:Color.maroon600,width:110,marginVertical:12,height:38,alignItems:"center",justifyContent:"center",position:"absolute",right:12,bottom:50,borderRadius:10}}>
    <Text style={{color:Color.white,fontFamily:"Roboto-Medium",fontSize:15}}>Buy Now</Text>
</Ripple>
</View>
    )
    
}}/>

    </View>

    </View>
    </View>
  )
}