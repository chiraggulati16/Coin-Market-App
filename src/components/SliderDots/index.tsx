import React, {useEffect} from 'react';
import {Animated, View} from 'react-native';
import { IntroDataModel } from '../../models';
import { Colors } from '../../utils';

interface SliderDotsProps {
  data: IntroDataModel[];
  dotPosition: number;
}
const SliderDots = ({data, dotPosition}: SliderDotsProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {data.map((item: any, index: number) => {
        return (
          <Animated.View
            key={`dot-${index}`}
            style={{
              borderRadius: 5,
              marginHorizontal: 4,
              height: 7,
              width: 7,
              backgroundColor: dotPosition == index ? Colors.light.purple100 : '#DDDDDD',
            }}
          />
        );
      })}
    </View>
  );
};

export default SliderDots;
