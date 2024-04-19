import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashView from '../components/SplashView';
import ScreenOne from '../components/Screen1';
import { navigationRef } from '../components/RootNavigation';
import Detail from '../components/src/screen/Detail';
import Home from '../components/src/screen/Home';
import AnimationSplash from '../components/AnimationSplash/AnimationSplash';
import BitcoinSplash from '../components/BitcoinSplash/BitcoinSplash';
import OnboardingScreen from '../components/OnBoarding/OnboardingScreen';
import BoardingScreenTwo from '../components/OnBoarding2/BoardingScreenTwo';
import Localization from '../components/Localization/Localization';

const Stack = createNativeStackNavigator();
export default function AppStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashView} />
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="AnimationSplash" component={AnimationSplash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="OnboardingScreen2" component={BoardingScreenTwo} />
        <Stack.Screen name="BitCoinSplash" component={BitcoinSplash} />
        <Stack.Screen name="Localization" component={Localization} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
