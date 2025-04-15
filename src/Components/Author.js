import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";

const Author = ({ image, name, details }) => {
  return (
    <View style={styles.conatiner}>
      <Image style={styles.image} source={image} />

      <View>
        <AppText>{name}</AppText>
        <AppText>{details}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: "10%",
    borderRadius: "5%",
  },
});

export default Author;
