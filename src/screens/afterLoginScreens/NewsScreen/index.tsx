import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {NewsListModel, State} from '../../../models';
import NewsSingleItem from './NewsSingleItem';
import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsListingData } from '../../../redux/slices/news';
import { AppContext } from '../../../context/AppContext';

const NewsScreen = () => {

    const dispatch = useDispatch<any>();
    const {newsList} = useSelector((state: any) => state.newsReducer);
    const previousScroll = useRef<any>(0);
    const {setValue} = useContext(AppContext);
    useEffect(()=>{
        let param = {
            q: "cryptocurrency",
            apikey: ""
        }
        dispatch(getNewsListingData(param))
    },[])

  const renderNewsItem = ({item}: {item: NewsListModel}) => {
    return <NewsSingleItem data={item} />;
  };

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

  return (
    <View style={styles.mainContainer}>
      <FlatList
       bounces={false}
       data={newsList} renderItem={renderNewsItem} 
       onScroll={handleScroll}/>
    </View>
  );
};

export default NewsScreen;
