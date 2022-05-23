import { View, Text,Pressable,Image,FlatList,ScrollView } from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from '../utils/Dimension'
import { Color } from '../assets/Color'
export default function Consultation() {
    const Data2 = [
        {id:"1",
        drname:"Dr.Halley Fox",
        Speciality:"Cardiologist",
        drimg:require("../assets/Image/halley.png"),
        time:"2Minsago",
        icon:require("../assets/Image/call.png")
    },
    {id:"2",
    drname:"Dr.Smith",
    Speciality:"Endocrinologist",
    drimg:require("../assets/Image/smith.png"),
    time:"2Minsago",
    icon:require("../assets/Image/call.png")
},
{id:"3",
drname:"Dr.Martin",
Speciality:"Pediatric",
drimg:require("../assets/Image/martin.png"),
time:"2Minsago",
icon:require("../assets/Image/call.png")
},
{id:"4",
drname:"Dr.Halley Fox",
Speciality:"Cardiologist",
drimg:require("../assets/Image/halley.png"),
time:"2Minsago",
icon:require("../assets/Image/call.png")
},
{id:"5",
drname:"Dr.Halley Fox",
Speciality:"Cardiologist",
drimg:require("../assets/Image/halley.png"),
time:"2Minsago",
icon:require("../assets/Image/call.png")
},
    ]
    const Data=[
        {
          id:"1",
          icon:require("../assets/Image/caticon2.png")  ,
          title:"Categories"
        },
        {
            id:"2",
            icon:require("../assets/Image/heart.png")  ,
            title:"Cardiologist"
          },
          {
            id:"3",
            icon:require("../assets/Image/dentist.png")  ,
            title:"Dentist"
          },
          {
            id:"4",
            icon:require("../assets/Image/Psycho.png")  ,
            title:"Psychologist"
          },
        
    ]
    const Datalist =()=>{
        return(
            <ScrollView showsHorizontalScrollIndicator={false} style={{marginHorizontal:12,marginTop:22}}  horizontal>
                { Data.map((item,index)=>(
                
                    <View key={index} style={{}}>
                    <View style={{width:56,height:56,backgroundColor:Color.maroon600,alignItems:'center',justifyContent:"center",borderRadius:4,marginHorizontal:15,}}>
                      <Image  style={{width:'80%',height:"80%"}} source={item.icon}/>
                    </View>
                    <Text style={{fontSize:11,marginTop:5,color:"black",fontFamily:"Roboto-Medium",textAlign:"center"}}>{item.title}</Text>
                    </View>
                ))}
            </ScrollView>
        )
    }
  return (
    <View style={{width:windowWidth,height:windowHeight}}>
       <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between",paddingHorizontal:15}}>
          <Pressable style={{width:19,height:19}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../assets/Image/leftarrow.png")}/>
          </Pressable>
     
      <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:20}}>Consultation</Text>
      <Pressable style={{width:25,height:25}}>
      <Image style={{width:"100%",height:"100%"}} resizeMode="center" source={require("../assets/Image/search.png")}/>
      </Pressable>
      </View>
      
      <Datalist/>
      <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:18,marginTop:20}}>
        <View>
          <Text style={{color:'black',fontFamily:"Roboto-Medium",fontSize:13}}>Top Doctor</Text>
        </View>
      <Pressable style={{}}>
    <Text style={{color:Color.maroon600,fontFamily:"Roboto-Medium",fontSize:13}}>See more</Text>
</Pressable>
</View>
<FlatList style={{marginBottom:20,marginTop:22}} showsVerticalScrollIndicator={false}  bounces={false}   contentContainerStyle={{}}  keyExtractor={(item)=>item.id} data={Data2} renderItem={({item})=>{
    return(
       <View style={{marginHorizontal:windowWidth/40}}>
           <View style={{flexDirection:"row",marginHorizontal:2}}>
             <View style={{paddingHorizontal:8,height:160,width:'32%',backgroundColor:"white",shadowColor:Color.maroon800,shadowOffset:{width:0,height:5},shadowOpacity:0.8,shadowRadius:2,elevation:8,borderBottomLeftRadius:50,borderTopRightRadius:50,alignItems:"center",marginVertical:12,justifyContent:"center"}}>
        {/* <View style={{width:90,height:90,backgroundColor:Color.white,marginTop:30,borderRadius:35,shadowColor:"black",shadowOffset:{width:0,height:3},shadowOpacity:0.5,shadowRadius:2,elevation:3,}}>
      <Image style={{width:'100%',height:"100%"}}resizeMode="repeat" source={item.productimg}/>
        </View>
        


            
                 <View style={{backgroundColor:Color.maroon50,width:40,alignItems:"center",justifyContent:"center",padding:2,borderRadius:3,position:"absolute",right:12,bottom:40,}}>
                    <Text style={{fontFamily:"Roboto-Medium",fontSize:12,color:"black"}}>4.7</Text>
                
                 </View>
                <View style={{position:"absolute",bottom:12,right:13}}>
                <Text style={{color:"black",fontFamily:"Roboto-Bold",fontSize:12}}>hvdhehdvehdv</Text>
                <Text style={{fontSize:10,color:"grey",fontFamily:"Roboto-Bold"}}>eihdiuehduhe3d</Text>
                </View> */}
            <View style={{width:100,height:90,}}>
                <Image style={{width:"100%",height:"100%"}} resizeMode="contain" source={item.drimg}/>
                </View>    
             
</View> 
<View style={{borderWidth:1,marginTop:70,width:"60%",height:100,marginLeft:"5%",paddingHorizontal:12,borderColor:"red",elevation:2}}>
  
 <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:15}}> 
    <View>
        <Text style={{fontSize:19,fontFamily:"Roboto-Medium",color:"black"}}>{item.drname}</Text>
        <Text style={{fontSize:13,fontFamily:"Roboto-Medium",color:"#808080"}}>{item.Speciality}</Text>
    </View>
    <Image source={item.icon}/>
   
</View>
<Text style={{position:"absolute",bottom:12,right:12,fontSize:13,fontFamily:"Roboto-Medium",color:'grey'}}>20min ago</Text>
    </View>
       </View>
       </View>
       
    )
    
}}/>
    </View>
  )
}