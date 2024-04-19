import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../constant/Images';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import Relax from './Relax';

export default function Animation({animationController}) {
  console.log("🚀 ~ Animation ~ animationController:", animationController)
  const [renderRelax, setRenderRelax] = useState(false);
  const translateY = useSharedValue(0); // Shared value for translateY
  const window = useWindowDimensions();
  console.log('🚀 ~ Animation ~ window:', window);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const onNextClick = () => {
    translateY.value = withSpring(-window.height, {damping: 20});

    setTimeout(() => {
      setRenderRelax(true);
    }, 500);
  };

  return (
    // <View>
    //   <Image source={Images.Introduction} style={{width: '100%'}} />
    //   <TouchableOpacity
    //     style={{
    //       backgroundColor: 'lightblue',
    //       alignSelf: 'center',
    //       overflow: 'hidden',
    //       padding: 10,
    //       borderRadius: 10,
    //       marginHorizontal: 10,
    //     }}
    //     onPress={() => onNextClick()}
    //     >
    //     <Text>Let's Begin</Text>
    //   </TouchableOpacity>
    // </View>
    <View>
      <Animated.View style={[animatedStyle, {marginBottom: 20}]}>
        <Image source={Images.Introduction} style={{width: '100%'}} />
      </Animated.View>
      {renderRelax && <Relax />}
      <TouchableOpacity
        style={{
          backgroundColor: 'lightblue',
          alignSelf: 'center',
          overflow: 'hidden',
          padding: 10,
          borderRadius: 10,
          marginHorizontal: 10,
        }}
        onPress={() => onNextClick()}>
        <Text>Let's Begin</Text>
      </TouchableOpacity>
      {/* Render the Relax component when needed */}
    </View>
  );
}

const styles = StyleSheet.create({});
