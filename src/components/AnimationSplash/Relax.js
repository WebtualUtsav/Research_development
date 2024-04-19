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

export default function Relax() {
  return (
    <View>
      <Animated.View style={[animatedStyle, {marginBottom: 20}]}>
        <Image source={Images.Introduction} style={{width: '100%'}} />
      </Animated.View>
      <Animated.Text >Relax</Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({})