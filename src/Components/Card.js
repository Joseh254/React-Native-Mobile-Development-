import React from "react";
import { Image, StyleSheet, View, Platform, StatusBar } from "react-native";
import AppText from "./AppText";

const Card = ({ image, subTittle, tittle }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={styles.detailsContainer}>
        <AppText styles={styles.tittle}>{tittle}</AppText>
        <AppText>{subTittle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 3 : 6,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  tittle:{
    marginBottom:7
  }
});

export default Card;
