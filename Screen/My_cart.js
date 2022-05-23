import { View, Text ,Pressable,Image,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from '../utils/Dimension'
import { Color } from '../assets/Color'
import LottieView from 'lottie-react-native';
import Ripple from 'react-native-material-ripple';
import { useSelector, useDispatch } from 'react-redux';
import {setincrementvalue} from '../redux/action';
export const My_cart = ({
  _id,
  isLiked = false,
  onLikePost = () => {},
 
}) =>{
  const animation = React.useRef(null);
  const isFirstRun = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRun.current) {
      if (isLiked) {
        animation.current.play=(66, 66);
      } else {
        animation.current.play(19, 19);
      }
      isFirstRun.current = false;
    } else if (isLiked) {
      animation.current.play(19, 50);
    } else {
      animation.current.play(0,19);
    }
  }, [isLiked]);
  const {incrementvalue} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
const Decrement=()=>{
  if(incrementvalue <= 0) {
    dispatch(setincrementvalue(0))
  }else {
    dispatch(setincrementvalue(incrementvalue-1))
  }
}
  return (
    <View style={{width:windowWidth,height:windowHeight}}>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,alignItems:"center"}}>
          <Pressable style={{width:19,height:19,marginLeft:20}}>
          <Image  style={{width:"100%",height:"100%"}}  source={require("../assets/Image/leftarrow.png")}/>
          </Pressable>
     
      <Text style={{marginRight:windowWidth/2.5,color:"black",fontFamily:"Roboto-Medium",fontSize:20}}>My Cart</Text>
      </View>

<View style={{flexDirection:"row",marginTop:20,justifyContent:'space-between'}}>
      <View style={{paddingHorizontal:8,height:160,width:120,backgroundColor:Color.white,marginHorizontal:20,shadowColor:Color.maroon800,shadowOffset:{width:0,height:5},shadowOpacity:0.8,shadowRadius:2,elevation:3,borderBottomLeftRadius:50,borderTopRightRadius:50,alignItems:"center",marginBottom:5,}}>
      <View style={{width:90,height:90,backgroundColor:Color.white,marginTop:30,borderRadius:35,shadowColor:"black",shadowOffset:{width:0,height:3},shadowOpacity:0.5,shadowRadius:2,elevation:3,}}>
      <Image style={{width:'100%',height:"100%"}}resizeMode="repeat" source={require("../assets/Image/moov.png")}/>
        </View>
  </View>
<View style={{marginTop:25,marginLeft:-140}}>
  <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:18}}>Moov</Text>
  <Text style={{color:"black",fontFamily:"Roboto-Medium",fontSize:10}}>500gm</Text>
</View>
<TouchableOpacity onPress={() => {onLikePost(_id);}}>
<LottieView   ref={animation} loop={false}  autoPlay={false} style={{width:60,height:60,marginTop:2}} source={require('../assets/like.json')}/>
</TouchableOpacity>


<View style={{position:"absolute",bottom:10,flexDirection:"row",left:155}}>
 <View style={{width:80,height:30,flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:12,backgroundColor:Color.white,shadowColor:"black",shadowOffset:{width:0,height:3},shadowOpacity:0.5,borderRadius:5,elevation:5}}>
    <TouchableOpacity onPress={Decrement} style={{alignItems:"center",justifyContent:"center",flex:0.3,height:'100%'}}> 
    <Text style={{fontFamily:"Roboto-Medium",fontSize:21,}}>-</Text>
    </TouchableOpacity>

    <View style={{alignItems:"center",justifyContent:"center",flex:0.3}}> 
    <Text style={{fontFamily:"Roboto-Medium",fontSize:16,color:incrementvalue ? "green" :"black"}}>{incrementvalue}</Text>
    </View>

    <TouchableOpacity onPress={()=>dispatch(setincrementvalue(incrementvalue+1))} style={{alignItems:"center",justifyContent:"center",flex:0.3,height:'100%'}}> 
    <Text  style={{fontFamily:"Roboto-Medium",fontSize:16}}> +</Text>
    </TouchableOpacity>
   </View>

</View>
<View style={{position:"absolute",right:15,bottom:15,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
  <Text style={{color:"black",fontSize:18,fontFamily:"Roboto-Regular"}}> ₹</Text>
  <Text style={{color:"black",fontSize:15,fontFamily:"Roboto-Medium"}}> 140.00</Text>
  </View>
  </View>
  
  <View style={{marginTop:windowHeight/5,marginHorizontal:windowWidth/20}}>
    <Text style={{fontFamily:"Roboto-Medium",color:"#A51010"}}>Got Coupon?</Text>
    <View style={{flexDirection:"row",width:"100%",marginTop:12}}>
       <TextInput style={{borderWidth:1,width:"75%",height:45,borderRadius:12,paddingHorizontal:20,fontFamily:"Roboto-Regular",fontSize:14,borderColor:"#A51010"}} placeholder="Enter Coupon Code" placeholderTextColor="#808080"/>
       <Ripple rippleColor='white'rippleDuration={800} rippleOpacity={0.8} style={{alignItems:'center',justifyContent:'center',backgroundColor:Color.maroon600,width:"20%",borderRadius:12,marginLeft:"5%"}}>
         <Text style={{color:"white",fontFamily:"Roboto-Medium"}}>Apply</Text>
       </Ripple>
      </View>

<View style={{marginTop:40,height:5,flexDirection:"row",borderRadius:30}}>
  <View style={{width:"10%",backgroundColor:"#EBCECE",flex:1,borderTopLeftRadius:30,borderBottomLeftRadius:30}}></View>
  <View style={{width:"80%",backgroundColor:"#A3201F",flex:1,opacity:0.5,}}></View>
  <View style={{width:"10%",backgroundColor:"#EBCECE",flex:1,borderTopRightRadius:30,borderBottomRightRadius:30}}></View>
  </View>

<View>
  <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:40,paddingHorizontal:12}}>
    <Text style={{...styles.billamnttxt}}>Sub Total</Text>
    <Text style={{...styles.billamnttxt}}>₹ 240.00</Text>
    </View>

    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,paddingHorizontal:12}}>
    <Text style={{...styles.billamnttxt}}>Tax</Text>
    <Text style={{...styles.billamnttxt}}>₹ 40.00</Text>
    </View>

    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,paddingHorizontal:12}}>
    <Text style={{...styles.billamnttxt}}>Sanjeevni Discount</Text>
    <Text style={{...styles.billamnttxt}}>₹ 140.00</Text>
    </View>

    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,paddingHorizontal:12}}>
    <Text style={{fontFamily:"Roboto-Medium",fontSize:16}}>Total</Text>
    <Text style={{fontFamily:"Roboto-Medium",fontSize:16}} >₹ 140.00</Text>
    </View>
</View>

  </View>
    </View>
  )
}
export default My_cart;

const styles = StyleSheet.create({
  billamnttxt:{
    color:"#808080",fontFamily:"Roboto-Medium",fontSize:15
  },billtype:{
      
  }
})