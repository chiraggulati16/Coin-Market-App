import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import CoinDataRow from "./CoinDataRow";
import { Images } from "../../../assets/ImageProperties";

const HomeScreen = () => {
    const [marketData, setMarketData] = useState([]);

    useEffect(() => {

    },[])
    return (
      <View style={styles.main}>
         
       
      </View>
    )
};

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor: "yellow"   
  },
  });


export default HomeScreen