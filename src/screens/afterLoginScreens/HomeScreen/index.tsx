import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderWithSearch from '../../../components/HeaderWithSearch';
import Labels from '../../../localization/localization';
import {Colors} from '../../../utils';
import ScrollableTab from './ScrollTabs/ScrollableTab';
import GlobalMarket from '../../../components/GlobalMarket/GlobalMarket';

const HomeScreen = () => {
  
  return (
    <View style={styles.main}>
      <HeaderWithSearch headerTitle={Labels.MARKETS} />
      <GlobalMarket/>
      <ScrollableTab/>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.light.grey,
  },
});

export default HomeScreen;
