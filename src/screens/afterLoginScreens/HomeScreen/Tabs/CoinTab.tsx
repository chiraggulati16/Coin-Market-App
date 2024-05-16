import {FlatList, View} from 'react-native';
import ListHeader from '../../../../components/ListHeader';
import CoinDataRow from '../CoinDataRow';
import {useEffect} from 'react';
import { ListingRequest, State} from '../../../../models';
import {useDispatch, useSelector} from 'react-redux';
import {getListingData, setStart} from '../../../../redux/slices/home';

const CoinTab = () => {
  const dispatch = useDispatch<any>();
  const homeState = useSelector((state: State) => state.homeReducer);

  useEffect(() => {
    let params: ListingRequest = {
      start: homeState?.start,
      limit: 50,
    };
    dispatch(getListingData(params));
  }, [homeState?.start]);

  const loadMoreData = () => {
    if (homeState?.totalCount > homeState?.start) {
      let start = homeState?.start + 50;
      dispatch(setStart(start));
    }
  };

  return (
    <View>
      <ListHeader />
      <FlatList
        data={homeState?.cryptoList}
        renderItem={({item, index}) => (
          <CoinDataRow data={item} index={index} />
        )}
        onEndReached={loadMoreData}
      />
    </View>
  );
};

export default CoinTab;