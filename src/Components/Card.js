import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Text,

} from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import AppText from "./AppText";
import AppInput from "./AppInput";

const Card = ({ image, subTittle, tittle, icon }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Image resizeMode="contain" source={image} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <AppText style={styles.tittle}>{tittle}</AppText>
        <AppText style={styles.subTittle}>{subTittle}</AppText>
        <AppText style={styles.icon}>{icon} </AppText>
      </View>
    <Text>Name</Text>
      <AppInput placeholder="Your name:" icon={<AntDesign name="lock" size={24} color="black" />}/>
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
  icon: {
    color: "red",
    marginTop: 5,
  },
  input:{
    borderBottomColor:"orange",
    borderBottomWidth:1
  }
});

export default Card;
