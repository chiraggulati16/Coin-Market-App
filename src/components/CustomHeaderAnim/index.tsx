import {useContext} from 'react';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {AppContext} from '../../context/AppContext';
import {View} from 'react-native';

const HeaderAnimation = ({children, headerHeight}: any) => {
  const {value} = useContext(AppContext);

  const header = useSharedValue(!value ? 0 : headerHeight);

  header.value = withSpring(!value ? 0 : headerHeight, {
    damping: 25,
    stiffness: 100,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
  });

  const translateY = useSharedValue(value ? 0 : -headerHeight);

  translateY.value = withSpring(value ? 0 : -headerHeight, {
    damping: 25,
    stiffness: 100,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
  });

  return (
    <Animated.View style={{transform: [{translateY}], height: header}}>
      <View style={{display: 'flex', justifyContent: 'center'}}>
        {children}
      </View>
    </Animated.View>
  );
};

export default HeaderAnimation;
