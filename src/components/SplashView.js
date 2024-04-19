// import {
//   Image,
//   StyleSheet,
//   Text,
//   Touchable,
//   TouchableOpacity,
//   View,
//   useWindowDimensions,
// } from 'react-native';
// import React, { useCallback, useEffect, useState } from 'react';
// import Images from '../constant/Images';
// import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
// import Animation from './AnimationSplash/Animation';
// import Care from './AnimationSplash/Care';
// import MoodDairy from './AnimationSplash/MoodDairy';
// import Relax from './AnimationSplash/Relax';
// import CenterNext from './AnimationSplash/CenterNext';
// import Welcome from './AnimationSplash/Welcome';

// export default function SplashView() {
//     const window = useWindowDimensions();
//     const [currentPage, setCurrentPage] = useState(0);
//     const animationController = useSharedValue(0);
//     useEffect(() => {
//         animationController.value = 0;
//       }, []);

//       const onNextClick = useCallback(() => {
//         animationController.value = Math.min(animationController.value + 0.2, 0.8);
//       }, [animationController]);

//       const onBackClick = useCallback(() => {
//         animationController.value = Math.max(animationController.value - 0.2, 0);
//       }, [animationController]);

//       const onSkipClick =
//       (() => {
//         animationController.value = 0.8;
//       }, [animationController]);

//   return (
//     <View style={{backgroundColor: 'rgb(245, 235, 226)', flex: 1}}>
//       <Animation  onNextClick={onNextClick} animationController={animationController}/>
//       <CenterNext />

//       <Animated.View style={[styles.scenesContainer]}>
//         <Relax animationController={animationController} />

//         <Care animationController={animationController} />

//         <MoodDairy animationController={animationController} />

//         <Welcome animationController={animationController} />
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     scenesContainer: {
//         justifyContent: 'center',
//         // ...StyleSheet.absoluteFillObject,
//       },
// });

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {navigate} from './RootNavigation';
import Translate from './Localization/Translate';

export default function SplashView() {
  console.log('Translate', Translate);
  return (
    <View style={{paddingHorizontal: 20}}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigate('AnimationSplash');
        }}>
        <Text style={styles.text}>
          {Translate.t('splashview')}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigate('ScreenOne');
        }}>
        <Text style={styles.text}>React native paper</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigate('Home');
        }}>
        <Text style={styles.text}>Details Animation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigate('OnboardingScreen');
        }}>
        <Text style={styles.text}>On Boarding Splash</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigate('OnboardingScreen2');
        }}>
        <Text style={styles.text}>On Boarding Splash2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigate('Localization');
        }}>
        <Text style={styles.text}>Localization</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigate('BitCoinSplash');
        }}>
        <Text style={styles.text}>BitCoin Splash</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    backgroundColor: '#BED7DC',
    marginVertical: 20,
    borderRadius: 20,
  },
  text: {color: 'black', fontSize: 19, paddingHorizontal: 20},
});
