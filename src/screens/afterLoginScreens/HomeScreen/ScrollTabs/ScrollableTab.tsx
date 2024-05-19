import { useRef, useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import Labels from '../../../../localization/localization';
import {Colors, Fonts} from '../../../../utils';
import TabContent from './TabContent';

const ScrollableTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const flatListRef = useRef<any>(null);
  const contentRef = useRef<any>(null);

  const tabs = [
    Labels.COINS,
    Labels.WATCHLIST,
    Labels.OVERVIEW,
    Labels.NFT,
    Labels.EXCHANGES,
    Labels.CHAINS,
    Labels.CATEGORIES,
  ];

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
    flatListRef?.current.scrollToIndex({animated: true, index: index});
    if (selectedTab != index) {
      contentRef?.current.scrollToIndex({animated: false, index: index});
    }
  };
  const renderTabItem = ({item, index}: any) => {
    return (
      <Pressable
        key={index}
        onPress={() => handleTabChange(index)}
        style={[
          styles.tabContainer,
          index === selectedTab ? styles.selectedTabItem : null,
        ]}>
        <Text
          style={
            {color: index == selectedTab ? Colors.light.primary : Colors.light.grey500,
            fontFamily: index == selectedTab ? Fonts.poppins600 : Fonts.poppins400
          }}>
          {item}
        </Text>
      </Pressable>
    );
  };

  const renderBottomView = ({item}: any) => {
    return (
      <TabContent tab={item}/>
    );
  };

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setSelectedTab(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <FlatList
          ref={flatListRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tabs}
          renderItem={renderTabItem}
        />
      </View>
      <FlatList
        ref={contentRef}
        data={tabs}
        renderItem={renderBottomView}
        pagingEnabled
        horizontal
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: verticalScale(10)
  },
  scrollView: {
    flex: 1,
  },
  tabText: {
    fontFamily: Fonts.poppins400,
  },
  selectedTabItem: {
    borderBottomWidth: scale(2),
    borderBottomColor: Colors.light.purple100,
  },
  tabContainer: {
    marginHorizontal: scale(7),
    paddingVertical: verticalScale(2),
    borderBottomColor: Colors.light.purple100,
  },
});

export default ScrollableTab;
