import { View, Text,SafeAreaView,Image,TextInput,TouchableOpacity,ScrollView,FlatList,StyleSheet,Pressable,Modal} from 'react-native'
import React from 'react'
import { Color } from '../../assets/Color';
import LinearGradient from 'react-native-linear-gradient';
import {windowHeight,windowWidth} from "../../utils/Dimension/index"
import Globalstyle from '../../utils/Globalstyle';
import { useSelector, useDispatch } from 'react-redux';
import {setChoosedata,setsecuretext,setmodalvisible} from '../../redux/action';
export default function User() {
  const {choosedata,securetext,modalvisible} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();


    const [selectcategoryIndex,setselectcategoryIndex]=React.useState();
    const [selectcategoryIndex2,setselectcategoryIndex2]=React.useState("0");
    const [selectcategoryIndex3,setselectcategoryIndex3]=React.useState();
    // const [modalVisible, setModalVisible] = React.useState(false);
    // const [choosedata, setchoosedata] = React.useState('Select Language');
    const categories = [{id:'0',type:"Customer"},{id:'1',type:"Vendor"}];
    const categories2 = [{id:"0",category:"Male"},{id:"1",category:"Female"},{id:"2",category:"Others"}];
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
                    <TouchableOpacity onPress={()=>setselectcategoryIndex(item.id)} key={index} style={{width:150,backgroundColor:selectcategoryIndex ===item.id ? Color.maroon600 : Color.white ,alignItems:"center",justifyContent:"center",height:43,borderRadius:10,marginHorizontal:10,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4}}>
                    <Text style={{ color: selectcategoryIndex ===item.id ? Color.white : "black",fontFamily:"Roboto-Medium", fontSize:15}}>{item.type}</Text>
                </TouchableOpacity>
                  
                ))}
            </View>
        )
    };



    const CategoryList2 = () => {
        return (
            <View style={{...styles.categorylistcontainer,backgroundColor:Color.white,width:windowWidth/1.2,borderWidth:0,borderRadius:10,height:50,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4}}>
                {categories2.map((item, index) => (
                   
                    <TouchableOpacity onPress={()=>setselectcategoryIndex2(item.id)} key={index} style={{backgroundColor:selectcategoryIndex2 ===item.id ? Color.maroon600 :Color.white ,alignItems:"center",justifyContent:"center",flex:1,height:"100%",borderRadius:8}}>
                    <Text style={{ color: selectcategoryIndex2 ===item.id ? Color.white : null,fontFamily:"Roboto-Medium", fontSize:15}}>{item.category}</Text>
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
           <Image source={require("../../assets/Image/close.png")}/>

           </TouchableOpacity>
           <View>
           <ScrollView showsVerticalScrollIndicator={false} scrollEventThrottle={16} style={{marginTop:50}}>
           {Language.map((item,index)=> (
             <TouchableOpacity key={index} onPress={()=>[changeModalvisibility(false) ,dispatch(setChoosedata(item.Language))]} style={{marginTop:8,height:'auto',marginHorizontal:windowWidth/30,justifyContent:"center",borderWidth:1.5,borderRadius:5,borderColor:"#aeafb5",padding:10,flex:1,backgroundColor:selectcategoryIndex3== index ? Color.maroon600:Color.white}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
              {/* {selectcategoryIndex3 == index ? 
              <Image   tintColor='white' source={require("../../assets/Image/lang.png")}/>
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
        <Image style={{width:150,height:150,marginTop:30,alignSelf:'center'}} resizeMode="contain"  source={require("../../assets/Image/userlogo.png")}/>
       <View style={{alignItems:"center"}}>
           <Text style={[Globalstyle.heading]}>Create your account</Text>
           <Text style={[Globalstyle.subheading]}>Sign-Up</Text>
           <Text style={Globalstyle.headofsubhead}>As Patient</Text>

          
       </View>

    <View style={{flexDirection:"row",marginTop:20,width:windowWidth/1.2,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4}}>
       <View style={{width:"45%",height:43,backgroundColor:Color.white,borderRadius:10,}}>
         
           <View style={{flexDirection:"row",alignItems:'center',paddingHorizontal:10,flex:1}}>
         <Image source={require("../../assets/Image/user1.png")}/>
           <TextInput  style={{paddingLeft:10,paddingRight:15}} placeholder='First Name'/>
         </View>
        </View>


        <View style={{width:"45%",height:43,backgroundColor:Color.white,borderRadius:10,marginLeft:25}}>
         
           <View style={{flexDirection:"row",alignItems:'center',paddingHorizontal:10,flex:1}}>
       
           <TextInput style={{paddingLeft:10,paddingRight:15}} placeholder='Last Name'/>
         </View> 
        </View>


    </View>

                                    {/* EMAIL INPUT */}
    <View style={{width:windowWidth/1.2,height:45,backgroundColor:Color.white,borderRadius:10,marginTop:20,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4}}>
         
         <View style={{flexDirection:"row",alignItems:'center',paddingHorizontal:10,flex:1}}>
       <Image source={require("../../assets/Image/email2.png")}/>
         <TextInput  style={{paddingLeft:15,paddingRight:15,fontFamily:"Roboto-Regular"}} placeholder='Enter Email'/>
       </View>
      </View>


      <Pressable  onPress={() => changeModalvisibility(true)}style={{width:windowWidth/1.2,height:45,backgroundColor:Color.white,borderRadius:10,marginTop:20,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4}}>
         
         <View style={{flexDirection:"row",alignItems:'center',paddingHorizontal:10,flex:1}}>
       <Image source={require("../../assets/Image/lang.png")}/>
        <Text style={{paddingLeft:15,paddingRight:15,fontFamily:"Roboto-Regular"}}>{choosedata}</Text>
        <Image style={{position:"absolute",right:15}} source={require("../../assets/Image/download.png")}/>
       </View>
      </Pressable>


  

                               {/* PASSWORD INPUT */}
     <View style={{width:windowWidth/1.2,height:45,backgroundColor:Color.white,borderRadius:10,marginTop:20,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4}}>
         
         <View style={{flexDirection:"row",alignItems:'center',paddingHorizontal:10,flex:1}}>
       <Image source={require("../../assets/Image/lock1.png")}/>

       <TouchableOpacity onPress={()=>dispatch(setsecuretext(!securetext))} activeOpacity={0.6} style={{position:"absolute",right:18}}>
   
       <Text  style={{fontSize:10,fontFamily:"Roboto-Bold"}}>{securetext ?"Show" :"Hide"}</Text>
       </TouchableOpacity>
  
         <TextInput secureTextEntry={securetext} style={{paddingLeft:15,paddingRight:15,fontFamily:"Roboto-Regular"}} placeholder='Enter Password'/>
       </View>
      </View>


                        {/* Confirm PASSWORD INPUT */}
                        <View style={{width:windowWidth/1.2,height:45,backgroundColor:Color.white,borderRadius:10,marginTop:20,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4}}>
         
         <View style={{flexDirection:"row",alignItems:'center',paddingHorizontal:10,flex:1}}>
       <Image source={require("../../assets/Image/lock1.png")}/>
         <TextInput secureTextEntry style={{paddingLeft:15,paddingRight:15,fontFamily:"Roboto-Regular"}} placeholder='Confirm Password'/>
       </View>
      </View>

      <CategoryList2/>
<CategoryList/>

<View style={{width:windowWidth/1.2 ,marginTop:25}}>
<Text style={{fontFamily:"Roboto-Regular",fontSize:14,color:"black"}}><Text>By continuing you agree to our</Text> <TouchableOpacity><Text style={{fontSize:13,color:Color.maroon400,fontFamily:"Roboto-Regular",fontWeight:"500",}}>Terms Of Services</Text></TouchableOpacity><Text>& </Text><TouchableOpacity style={{padding:0,marginTop:-3}}><Text style={{fontSize:14,color:Color.maroon400,fontFamily:"Roboto-Regular",fontWeight:"500"}}>Privacy Policy</Text></TouchableOpacity>
  </Text>

{/* <Text style={{fontSize:13.7,fontFamily:"Roboto-Regular"}}><Text>By continuing you agree to our</Text> <TouchableOpacity><Text style={{color:Color.maroon400,fontFamily:"Roboto-Medium",fontSize:14}}>Terms of Services</Text> </TouchableOpacity> 
<Text style={{color:Color.maroon400,fontFamily:"Roboto-Medium",fontSize:14}}> & Privacy Policy.</Text> </Text> */}
</View>

<TouchableOpacity  style={{width:150,backgroundColor: Color.maroon600 ,alignItems:"center",justifyContent:"center",height:43,borderRadius:20,marginHorizontal:10,elevation:3,shadowOffset:{width:3,height:3},shadowColor:"black",shadowOpacity:0.4,marginTop:20}}>
    <Text style={{ color: Color.white ,fontFamily:"Roboto-Medium", fontSize:15}}>Signup</Text>
 </TouchableOpacity>
                  
<Text style={{marginTop:30,marginBottom:100}}>
    <Text style={{fontFamily:"Roboto-Bold",color:"black",fontSize:15}}>Already Have Account?</Text> <TouchableOpacity onPress={()=>navigation.navigate("patientlogin")} activeOpacity={0.5}><Text style={{color:"#009AE5",fontFamily:"Roboto-Medium",fontSize:15}}>Login </Text></TouchableOpacity>
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