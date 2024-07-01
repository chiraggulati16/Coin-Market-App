import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../../utils';
import ScrollableTab from './ScrollTabs/ScrollableTab';

const HomeScreen = () => {
  
  return (
    <View style={styles.main}>
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
