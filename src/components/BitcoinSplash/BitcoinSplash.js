import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

export default function BitcoinSplash() {
  const width = useWindowDimensions();
  const x = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  const data = [
    {
      id: 1,
      color: '#C1C',
      discription: 'lorem a tristique con la plate plate plate plate ',
    },
    {
      id: 2,
      color: '#C1C1',
      discription: 'lorem a tristique con la plate  plate plate plat ',
    },
    {
      id: 3,
      color: '#CCCC',
      discription: 'lorem a tristique con la plate plate plate plate ',
    },
    {
      id: 4,
      color: '#E32C',
      discription: 'lorem a tristique con la plate plate plate plate ',
    },
  ];

  return (
    <View style={{flex: 1}}>
      {/* <Logo/> */}
      {/* <AuthBtn/> */}
      <Animated.FlatList
        data={data}
        onScroll={onScroll}
        horizontal={true}
        pagingEnabled={true}
        bounces={false}
        viewabilityConfig={{
          minimumViewTime: 300,
          viewAreaCoveragePercentThreshold: 10,
        }}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: width.width,
                backgroundColor: item.color,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{flex: 1, fontSize: 20, color: 'white'}}>
                {index}{' '}
                {item.discription}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
