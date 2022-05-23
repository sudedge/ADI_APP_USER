import React,{useEffect,useState} from 'react';
import {windowHeight,windowWidth} from '../utils/Dimension/index'
import { Color } from '../assets/Color';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,ImageBackground,TouchableHighlight
} from 'react-native';
import Ripple from 'react-native-material-ripple';
const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};

const slides = [
  {
    id: '2',
    image: require('../assets/Image/splashimg1.png'),
    title: 'Real Time Online Consultation',
    subtitle: 'Too busy to buy medicine? oder from Pharmacy at your doorstep.',
  },
  {
    id: '1',
    image: require('../assets/Image/splashimg1.png'),
    title: 'Order from the pharmacy',
    subtitle: 'Too busy to buy medicine? oder from Pharmacy at your doorstep.',
  },
  {
    id: '3',
    image: require('../assets/Image/splashimg1.png'),
    title: 'Book Your Ambulance',
    subtitle: 'Book Your different types of ambulances associated with ADI group',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center',flex:1,width:windowWidth}}>
      <ImageBackground
        imageStyle={{resizeMode:"cover"}}
        source={item?.image}
        style={{height: '100%',width:"100%",alignItems:"center",justifyContent:"center"}}
      >
           <View style={{marginTop:100}} >
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
          </ImageBackground>
     
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.28,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 45,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: Color.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 90}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height:120,alignItems:"center",justifyContent:"center"}}>
             <Ripple onPress={()=>navigation.navigate("splash3")} rippleDuration={800} rippleOpacity={1}  rippleColor={Color.white}  style={{...styles.btn,backgroundColor:"transparent",borderWidth:1,borderColor:Color.white,width:windowWidth/1.5,shadowOffset:{width:5,height:2},shadowRadius:2,shadowOpacity:0.2,shadowColor:"white",padding:10}}>
               <Text  style={{fontFamily:'Roboto-Medium', fontSize: 16,color:Color.white}}>Login</Text>
             </Ripple>

             <Ripple onPress={()=>navigation.navigate("splash2")} rippleDuration={800} rippleOpacity={1}   rippleColor={Color.white}  style={{...styles.btn,backgroundColor:"transparent",borderWidth:1,borderColor:Color.white,width:windowWidth/1.5,shadowOffset:{width:5,height:2},shadowRadius:2,shadowOpacity:0.2,shadowColor:"white",padding:10,marginTop:10}}>
               <Text  style={{fontFamily:'Roboto-Medium', fontSize: 16,color:Color.white}}>Sign Up</Text>
             </Ripple>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: Color.white,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };
  const [BtnColor, setBtnColor] = useState("white");
  const [BtnColor1, setBtnColor1] = useState("white");
  return (
    <ImageBackground source={require("../assets/Image/splashimg1.png")} style={{ flex:1}}>
      <StatusBar hidden translucent backgroundColor="transparent" barStyle="light-content" />
      
      <FlatList
      bounces={false}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: windowHeight }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
     <Footer />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color:  Color.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
    fontFamily:"Roboto-Regular"
  },
  title: {
    color: Color.white,
    fontSize: 22,
   fontFamily:"Roboto-Bold",
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;