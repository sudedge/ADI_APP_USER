import { View, Text,Pressable,Image,FlatList ,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import { Color } from '../assets/Color'
import { windowHeight,windowWidth} from '../utils/Dimension'
import Ripple from 'react-native-material-ripple'
export default function Timeslot({navigation}) {
    const [select,setselect] =React.useState()
    const [choose,setchoose] =React.useState()
    const Time=[
        {id:'1',time:'9:00 AM'},  {id:'2',time:'10:00 AM'},  {id:'3',time:'11:00 AM'},  {id:'4',time:'12:00 AM'},  {id:'5',time:'1:00 PM'},  {id:'6',time:'2:00 AM'},  {id:'7',time:'3:00 AM'},  {id:'8',time:'4:00 AM'},  {id:'9',time:'5:00 AM'},  {id:'10',time:'6:00 PM'},  {id:'11',time:'7:00 PM'},  {id:'12',time:'8:00 PM'},
    ]

    const Calendar =[
        {
            id:'1',
            day:'Sun',
            date:1
        },
        {
            id:'2',
            day:'Mon',
            date:2
        },
        {
            id:'3',
            day:'Tue',
            date:3
        },
        {
            id:'4',
            day:'Wed',
            date:4
        },
        {
            id:'5',
            day:'Thu',
            date:5
        },
        {
            id:'6',
            day:'Fri',
            date:6
        },
        {
            id:'7',
            day:'Sat',
            date:7
        }
    ]
    const Calendarlist =()=>{
        return(
            <ScrollView bounces={false} style={{marginTop:22,paddingHorizontal:12}} showsHorizontalScrollIndicator={false} horizontal>
                { Calendar.map((item,index)=>(
                
                    <View key={index} style={{}}>
                <TouchableOpacity onPress={()=>setselect(item.id)} style={{width:60,height:90,backgroundColor:select===item.id ?Color.maroon600:"#F7F7F7",marginRight:12,shadowOffset:{width:3,height:3},shadowColor:Color.maroon600,shadowRadius:1,shadowOpacity:0.6,borderWidth:0.6,borderColor:Color.maroon600,elevation:5,borderRadius:5,alignItems:"center",}}>
                    <View style={{marginTop:12}}>
                    <Text style={{fontFamily:"Roboto-Medium",color:select===item.id ?'white':'black'}}>{item.day}</Text>
                    <Text style={{fontFamily:"Roboto-Bold",textAlign:"center",marginTop:12,fontSize:15,color:select===item.id ?'white':'black'}}>{item.date}</Text>
                    </View>
                
                    </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        )
    }
  return (
    <View>
       <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,alignItems:"center",paddingHorizontal:12}}>
          <Pressable onPress={()=>navigation.goBack()} style={{width:19,height:19,}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../assets/Image/leftarrow.png")}/>
          </Pressable>
     
      <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:20}}>Bookings</Text>
      <Pressable style={{width:25,height:25,marginLeft:20}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../assets/Image/search.png")}/>
          </Pressable>
      </View>
  <View bounces={false} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:25,paddingHorizontal:12}}>
    <Text style={{fontFamily:"Roboto-Medium",color:"black",fontSize:20}}>May, 2022</Text>
       <View style={{flexDirection:"row",alignItems:"center"}}>
         <TouchableOpacity style={{width:30,height:30,borderRadius:15,backgroundColor:"white",alignItems:"center",justifyContent:"center",elevation:2,shadowOffset:{width:0,height:3},shadowColor:"black",shadowOpacity:0.6,shadowRadius:2,}}>
           <Image source={require('../assets/Image/rights.png')}/>
         </TouchableOpacity>

         <TouchableOpacity style={{width:30,height:30,borderRadius:15,backgroundColor:"white",alignItems:"center",justifyContent:"center",elevation:2,shadowOffset:{width:0,height:3},shadowColor:"black",shadowOpacity:0.6,shadowRadius:2,marginLeft:12}}>
         <Image style={{width:'60%',height:'60%'}} source={require('../assets/Image/left.png')}/>
         </TouchableOpacity>
       </View>
       
</View>
<Calendarlist/>
<Text style={{fontFamily:"Roboto-Medium",color:"black",fontSize:20,marginTop:32,marginLeft:12}}>Select time</Text>
<View>
<View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:12,position:"absolute",right:12}}>
    <Text style={{fontFamily:"Roboto-Medium",color:"black",fontSize:17}}>Mon</Text>
     
         <TouchableOpacity style={{width:20,height:20,borderRadius:10,backgroundColor:"white",alignItems:"center",justifyContent:"center",elevation:2,shadowOffset:{width:0,height:3},shadowColor:"black",shadowOpacity:0.6,shadowRadius:2,marginLeft:5}}>
           <Image  style={{width:"50%",height:"50%"}} source={require('../assets/Image/download.png')}/>
         </TouchableOpacity>

        
      
       
</View>
</View>
<FlatList numColumns={3} style={{}}  showsVerticalScrollIndicator={false}  bounces={false}  contentContainerStyle={{marginTop:20,alignItems:"center",}}  keyExtractor={(item)=>item.id} data={Time} renderItem={({item})=>{
    return(
      <TouchableOpacity onPress={()=>setchoose(item.id)} activeOpacity={0.6} style={{height:'auto',width:100,marginHorizontal:10,marginTop:30,alignItems:"center",justifyContent:"center",padding:8,elevation:2,backgroundColor:choose===item.id ?Color.maroon600:Color.white,borderRadius:5,shadowOpacity:0.8,shadowRadius:2,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},marginBottom:21}}>
       <Text style={{color:choose===item.id ?'white':'black',fontFamily:"Roboto-Medium",fontSize:16}}>{item.time}</Text>
      </TouchableOpacity>
        
    )
    
}}/>
<Image style={{marginTop:12}} source={require("../assets/Image/Line.png")}/>
<View style={{marginTop:20,}}>
<View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:12,position:"absolute",right:12,}}>
    <Text style={{fontFamily:"Roboto-Medium",color:"black",fontSize:17}}>Tue</Text>
     
         <TouchableOpacity style={{width:20,height:20,borderRadius:10,backgroundColor:"white",alignItems:"center",justifyContent:"center",elevation:2,shadowOffset:{width:0,height:3},shadowColor:"black",shadowOpacity:0.6,shadowRadius:2,marginLeft:5}}>
           <Image style={{width:"50%",height:"50%"}} source={require('../assets/Image/download.png')}/>
         </TouchableOpacity>

        
      
       
</View>
</View>
<FlatList numColumns={3}  showsVerticalScrollIndicator={false}  bounces={false}  contentContainerStyle={{marginTop:20,alignItems:"center",justifyContent:"center",}}  keyExtractor={(item)=>item.id} data={Time} renderItem={({item})=>{
    return(
      <TouchableOpacity onPress={()=>setchoose(item.id)} activeOpacity={0.6} style={{height:'auto',width:100,marginHorizontal:10,marginTop:30,alignItems:"center",justifyContent:"center",padding:8,elevation:2,backgroundColor:choose===item.id ?Color.maroon600:Color.white,borderRadius:5,shadowOpacity:0.8,shadowRadius:2,shadowColor:Color.maroon600,shadowOffset:{width:0,height:3},marginBottom:21}}>
       <Text style={{color:choose===item.id ?'white':'black',fontFamily:"Roboto-Medium",fontSize:16}}>{item.time}</Text>
      </TouchableOpacity>
        
    )
    
}}/>
   <Ripple rippleColor={Color.white} rippleDuration={800}rippleOpacity={0.8} style={{marginTop:30,alignItems:"center",justifyContent:"center",backgroundColor:Color.maroon600,marginHorizontal:8,borderRadius:5,marginBottom:100,elevation:3,shadowOffset:{width:0,height:3},shadowColor:"black",shadowOpacity:0.6,shadowRadius:2,}}>
       <Text style={{color:Color.white,fontFamily:"Roboto-Medium",fontSize:18,padding:15}}>NEXT</Text>
       </Ripple>
       </View>
    </View>
  )
}