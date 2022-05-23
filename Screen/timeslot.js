import { View, Text,Pressable,Image,FlatList ,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import { Color } from '../assets/Color'
import { windowHeight,windowWidth} from '../utils/Dimension'

export default function Timeslot({navigation}) {
    const [select,setselect] =React.useState()
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
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:25,paddingHorizontal:12}}>
    <Text style={{fontFamily:"Roboto-Medium",color:"black",fontSize:20}}>May, 2022</Text>
       <View style={{flexDirection:"row",alignItems:"center"}}>
         <TouchableOpacity style={{width:30,height:30,borderRadius:15,backgroundColor:"white",alignItems:"center",justifyContent:"center",elevation:2,shadowOffset:{width:0,height:3},shadowColor:"black",shadowOpacity:0.6,shadowRadius:2,}}>
           <Image source={require('../assets/Image/rights.png')}/>
         </TouchableOpacity>

         <TouchableOpacity style={{width:30,height:30,borderRadius:15,backgroundColor:"white",alignItems:"center",justifyContent:"center",elevation:2,shadowOffset:{width:0,height:3},shadowColor:"black",shadowOpacity:0.6,shadowRadius:2,marginLeft:12}}>
         <Image source={require('../assets/Image/left.png')}/>
         </TouchableOpacity>
       </View>
       
</View>
<Calendarlist/>
    </View>
  )
}