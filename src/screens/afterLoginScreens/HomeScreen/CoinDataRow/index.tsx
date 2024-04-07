import React, { Component } from "react";
import { Text, View } from "react-native";

const CoinDataRow = ({data} : any)=> {

    return(
        <View style={{height: 40, width: "100%"}}>
            <Text style={{color: "#000"}}>
                {data?.name}
            </Text>

            <Text style={{color: "#000"}}>
                {data?.quote?.USD?.price}
            </Text>

        </View>
    )
}

export default CoinDataRow