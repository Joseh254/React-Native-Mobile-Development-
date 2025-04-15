import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const AppText = ({children,style}) => {
  return <Text style={[styles.text,style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: Platform.OS === "android" ? 13 : 12,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "black",
    textTransform:"capitalize"
  },
});

export default AppText;
