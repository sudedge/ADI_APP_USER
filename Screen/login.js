import { View, Text,SafeAreaView,Image,TextInput,TouchableOpacity,ScrollView,FlatList,StyleSheet,Pressable,Modal} from 'react-native'
import React from 'react'
import { Color } from '../assets/Color';
import LinearGradient from 'react-native-linear-gradient';
import {windowHeight,windowWidth} from "../utils/Dimension/index"
import Globalstyle from '../utils/Globalstyle/index';
import { useSelector, useDispatch } from 'react-redux';
import {setChoosedata,setsecuretext,setmodalvisible} from '../redux/action';
import Ripple from 'react-native-material-ripple';
export default function User({navigation}) {
  const {choosedata,securetext,modalvisible} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();


    const [selectcategoryIndex,setselectcategoryIndex]=React.useState(1);
    const [selectcategoryIndex2,setselectcategoryIndex2]=React.useState(2);
    const [selectcategoryIndex3,setselectcategoryIndex3]=React.useState();
    // const [modalVisible, setModalVisible] = React.useState(false);
    // const [choosedata, setchoosedata] = React.useState('Select Language');
    const categories = ["Customer","Vendor"];
    const categories2 = ["Male","Female","Others"];
    const Language = [
      {id:"1",
       txt:'English',
       Language:"English"
       },
       {id:"2",
       txt:'हिन्दी',
       Language:"Hindi"
       },
       {id:"3",
       txt:'ਪੰਜਾਬੀ',
       Language:"Punjabi"
       },
       
];
    const CategoryList = () => {
        return (
            <View style={styles.categorylistcontainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity onPress={()=>setselectcategoryIndex(!selectcategoryIndex)} key={index} style={{width:150,backgroundColor:selectcategoryIndex == index ? Color.maroon600 : Color.white ,alignItems:"center",justifyContent:"center",height:43,borderRadius:10,marginHorizontal:10,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4}}>
                    <Text style={{ color: selectcategoryIndex == index ? Color.white : "black",fontFamily:"Roboto-Medium", fontSize:15}}>{item}</Text>
                </TouchableOpacity>
                  
                ))}
            </View>
        )
    };



    const CategoryList2 = () => {
        return (
            <View style={{...styles.categorylistcontainer,backgroundColor:Color.white,width:windowWidth/1.2,borderWidth:0,borderRadius:10,height:50,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4}}>
                {categories2.map((item, index) => (
                   
                    <TouchableOpacity onPress={()=>setselectcategoryIndex2(!selectcategoryIndex2)} key={index} style={{backgroundColor:selectcategoryIndex2 == index ? Color.maroon600 :Color.white ,alignItems:"center",justifyContent:"center",flex:1,height:"100%",borderRadius:8}}>
                    <Text style={{ color: selectcategoryIndex2 == index ? Color.white : null,fontFamily:"Roboto-Medium", fontSize:15}}>{item}</Text>
                </TouchableOpacity>
                 
                ))}
            </View>
        )
    };
const changeModalvisibility = (bool) =>{
  dispatch(setmodalvisible(bool))
}
    const Languagepick = () => {
      return(
     <View style={{}}>
     <Modal  animationType='slide' transparent nRequestClose={() =>changeModalvisibility(false )} visible={modalvisible}>
           <SafeAreaView style={{position:'absolute',bottom:0,width:windowWidth,height:windowHeight/2.8}}>
          <View style={{backgroundColor:'white',flex:1,borderTopLeftRadius:10,elevation:10,borderTopRightRadius:10,shadowOffset:{width:3,height:0},shadowRadius:5,shadowOpacity:0.5,}}>
            <TouchableOpacity onPress={()=>dispatch(setmodalvisible((false)))} style={{right:12,position:"absolute",padding:15,}}>
           <Image source={require("../assets/Image/close.png")}/>

           </TouchableOpacity>
           <View>
           <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16} style={{marginTop:50}}>
           {Language.map((item,index)=> (
             <TouchableOpacity key={index} onPress={()=>[changeModalvisibility(false) ,dispatch(setChoosedata(item.Language))]} style={{marginTop:8,height:'auto',marginHorizontal:windowWidth/30,justifyContent:"center",borderWidth:1.5,borderRadius:5,borderColor:"#aeafb5",padding:10,flex:1,backgroundColor:selectcategoryIndex3== index ? Color.maroon600:Color.white}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
              {/* {selectcategoryIndex3 == index ? 
              <Image   tintColor='white' source={require("../assets/Image/lang.png")}/>
    :null} */}
              <View style={{marginLeft:10}}> 
               <Text style={{fontFamily:"Roboto-Regular",fontSize:18,color:'black',fontWeight:"700"}}>{item.txt}</Text>
               <Text style={{color:selectcategoryIndex3==index ? Color.white:"black",fontFamily:"Roboto-Regular",fontSize:14}}>{item.Language}</Text>
               </View>
               </View>
             </TouchableOpacity>
             
           ))}
           </ScrollView>
           </View>
          </View>
          </SafeAreaView>
     </Modal>
     </View>
      )   
    }
      
  return (
      <SafeAreaView style={{flex:1}}>
    
       <LinearGradient style={{flex:1,alignItems:'center'}} colors={["#E2B2B2","#E7C0C0",Color.white]} >
       <Languagepick/>
       <ScrollView bounces={false} scrollEventThrottle={16} showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems:"center",}}>
        <Image style={{width:150,height:150,marginTop:30,alignSelf:'center'}} resizeMode="contain"  source={require("../assets/Image/userlogo.png")}/>
       <View style={{alignItems:"center"}}>
           <Text style={[Globalstyle.heading]}>Welcome Back!</Text>
           <Text style={[Globalstyle.subheading]}>Login Now</Text>
        

    </View>

 
<View style={{width:windowWidth/1.2,height:windowHeight/4.7,backgroundColor:Color.white,borderRadius:30,shadowColor:Color.maroon600,shadowOffset:{width:0,height:4},shadowOpacity:0.5,shadowRadius:3,elevation:5,marginTop:40,}}>
  
  <View style={{borderBottomWidth:1,height:40,marginHorizontal:windowWidth/30,marginTop:20,justifyContent:"center",borderBottomColor:Color.maroon600}}>
       <View style={{flexDirection:"row",alignItems:"center"}}>
         <Image style={{marginLeft:2}} source={require("../assets/Image/email.png")}/>
         <TextInput style={{paddingLeft:10,paddingRight:40,fontFamily:"Roboto-Regular",fontSize:15}} placeholderTextColor="grey" placeholder='johnsmith@gmail.com'/>
       </View>
  </View>


  <View style={{borderBottomWidth:1,height:40,marginHorizontal:windowWidth/30,marginTop:20,justifyContent:"center",borderBottomColor:Color.maroon600}}>
       <View style={{flexDirection:"row",alignItems:"center"}}>
         <Image style={{marginLeft:2}} source={require("../assets/Image/lock.png")}/>
         <TextInput secureTextEntry={securetext} style={{paddingLeft:10,paddingRight:40,fontFamily:"Roboto-Regular",fontSize:15}} placeholderTextColor="grey" placeholder='**************'/>
         <Text  style={{fontSize:13,fontFamily:"Roboto-Bold",position:"absolute",right:12}}>{securetext ?"Show" :"Hide"}</Text>
       </View>

      
  </View>
  <Pressable style={{position:"absolute",right:15,bottom:19}}>
         <Text style={{fontSize:12,fontFamily:"Roboto-Medium",color:"#009AE5"}}>Forgot Password?</Text>
       </Pressable>

  </View>
       


  



              





<Ripple onPress={()=>navigation.navigate('Dashboar')} rippleColor='white' rippleDuration={800}  style={{width:150,backgroundColor: Color.maroon600 ,alignItems:"center",justifyContent:"center",height:43,borderRadius:20,marginHorizontal:10,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4,marginTop:30}}>
    <Text style={{ color: Color.white ,fontFamily:"Roboto-Medium", fontSize:15}}>Login</Text>
 </Ripple>
                  
<Text style={{fontFamily:"Roboto-Bold",fontSize:13,marginTop:30}}>Or Connect With</Text>

<View style={{flexDirection:"row",marginTop:20}}>
  <Pressable>
    <Image source={require("../assets/Image/google.png")}/>
  </Pressable>
  <Pressable style={{marginLeft:10}}>
    <Image source={require("../assets/Image/facebook.png")}/>
  </Pressable>

  <Pressable style={{marginLeft:10}}>
    <Image source={require("../assets/Image/linkedin.png")}/>
  </Pressable>

  <Pressable style={{marginLeft:10}}>
    <Image source={require("../assets/Image/twitter.png")}/>
  </Pressable>
</View>

                  
<Text style={{marginTop:30,marginBottom:100}}>
    <Text style={{fontFamily:"Roboto-Bold",color:"black",fontSize:15}}>Don’t Have Account? </Text> <TouchableOpacity onPress={()=>navigation.navigate("patientsignup")} activeOpacity={0.5}><Text style={{color:"#009AE5",fontFamily:"Roboto-Medium",fontSize:15}}>Sign up </Text></TouchableOpacity>
</Text>
</ScrollView>
</LinearGradient>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    categorylistcontainer:{
        flexDirection:"row",marginTop:20,
    },
    categorylisttext:{
        
    }
})