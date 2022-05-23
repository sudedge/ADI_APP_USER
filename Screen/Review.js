import { View, Text,Pressable,Image,FlatList ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Color } from '../assets/Color'
import { windowHeight,windowWidth} from '../utils/Dimension'

export default function Review({navigation}) {

    const Data=[
        {id:'1',
         detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do   eiusmod tempor incididunt ut labore et dolore magnaaliqua.",
         btntitle:"See more",
         name:"Zack Kesarwani"
    },
    {id:'2',
    detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do   eiusmod tempor incididunt ut labore et dolore magnaaliqua.",
    btntitle:"See more",
    name:"Zack Kesarwani"
},
{id:'3',
detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do   eiusmod tempor incididunt ut labore et dolore magnaaliqua.",
btntitle:"See more",
name:"Zack Kesarwani"
},
{id:'4',
detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do   eiusmod tempor incididunt ut labore et dolore magnaaliqua.",
btntitle:"See more",
name:"Zack Kesarwani"
},
    ]
  return (
    <View style={{width:windowWidth,height:windowHeight,flex:1}}>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,alignItems:"center",paddingHorizontal:4}}>
          <Pressable onPress={()=>navigation.goBack()} style={{width:19,height:19,marginLeft:20}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../assets/Image/leftarrow.png")}/>
          </Pressable>
     
      <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:20}}>Reviews</Text>
      <Pressable style={{width:19,height:19,marginLeft:20}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../assets/Image/dots.png")}/>
          </Pressable>
      </View>

    
<FlatList numColumns={2} showsVerticalScrollIndicator={false}  bounces={false} pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{marginTop:20,}}  keyExtractor={(item)=>item.id} data={Data} renderItem={({item})=>{
    return(
      <View style={{paddingHorizontal:8,height:276,width:166,backgroundColor:"white",marginHorizontal:10,shadowColor:'grey',shadowOffset:{width:0,height:5},shadowOpacity:0.8,shadowRadius:2,elevation:2,alignItems:"center",marginBottom:5,alignItems:"center",marginTop:12}}>
          <Image source={require("../assets/Image/profile.png")}/>
        <Text style={{color:"black",fontFamily:"Roboto-Medium",marginTop:12}}>{item.name}</Text>
        <Text style={{marginTop:20}}>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed doeiusmod tempor incididuntut labore et dolore magnaaliqua. </Text>
        <TouchableOpacity style={{marginTop:23}}>
            <Text style={{color:"#A51010",fontFamily:"Roboto-Medium",fontSize:15}}>See more</Text>
        </TouchableOpacity>
          </View>
        
    )
    
}}/>

      </View>
  )
}