import {Image, Text, View} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {scale, verticalScale} from 'react-native-size-matters';
import {styles} from './styles';
import {TabBarModel} from '../../models/TabBarModel';
import {Colors} from '../../utils';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const BOTTOMTABHEIGHT = verticalScale(50);

const AnimTabBar = (props: any) => {
  const {tabs, state} = props;

  const { value } = useContext(AppContext);

  const translateY = useSharedValue(!value ? 0 : BOTTOMTABHEIGHT);

  translateY.value = withSpring(!value ? 0  : BOTTOMTABHEIGHT, {
    damping: 10,
    stiffness: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
  });


  const renderTab = () => {
    return (
      <View style={styles.barContainer}>
        <View style={styles.tabRow}>
          {tabs.map((tab: TabBarModel, index: number) => {
            const label = tab.tabOptions.tabBarLabel;
            const isFocused = state?.index === index;

            return (
              <View style={styles.mainContainer} key={index}>
                <Image
                  source={tab.icon}
                  tintColor={
                    isFocused ? Colors.light.purple100 : Colors.light.grey400
                  }
                  style={{height: scale(18), width: scale(18)}}
                />
                <Text
                  style={[
                    styles.label,
                    {
                      color: isFocused
                        ? Colors.light.purple100
                        : Colors.light.grey400,
                    },
                  ]}>
                  {label}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };
  return (
    <Animated.View style={{height: translateY}}>
      {renderTab()}
    </Animated.View>
  );
};

export default AnimTabBar;
