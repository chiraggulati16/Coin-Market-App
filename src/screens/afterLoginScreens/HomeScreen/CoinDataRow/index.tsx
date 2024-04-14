import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { CoinRowProps, ListingData } from "../../../../models";
import { styles } from "./styles";
import { ApiUrl } from "../../../../service/apiConfig";
import { formatNumber } from "../../../../utils/utils";
import { Colors } from "../../../../utils";
import { ImageHandler } from "../../../../service/ImageHandler";


const CoinDataRow = ({data, index} : CoinRowProps)=> {

    return(
        <View style={styles.container}>
      <Text style={styles.rankingNo}>{index+1}</Text>
      <View style={styles.nameContainer}>
        <ImageHandler urlSuffix={`${data?.id}.png`}
        styling={styles.icon}/>
        <View style={styles.symbolContainer}>
            <Text style={styles.name}>{data?.symbol}</Text>
            <Text style={styles.marketCap}>{"$ "+formatNumber(data?.quote?.USD?.market_cap)}</Text>
        </View>
      </View>
      
      <Text style={styles.price}>{"$ "+data?.quote?.USD?.price.toFixed(2)}</Text>

      <View style={styles.volChangeContainer}>
      <ImageHandler urlSuffix={`${data?.id}.svg`} styling={styles.iconSvg}/>
        <Text style={[styles.volChange,{
        color: data?.quote?.USD?.percent_change_24h > 0 ? Colors.light.green :
        Colors.light.red
      }]}>{data?.quote?.USD?.percent_change_24h.toFixed(2)+"%"}</Text>
      </View>
      
    </View>
    )
}

export default CoinDataRow