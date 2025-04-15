import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Globals from "../Globals/Globals";
import AppText from "../Components/AppText";

import AntDesign from "@expo/vector-icons/AntDesign";
const Home = () => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
      <AntDesign name="mail" size={24} color="white" />

      <AppText>some text</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    width: Globals.width,
    height: Globals.height,
  },
});

export default Home;
