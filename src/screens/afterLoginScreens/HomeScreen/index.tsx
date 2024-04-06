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
         
        <ImageBackground style={styles.image} source={Images.GoogleLogo} >
       
        {/* <Text style={styles.LogoText}>{strings.App_name}</Text> */}
        </ImageBackground>
        <View style={{
          position:"absolute", 
        top: 0, 
        bottom: 0,
        left: 0, 
        right: 0, 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        }}>
        <Image style={styles.LogoImage} 
        resizeMode={'contain'} 
        source={Images.Logo}/>
        </View>
      </View>
    )
};

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor: "yellow"   
  },
  image:{
    height: 300,
    width:"100%",
    alignContent:"center",
    justifyContent:"center"
  },
  LogoText:{
      color:"#53E88B",
      fontSize: 40,
      fontWeight: "400"

  },
  LogoImage:{
    width: 188,
    height:188,
    // alignContent:"center",
    // justifyContent:"center"
  }
  });


export default HomeScreen