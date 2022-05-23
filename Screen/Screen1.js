import { View, Text, Image,StyleSheet,Pressable,TextInput,ScrollView,FlatList,TouchableOpacity,} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from "../utils/Dimension"
import { Color } from '../assets/Color'
import Ripple from 'react-native-material-ripple'
export default function Dashboard({navigation}) {

    const Data=[
        {
          id:"1",
          icon:require("../assets/Image/all.png")  ,
          title:"All",
          navigate:"drugcabinet"
        },
        {
            id:"2",
            icon:require("../assets/Image/diabetes.png")  ,
            title:"Diabetes",
            navigate:"drugcabinet"
          },
          {
            id:"3",
            icon:require("../assets/Image/skincare.png")  ,
            title:"Skincare",
            navigate:"drugcabinet"
          },
          {
            id:"4",
            icon:require("../assets/Image/supplement.png")  ,
            title:"Supplements",
            navigate:"drugcabinet"
          },
          {
            id:"5",
            icon:require("../assets/Image/payment.png")  ,
            title:"Payments",
            navigate:"drugcabinet"
          },
    ]


const Data2 = [
    {
        id:"1",
        icon:require("../assets/Image/bookmark.png")  ,
        title:"Healthy High protein based diet: A diet for weight loss",
        img:require("../assets/Image/vegetable.png"),
        date:"April 1, 2021",
        titl2:"5min read."
      },
      {
          id:"2",
          icon:require("../assets/Image/bookmark.png")  ,
          title:"Let's get running out on intense summer days",
          img:require("../assets/Image/runner.png"),
          date:"April 1, 2021",
          titl2:"5min read."
        },
        {
          id:"3",
          icon:require("../assets/Image/bookmark.png")  ,
          title:"Healthy High protein based diet: A diet for weight loss",
          img:require("../assets/Image/vegetable.png"),
          date:"April 1, 2021",
          titl2:"5min read."
        },
        {
          id:"4",
          icon:require("../assets/Image/bookmark.png") ,
          title:"Let's get running out on intense summer days",
          img:require("../assets/Image/runner.png"),
          date:"April 1, 2021",
          titl2:"5min read."
        },
        {
          id:"5",
          icon:require("../assets/Image/bookmark.png")   ,
          title:"Healthy High protein based diet: A diet for weight loss",
          img:require("../assets/Image/vegetable.png"),
          date:"April 1, 2021",
          titl2:"5min read."
        },
]




const Doctor = [
    {
      id:"1",
      navigate:"productdetail",
      productname:"Moov Gel",
      weight:"500gm",
      Rating:4.6,
      productimg:require("../assets/Image/moov.png")
    },
    {
        id:"2",
        navigate:"productdetail",
        productname:"Asprine",
        weight:"500mg",
        Rating:4.6,
        productimg:require("../assets/Image/moov.png")
      },
      {
        id:"3",
        navigate:"productdetail",
        productname:"Vicksrub",
        weight:"50gm",
        Rating:4.6,
        productimg:require("../assets/Image/moov.png")
      },
      {
        id:"4",
        navigate:"productdetail",
        productname:"Asprine",
        weight:"500mg",
        Rating:4.6,
        productimg:require("../assets/Image/moov.png")
      },
]

const Offercard =[
    {
        id:"1",
        heading:"Introductory offer",
        offerdetail:"15% off on your first appointment",
        img:require("../assets/Image/untitled.png"),
        btntitle:"Book Apointment",
     
    },
    {
        id:"2",
        heading:"Introductory offer",
        offerdetail:"15% off on your first appointment",
        img:require("../assets/Image/untitled.png"),
        btntitle:"Book Apointment"
    },
    {
        id:"3",
        heading:"Introductory offer",
        offerdetail:"15% off on your first appointment",
        img:require("../assets/Image/untitled.png"),
        btntitle:"Book Apointment"
    },
    {
        id:"4",
        heading:"Introductory offer",
        offerdetail:"15% off on your first appointment",
        img:require("../assets/Image/untitled.png"),
        btntitle:"Book Apointment"
    },
    {
        id:"5",
        heading:"Introductory offer",
        offerdetail:"15% off on your first appointment",
        img:require("../assets/Image/untitled.png"),
        btntitle:"Book Apointment"
    },
]



const Datalist2 =()=>{
    return(
  <View>
            { Data2.map((item,index)=>(
              <Pressable key={index} style={{width:windowWidth/1.08,backgroundColor:"white",margin:12,justifyContent:"center",borderRadius:5 ,shadowOffset:{width:0,height:5},shadowColor:Color.maroon600,shadowOpacity:0.5,shadowRadius:2,elevation:2,borderWidth:0.17,borderColor:Color.maroon600}}>
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
            <ScrollView showsHorizontalScrollIndicator={false} style={{marginTop:30}}  horizontal>
                { Data.map((item,index)=>(
                
                    <View key={index} style={{}}>
                    <TouchableOpacity onPress={()=>navigation.navigate(item.navigate)}style={{width:56,height:56,backgroundColor:Color.maroon600,flexDirection:"row",marginLeft:14,alignItems:'center',justifyContent:"center",borderRadius:4,}}>
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
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,alignItems:"center"}}>
          <Pressable onPress={()=>navigation.goBack()} style={{width:19,height:19,marginLeft:20}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../assets/Image/leftarrow.png")}/>
          </Pressable>
     
      <Text style={{marginRight:windowWidth/2.5,color:"black",fontFamily:"Roboto-Medium",fontSize:20}}>Pharmacy</Text>
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
<Ripple rippleColor='white' rippleDuration={800}  style={{width:180,backgroundColor: Color.maroon600 ,alignItems:"center",justifyContent:"center",height:43,borderRadius:20,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4,marginTop:25,marginLeft:-5}}>
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
    <Text style={{fontSize:12,fontFamily:"Roboto-Regular",fontWeight:"700",color:"black"}}>Frequently brought</Text>
    <Pressable>
        <Text style={{fontSize:12,fontFamily:"Roboto-Regular",fontWeight:"700",color:Color.maroon600}}>See more</Text>
    </Pressable>
</View>





<FlatList showsVerticalScrollIndicator={false}  bounces={false} horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{marginTop:10,}}  keyExtractor={(item)=>item.id} data={Doctor} renderItem={({item})=>{
    return(
      <Pressable onPress={()=>navigation.navigate(item.navigate)} style={{paddingHorizontal:8,height:220,width:150,backgroundColor:"white",marginHorizontal:10,shadowColor:Color.maroon800,shadowOffset:{width:0,height:5},shadowOpacity:0.8,shadowRadius:2,elevation:2,borderBottomLeftRadius:50,borderTopRightRadius:50,alignItems:"center",marginBottom:5,}}>
        <View style={{width:90,height:90,backgroundColor:Color.white,marginTop:30,borderRadius:35,shadowColor:"black",shadowOffset:{width:0,height:3},shadowOpacity:0.5,shadowRadius:2,elevation:3,}}>
      <Image style={{width:'100%',height:"100%"}}resizeMode="repeat" source={item.productimg}/>
        </View>
        


            
                 <View style={{backgroundColor:Color.maroon50,width:40,alignItems:"center",justifyContent:"center",padding:2,borderRadius:3,position:"absolute",right:12,bottom:50,}}>
                    <Text style={{fontFamily:"Roboto-Medium",fontSize:12,color:"black"}}>4.7</Text>
                
                 </View>
                <View style={{position:"absolute",bottom:12,right:13}}>
                <Text style={{color:"black",fontFamily:"Roboto-Bold",fontSize:13}}>{item.productname}</Text>
                <Text style={{fontSize:10,color:"grey",fontFamily:"Roboto-Bold"}}>{item.weight}</Text>
                </View>
             
</Pressable>
    )
    
}}/>
    




   
    <View style={{flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,marginTop:20}}>
    <Text style={{fontSize:12,fontFamily:"Roboto-Regular",fontWeight:"700",color:"black"}}>Frequently on sale</Text>
    <Pressable>
        <Text style={{fontSize:12,fontFamily:"Roboto-Regular",fontWeight:"700",color:Color.maroon600}}>See more</Text>
    </Pressable>
</View>





<FlatList showsVerticalScrollIndicator={false}  bounces={false} horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={{marginTop:10,}}  keyExtractor={(item)=>item.id} data={Doctor} renderItem={({item})=>{
    return(
      <View style={{paddingHorizontal:8,height:220,width:150,backgroundColor:"white",marginHorizontal:10,shadowColor:Color.maroon800,shadowOffset:{width:0,height:5},shadowOpacity:0.8,shadowRadius:2,elevation:2,borderBottomLeftRadius:50,borderTopRightRadius:50,alignItems:"center",marginBottom:5,}}>
        <View style={{width:90,height:90,backgroundColor:Color.white,marginTop:30,borderRadius:35,shadowColor:"black",shadowOffset:{width:0,height:3},shadowOpacity:0.5,shadowRadius:2,elevation:3,}}>
      <Image style={{width:'100%',height:"100%"}}resizeMode="repeat" source={item.productimg}/>
        </View>
        


            
                 <View style={{backgroundColor:Color.maroon50,width:40,alignItems:"center",justifyContent:"center",padding:2,borderRadius:3,position:"absolute",right:12,bottom:50,}}>
                    <Text style={{fontFamily:"Roboto-Medium",fontSize:12,color:"black"}}>4.7</Text>
                
                 </View>
                <View style={{position:"absolute",bottom:12,right:13}}>
                <Text style={{color:"black",fontFamily:"Roboto-Bold",fontSize:13}}>{item.productname}</Text>
                <Text style={{fontSize:10,color:"grey",fontFamily:"Roboto-Bold"}}>{item.weight}</Text>
                </View>
             
</View>
    )
    
}}/>
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