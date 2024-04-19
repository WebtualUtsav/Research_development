import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {interpolate} from 'react-native-reanimated';
import {topHeight, SvgHeight, SvgWidth} from '../../Variables';
// import Illustrations from '../assets/illustration.svg';
import {withTimingTransition} from 'react-native-redash';

const Logo = ({zoom, hideandseek}) => {
  const hidewithease = withTimingTransition(hideandseek.current);
  const hidelogo = interpolate(hidewithease, {
    inputRange: [0, 0.5, 0.7, 1],
    outputRange: [1, 0, 0, 0],
  });

  return (
    <Animated.View
      style={{
        height: topHeight,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: 50,
        opacity: hidelogo,
      }}>
      <Animated.View
        style={{
          justifyContent: 'center',
          backgroundColor: '#fff',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontFamily: 'Gilroy-Bold',
            fontWeight: '300',
            paddingHorizontal: 5,
          }}>
          Welcome to Gdcoin your smart cryto exchange
        </Text>

        <View>
          <Animated.View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              transform: [{scale: zoom}],
            }}>
            <Illustrations height={SvgHeight} width={SvgWidth} />
          </Animated.View>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

Logo.propTypes = {};

export default Logo;