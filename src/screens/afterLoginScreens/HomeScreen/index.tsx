import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import HeaderWithSearch from '../../../components/HeaderWithSearch';
import Labels from '../../../localization/localization';
import ListHeader from '../../../components/ListHeader';
import {Colors} from '../../../utils';
import {ListingData, ListingRequest, State} from '../../../models';
import {useDispatch, useSelector} from 'react-redux';
import CoinDataRow from './CoinDataRow';
import { getListingData, setStart } from '../../../redux/slices/home';

const HomeScreen = () => {
  const [marketData, setMarketData] = useState<ListingData[]>([]);
  const dispatch = useDispatch<any>();
  const homeState = useSelector((state: State) => state.homeReducer);

  useEffect(() => {
    let params: ListingRequest = {
      start : homeState?.start,
      limit: 50
    }
    dispatch(getListingData(params))
  },[homeState?.start])

  const loadMoreData = () => {
    if(homeState?.totalCount > homeState?.start) {
      let start = homeState?.start +50;
      dispatch(setStart(start));
    }
  }
  return (
    <View style={styles.main}>
      <HeaderWithSearch headerTitle={Labels.MARKETS} />
      <ListHeader />
      <FlatList
        data={homeState?.cryptoList}
        renderItem={({item, index}) => <CoinDataRow data={item} index={index}/>}
        onEndReached={loadMoreData}
      />
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
