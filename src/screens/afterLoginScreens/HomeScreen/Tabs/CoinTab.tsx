import {FlatList, View} from 'react-native';
import ListHeader from '../../../../components/ListHeader';
import CoinDataRow from '../CoinDataRow';
import {useContext, useEffect, useMemo, useRef, useState} from 'react';
import { ListingRequest, State} from '../../../../models';
import {useDispatch, useSelector} from 'react-redux';
import {getListingData, setStart} from '../../../../redux/slices/home';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../../../context/AppContext';

const CoinTab = () => {
  const dispatch = useDispatch<any>();
  const homeState = useSelector((state: State) => state.homeReducer);
  const previousScroll = useRef<any>(0);
  const navigation = useNavigation();
  const {setValue} = useContext(AppContext);

  useEffect(() => {
    let params: ListingRequest = {
      start: 1,
      limit: 50,
    };
    dispatch(getListingData(params));
  }, []);

  const handleScroll = (event: any) => {
    const newScrollPosition = event.nativeEvent.contentOffset.y;
    if(newScrollPosition > previousScroll.current && newScrollPosition > 0) {
      setValue(false);
    }
    else if(newScrollPosition < previousScroll.current) {
      setValue(true)
    }
    previousScroll.current = event.nativeEvent.contentOffset.y;
  }

  const ListHeaderComp = useMemo(()=> {
    return(
      <ListHeader />
    )
  },[])
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={homeState?.cryptoList}
        renderItem={({item, index}) => (
          <CoinDataRow data={item} index={index} />
        )}
        ListHeaderComponent={ListHeaderComp}
        bounces={false}
        stickyHeaderIndices={[0]}
        onScroll={handleScroll}
      />
    </View>
  );
};

export default CoinTab;