import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {interpolate, SpringUtils} from 'react-native-reanimated';
import {bottomHeight, SvgBtnWidth, SCREEN_HEIGHT} from '../../Variables';
// import YellowL from '../assets/yellowL.svg';
// import WhiteL from '../assets/whiteL.svg';
import PropTypes from 'prop-types';
import {TapGestureHandler} from 'react-native-gesture-handler';
import {withSpringTransition} from 'react-native-redash';

const AuthBtn = ({hideandseek, gestureHandler}) => {
  const bounceAnime = withSpringTransition(hideandseek.current, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(20),
  });

  const translateY = interpolate(bounceAnime, {
    inputRange: [0, 0.5, 0.7, 1],
    outputRange: [0, 0, -SCREEN_HEIGHT, -SCREEN_HEIGHT],
  });

  return (
    <Animated.View
      style={{
        alignItems: 'center',
        width: '100%',
        height: bottomHeight,
        paddingTop: 37,
        transform: [{translateY}],
      }}>
      <Animated.View>
        <TapGestureHandler {...gestureHandler}>
          <Animated.View>
            <Animated.View
              style={{
                display: 'flex',
                alignItems: 'center',
                marginVertical: 25,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  ...StyleSheet.absoluteFill,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <YellowL height={130} width={SvgBtnWidth} />
              </View>
              <Text
                style={{
                  fontFamily: 'Gilroy-ExtraBold',
                  color: '#fff',
                  fontSize: 23,
                }}>
                Register
              </Text>
            </Animated.View>

            <Animated.View
              style={{
                display: 'flex',
                alignItems: 'center',
                marginVertical: 26,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  ...StyleSheet.absoluteFill,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <WhiteL height={130} width={SvgBtnWidth} />
              </View>
              <Text
                style={{
                  fontFamily: 'Gilroy-ExtraBold',
                  color: '#000',
                  fontSize: 23,
                }}>
                Login
              </Text>
            </Animated.View>
          </Animated.View>
        </TapGestureHandler>

        <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 15}}>
          Read terms and conditions
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

AuthBtn.propTypes = {};

export default AuthBtn;