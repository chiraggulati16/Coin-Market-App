import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderWithSearch from '../../../components/HeaderWithSearch';
import Labels from '../../../localization/localization';
import {Colors} from '../../../utils';
import ScrollableTab from './ScrollTabs/ScrollableTab';

const HomeScreen = () => {
  
  return (
    <View style={styles.main}>
      <HeaderWithSearch headerTitle={Labels.MARKETS} />
      <ScrollableTab/>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.light.secondary,
  },
});

export default HomeScreen;
