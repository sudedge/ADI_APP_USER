import { View, Text, Image,StyleSheet,Pressable,TextInput,ScrollView,FlatList,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from "../utils/Dimension"
import { Color } from '../assets/Color'
import Ripple from 'react-native-material-ripple'
import { NavigationContainer } from '@react-navigation/native'
export default function Dashboard({navigation}) {

    const Data=[
        {
          id:"1",
          icon:require("../assets/Image/consultation.png")  ,
          title:"Consultation",
          press:'booking'
        },
        {
            id:"2",
            icon:require("../assets/Image/pharmacy.png")  ,
            title:"Pharmacy",
            press:'pharmacy'
          },
          {
            id:"3",
            icon:require("../assets/Image/emergency.png")  ,
            title:"Emergency",
              press:'Message'
          },
          {
            id:"4",
            icon:require("../assets/Image/article.png")  ,
            title:"Articles",
            press:'article'
          },
          {
            id:"5",
            icon:require("../assets/Image/payment.png")  ,
            title:"Payments",
            press:'Bye'
          },
    ]


const Data2 = [
    {
        id:"1",
        icon:require("../assets/Image/bookmark.png")  ,
        title:"Healthy High protein based diet: A diet for weight loss",
        img:require("../assets/Image/vegetable.png"),
        date:"April 1, 2021",
        titl2:"5min read.",
        navigate:"article"
      },
      {
          id:"2",
          icon:require("../assets/Image/bookmark.png")  ,
          title:"Let's get running out on intense summer days",
          img:require("../assets/Image/runner.png"),
          date:"April 1, 2021",
          titl2:"5min read.",
          navigate:"article"
        },
        {
          id:"3",
          icon:require("../assets/Image/bookmark.png")  ,
          title:"Healthy High protein based diet: A diet for weight loss",
          img:require("../assets/Image/vegetable.png"),
          date:"April 1, 2021",
          titl2:"5min read.",
          navigate:"article"
        },
        {
          id:"4",
          icon:require("../assets/Image/bookmark.png") ,
          title:"Let's get running out on intense summer days",
          img:require("../assets/Image/runner.png"),
          date:"April 1, 2021",
          titl2:"5min read.",
          navigate:"article"
        },
        {
          id:"5",
          icon:require("../assets/Image/bookmark.png")   ,
          title:"Healthy High protein based diet: A diet for weight loss",
          img:require("../assets/Image/vegetable.png"),
          date:"April 1, 2021",
          titl2:"5min read.",
          navigate:"article"
        },
]




const Doctor = [
    {
      id:"1",
      drname:"Dr.Martin",
      specialist:"Paediatric",
      detail:"Dr Martin was born and raised in Queensland,and completed her medical degree at the  University of Queensland. She is fully trained in all aspects of cardiology and a founding member of Blitz & Hertz......."  ,
      img:require("../assets/Image/location.png"),
      hospitalname:"Sunrise Hospital",
      Rating:4.6,
      drimg:require("../assets/Image/martin.png"),
      navigate:"doctorprof"
    },
    {
        id:"2",
        drname:"Dr.Hailey Fox",
        specialist:"Cardiologist",
        detail:"Dr Fox was born and raised in Queensland,and completed her medical degree at the University of Queensland. She is fully trained in all aspects of cardiology and a founding member of Blitz & Hertz......." ,
        img:require("../assets/Image/location.png"),
        hospitalname:"Sunway Hospital",
        Rating:4.6,
        drimg:require("../assets/Image/halley.png"),
        navigate:"doctorprof"
      },
      {
        id:"3",
        drname:"Dr.Smith",
        specialist:"Endocrinologist",
        detail:"Dr Smith was born and raised in Queensland, and completed her medical degree at the University of Queensland. She is fully trained in all aspects of cardiology and a founding member of Blitz & Hertz......." ,
        img:require("../assets/Image/location.png"),
        hospitalname:"Manas Hospital",
        Rating:4.6,
        drimg:require("../assets/Image/smith.png"),
        navigate:"doctorprof"
      },
      {
        id:"4",
        drname:"Dt.Martin",
        specialist:"Paediatric",
        detail:"Dr Martin was born and raised in Queensland,and completed her medical degree at the  University of Queensland. She is fully trained in all aspects of cardiology and a founding member of Blitz & Hertz......."  ,
        img:require("../assets/Image/location.png"),
        hospitalname:"Sunrise Hospital",
        Rating:'4.6',
        drimg:require("../assets/Image/martin.png"),
        navigate:"doctorprof"
      },
]

const Offercard =[
    {
        id:"1",
        heading:"Introductory offer",
        offerdetail:"15% off on your first appointment",
        img:require("../assets/Image/untitled.png"),
        btntitle:"Book Apointment",
        navigate:'booking'
    },
    {
        id:"2",
        heading:"Introductory offer",
        offerdetail:"15% off on your first appointment",
        img:require("../assets/Image/untitled.png"),
        btntitle:"Book Apointment",
        navigate:'booking'
    },
    {
        id:"3",
        heading:"Introductory offer",
        offerdetail:"15% off on your first appointment",
        img:require("../assets/Image/untitled.png"),
        btntitle:"Book Apointment",
        navigate:'booking'
    },
    {
        id:"4",
        heading:"Introductory offer",
        offerdetail:"15% off on your first appointment",
        img:require("../assets/Image/untitled.png"),
        btntitle:"Book Apointment",
        navigate:'booking'
    },
    {
        id:"5",
        heading:"Introductory offer",
        offerdetail:"15% off on your first appointment",
        img:require("../assets/Image/untitled.png"),
        btntitle:"Book Apointment",
        navigate:'booking'
    },
]



const Datalist2 =()=>{
    return(
  <View>
            { Data2.map((item,index)=>(
              <Pressable onPress={()=>navigation.navigate(item.navigate)} key={index} style={{width:windowWidth/1.08,backgroundColor:"white",margin:12,justifyContent:"center",borderRadius:5 ,shadowOffset:{width:0,height:5},shadowColor:Color.maroon600,shadowOpacity:0.5,shadowRadius:2,elevation:2,borderWidth:0.17,borderColor:Color.maroon600}}>
                   <View style={{flexDirection:"row",paddingVertical:5,marginLeft:10}}>
                      <Image style={{width:70,height:70}} source={item.img}/>
                      <View> 
                          <Text style={{fontFamily:"Roboto-Medium",color:"black",fontSize:14,width:250,marginLeft:10}}>{item.title}</Text>
                          <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:12,marginTop:12}}>
                              <Text style={{color:"grey",fontFamily:"Roboto-Medium",fontSize:13}}>{item.date}</Text>
                                 <View style={{flexDirection:"row"}}>
                                     <Text style={{color:"grey",fontFamily:"Roboto-Medium",fontSize:13}}>{item.titl2}</Text>
                                     <Image source={item.icon}/>
                                     </View>
                              </View>
                      </View>
                   </View>
                   
              </Pressable>
                
            ))}
       </View>
    )
}


    const Datalist =()=>{
        return(
            <ScrollView bounces={false} scrollEventThrottle={16} showsHorizontalScrollIndicator={false} style={{marginTop:30}}  horizontal>
                { Data.map((item,index)=>(
                
                    <View key={index} style={{}}>
                    <TouchableOpacity onPress={()=>navigation.navigate(item.press)} style={{width:56,height:56,backgroundColor:Color.maroon600,flexDirection:"row",marginLeft:14,alignItems:'center',justifyContent:"center",borderRadius:4,}}>
                      <Image source={item.icon}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:11,textAlign:"center",marginLeft:10,marginTop:5,color:"black",fontFamily:"Roboto-Medium"}}>{item.title}</Text>
                    </View>
                ))}
            </ScrollView>
        )
    }
  return (
    <View style={{flex:1,marginHorizontal:windowWidth/50,}}> 
      <View style={{...styles.headercontainer}}>
          <Text style={{...styles.txt}}>Find your desired health solution</Text>
          <Pressable>
          <Image source={require("../assets/Image/dots.png")}/>
          </Pressable>
         
      </View>

      <View style={{flexDirection:"row",paddingHorizontal:10,alignItems:"center",marginTop:15}}>
          <View style={{...styles.searchcontainer}}>
              <TextInput style={{...styles.searchinpt}} placeholderTextColor="grey" placeholder='Search doctors,drugs,articles..... '/>
              </View>

              <Pressable style={{width:"15%",height:45,backgroundColor:Color.maroon600,borderRadius:5,marginLeft:"8%",alignItems:"center",justifyContent:"center"}}> 
                  <Image source={require("../assets/Image/callicon.png")}/>
              </Pressable>
      </View>
<View stye={{width:windowWidth/50}}>
<Datalist/>
</View>



<ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={{}} style={{flex:1,width:"100%",marginTop:20}}>
<FlatList   showsVerticalScrollIndicator={false}  bounces={false} horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{marginTop:25}}  keyExtractor={(item)=>item.id} data={Offercard} renderItem={({item})=>{
    return(
<Pressable style={{height:150,borderWidth:1,borderRadius:20,borderColor:"#A51010",marginHorizontal:10}}>
    
    <View style={{flexDirection:"row",flex:1}}>
        <View style={{margin:8,marginLeft:18}}>
            <Text style={{fontSize:14,color:"black",fontFamily:"Roboto-Medium"}}>{item.heading}</Text>
            <Text style={{color:"#A51010",fontSize:13,fontFamily:"Roboto-Medium",maxWidth:120}}>{item.offerdetail}</Text>
<Ripple onPress={()=>navigation.navigate(item.navigate)} rippleColor='white' rippleDuration={800}  style={{width:180,backgroundColor: Color.maroon600 ,alignItems:"center",justifyContent:"center",height:43,borderRadius:20,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4,marginTop:25,marginLeft:-5}}>
    <Text style={{ color: Color.white ,fontFamily:"Roboto-Medium", fontSize:13}}>{item.btntitle}</Text>
 </Ripple>
        </View>

<View style={{marginTop:-5}}>
<Image source={require("../assets/Image/untitled.png")}/>
</View>
     

    </View>
</Pressable>
    )
    
}}/>

    
<View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,marginTop:20}}>
    <Text style={{fontSize:12,fontFamily:"Roboto-Regular",fontWeight:"700",color:"black"}}>Top Doctors</Text>
    <Pressable>
        <Text style={{fontSize:12,fontFamily:"Roboto-Regular",fontWeight:"700",color:Color.maroon600}}>See more</Text>
    </Pressable>
</View>





<FlatList showsVerticalScrollIndicator={false}  bounces={false} horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{marginTop:10,}}  keyExtractor={(item)=>item.id} data={Doctor} renderItem={({item})=>{
    return(
      <Pressable onPress={()=>navigation.navigate(item.navigate)} style={{paddingHorizontal:8,height:220,width:150,backgroundColor:"white",marginHorizontal:10,shadowColor:Color.maroon800,shadowOffset:{width:0,height:2},shadowOpacity:0.5,shadowRadius:3,elevation:3,borderBottomLeftRadius:50,borderTopRightRadius:50,alignItems:"center",marginTop:50,marginBottom:5}}>
         <View style={{marginTop:42}}>
             <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:16}}>{item.drname}</Text>
             <Text style={{color:"black",fontFamily:"Roboto-Regular",fontSize:10,color:"grey"}} >{item.specialist}</Text>
             
         </View>
         <View style={{marginTop:12,width:140,marginHorizontal:20}}>
                 <Text  style ={{fontSize:8,color:"black",fontFamily:"Roboto-Regular"}}>{item.detail}</Text>
             </View>


             <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:12,marginRight:6}}>
                <Image source={item.img}/>
                 <Text style ={{fontSize:11,color:"grey",marginLeft:5,fontFamily:"Roboto-Medium"}}>{item.hospitalname}</Text>
                 </View>
                 <View style={{backgroundColor:Color.maroon50,width:40,alignItems:"center",justifyContent:"center",padding:2,borderRadius:3,position:"absolute",right:12,bottom:15}}>
                    <Text style={{fontFamily:"Roboto-Medium",fontSize:12,color:"black"}}>4.7</Text>
                 </View>
                
             
{/* <Image style={{width:100,height:120}} source={item.drimg}/> */}

<Image style={{width:130,height:90,borderRadius:50,position:"absolute",top:-45,right:0}}  source={item.drimg}/>

             
          </Pressable>
    )
    
}}/>
     <View style={{marginTop:20,marginLeft:20}}>
     <Text style={{color:Color.maroon400,fontFamily:"Roboto-Medium"}}>Don't miss Out !</Text> 
     <View style={{height:42,backgroundColor:'white',width:windowWidth/1.2,marginBottom:10,alignItems:"center",justifyContent:"center",borderRadius:5,shadowOffset:{width:-3,height:3},shadowColor:Color.maroon600,shadowOpacity:0.5,shadowRadius:2,elevation:2,marginTop:15}}>
         <Text style={{fontFamily:"Roboto-Regular",fontWeight:"600",fontSize:15,color:"black"}}>365 days early offer </Text>
         </View> 
     </View>

<View>
    <Text style={{marginLeft:15,color:"black",fontFamily:"Roboto-Bold",fontSize:15,marginTop:15}}>Health Articles</Text>
</View>
<Datalist2/>

     </ScrollView>




    </View>
  )
}

const styles = StyleSheet.create({
   
    txt:{
        fontFamily:"Roboto-Medium",fontWeight:"500",color:"black",fontWeight:"500",fontSize:18,width:190
    },
    headercontainer:{
        flexDirection:"row",marginTop:12,justifyContent:"space-between",paddingHorizontal:10
    },
    searchcontainer:{
        height:45,width:"75%",alignItems:"center",justifyContent:'center',ShadowOffset:{width:0,height:-25},shadowColor:Color.maroon800,shadowOffset:{width:0,height:4},shadowOpacity:0.5,shadowRadius:1,elevation:18,backgroundColor:Color.white,elevation:10,borderRadius:4
    },
    searchinpt:{
      fontFamily:"Roboto-Regular"
    }
})