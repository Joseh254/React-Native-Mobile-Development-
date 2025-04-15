import React from 'react';
import { StyleSheet, View } from 'react-native';
import jacket from "./src/assets/image.jpeg"
import MyAppLearn from './src/Components/MyAppLearn';
import Card from './src/Components/Card';
const App = () => {
  return (
    <View>
      {/* <MyAppLearn/> */}
      <Card
      image={require("./src/assets/image.jpeg")}      
      subTittle={"somee description here"}
      tittle={"red hacket"}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({

})

export default App;
