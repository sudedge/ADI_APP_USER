import {StyleSheet} from 'react-native'
import {Color} from '../../assets/Color'
import {windowHeight,windowWidth} from "../Dimension/index"
export default StyleSheet.create({
    CustomFont: {
        fontFamily: 'Roboto-Bold',
        fontSize:24,color:Color.maroon400
    },
    ButtonText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        color:Color.white,fontWeight:"400",
    },
    btncontainer:{
        shadowRadius:15,shadowOpacity:0.6,shadowColor:Color.maroon600,shadowOffset:{width:10,height:2},borderRadius:8,borderColor:"#D08181",borderWidth:2.5,width:windowWidth/1.08,height:55,marginTop:30,alignItems:"center",justifyContent:"center",
    },
    title:{
     fontSize:28,fontFamily:"Roboto-Bold",color:Color.maroon50
    },
    heading:{
        fontSize:24,fontFamily:"Roboto-Medium"
    },
    subheading:{
        fontSize:24,fontFamily:"Roboto-Medium",color:Color.maroon600,marginTop:10
    },
    headofsubhead:{
        fontSize:13,fontFamily:"Roboto-Medium",color:"black",marginTop:4
    }
});