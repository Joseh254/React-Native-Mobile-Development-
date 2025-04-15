import React from "react";
import { Image, StyleSheet, View, Platform, StatusBar } from "react-native";
import AppText from "./AppText";

const Card = ({ image, subTittle, tittle }) => {
  return (
    <View style={styles.card}>
      <Image resizeMode="contain" source={image} style={styles.image} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.tittle}>{tittle}</AppText>
        <AppText style={styles.subTittle}>{subTittle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    marginHorizontal: 10,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 3 : 6,
  },
  image: {
    width: "100%",
    height: 150,
    padding: 5,
  },
  detailsContainer: {
    padding: 10,
  },
  tittle: {
    marginBottom: 7,
  },
  subTittle: {
    color: "green",
  },
});

export default Card;
