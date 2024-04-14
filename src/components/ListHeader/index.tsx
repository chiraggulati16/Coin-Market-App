import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Labels from '../../localization/localization';

const ListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.rankingNo}>{Labels.HASH}</Text>
      <Text style={styles.name}>{Labels.MARKET_CAP}</Text>
      <Text style={styles.price}>{Labels.PRICE}</Text>
      <Text style={styles.volChange}>{Labels.VOL_CHANGE_24H}</Text>
    </View>
  );
};

export default ListHeader;
