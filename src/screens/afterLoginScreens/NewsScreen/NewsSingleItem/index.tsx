import {Image, Text, View} from 'react-native';
import {NewsListModel} from '../../../../models';
import {styles} from './styles';
import {Images} from '../../../../assets/ImageProperties';
import {timeAgo} from '../../../../utils/utils';

interface NewsItemProps {
  data: NewsListModel;
}
const NewsSingleItem = (props: NewsItemProps) => {
  return (
    <View style={styles.mainContainer}>
      {props?.data?.image_url ? (
        <Image
          source={{uri: props?.data?.image_url}}
          resizeMode="cover"
          style={styles.poster}
        />
      ) : (
        <View style={styles.logoBg}>
          <Image source={Images.Logo} style={styles.logo} />
        </View>
      )}
      <Text style={styles.title} numberOfLines={2}>
        {props?.data?.title}
      </Text>
      <Text style={styles.desc} numberOfLines={2}>
        {props?.data?.description}
      </Text>
      <Text style={styles.datePost}>{timeAgo(props?.data?.pubDate)}</Text>
    </View>
  );
};

export default NewsSingleItem;
