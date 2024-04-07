import React, {useCallback, useState} from 'react';
import {Dimensions, Platform, View} from 'react-native';
import {styles} from './styles';
import {FlashList} from '@shopify/flash-list';
import Labels from '../../../localization/localization';
import IntroListItem from '../../../components/IntroListItem';
import OnboardingFooter from './OnboardingFooter';
import SliderDots from '../../../components/SliderDots';
import {verticalScale} from 'react-native-size-matters';
import { IntroDataModel } from '../../../models';
import { Images } from '../../../assets/ImageProperties';


let data: IntroDataModel[] = [
  {
    icon: Images.Logo,
    heading: Labels.ONBARDING_1_HEADING,
    description: Labels.ONBOARDING_1_BODY,
    type: 0,
  },
  {
    icon: Images.Onboarding1,
    heading: Labels.ONBARDING_2_HEADING,
    description: Labels.ONBOARDING_2_BODY,
    type: 1,
  },
  {
    icon: Images.Onboarding2,
    heading: Labels.ONBARDING_3_HEADING,
    description: Labels.ONBOARDING_3_BODY,
    type: 1,
  },
  {
    icon: Images.Onboarding3,
    heading: Labels.ONBARDING_4_HEADING,
    description: Labels.ONBOARDING_4_BODY,
    type: 1,
  },
];

const {width, height} = Dimensions.get('window');

const Intro = (props: any) => {
  const [index, setIndex] = useState(0);

  const onScroll = useCallback((event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (!isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  return (
    <View style={styles.conntainer}>
      <View
        style={{
          height: height - verticalScale(Platform.OS === 'android' ? 170 : 230),
        }}>
        <FlashList
          data={data}
          renderItem={({item}) => {
            return <IntroListItem data={item} />;
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          estimatedItemSize={30}
          estimatedListSize={styles.listStyle}
          pagingEnabled
          snapToAlignment="start"
          decelerationRate={'fast'}
          removeClippedSubviews
          snapToInterval={width}
          disableIntervalMomentum={true}
          scrollEventThrottle={16}
          onScroll={onScroll}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <SliderDots data={data} dotPosition={index} />
        </View>
      </View>

      <OnboardingFooter />
    </View>
  );
};

export default Intro;
