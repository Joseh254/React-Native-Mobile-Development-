import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";

const Author = ({ image, name, details }) => {
  return (
    <View style={styles.conatiner}>
      <Image style={styles.image} source={image} />

      <View>
        <AppText style={styles.name}>{name}</AppText>
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
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  name: {
    textTransform: "capitalize",
    color: "gray",
  },

});

export default Author;
