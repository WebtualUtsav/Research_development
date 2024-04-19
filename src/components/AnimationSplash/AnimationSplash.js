import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import Animation from './Animation'
import Relax from './Relax'

export default function AnimationSplash() {
  const animationController = useRef(0);
 
  const relaxTranslateY = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [window.height, 0, 0, 0, 0],
  });


  return (
    <Animated.View
      style={{ flex: 1, transform: [{ translateY: splashTranslateY 
      }] }}
    >
      <Animation animationController={animationController} />
      <Relax/>
    </Animated.View>
  )
}

const styles = StyleSheet.create({})