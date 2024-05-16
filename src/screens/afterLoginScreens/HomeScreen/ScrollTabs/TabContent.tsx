import {Dimensions, Text, View} from 'react-native';
import Labels from '../../../../localization/localization';
import CoinTab from '../Tabs/CoinTab';
import { verticalScale } from 'react-native-size-matters';

interface TabContentProps {
  tab: string;
  content: any;
}
const TabContent = (props: TabContentProps) => {
  const width = Dimensions.get('window').width;

  const renderContent = () => {
    switch (props?.tab) {
      case Labels.COINS:
        return (
          <View style={{width: width, marginTop: verticalScale(10)}}>
            <CoinTab />
          </View>
        );
      case Labels.WATCHLIST:
        return (
          <View style={{width: width}}>
            <Text>Tab 2</Text>
          </View>
        );
      case Labels.OVERVIEW:
        return (
          <View style={{width: width}}>
            <Text>Tab 3</Text>
          </View>
        );
      case Labels.NFT:
        return (
          <View style={{width: width}}>
            <Text>Tab 4</Text>
          </View>
        );
      case Labels.EXCHANGES:
        return (
          <View style={{width: width}}>
            <Text>Tab 5</Text>
          </View>
        );
      case Labels.CHAINS:
        return (
          <View style={{width: width}}>
            <Text>Tab 6</Text>
          </View>
        );
      case Labels.CATEGORIES:
        return (
          <View style={{width: width}}>
            <Text>Tab 7</Text>
          </View>
        );

      default:
        return null;
    }
  };
  return renderContent();
};

export default TabContent;
