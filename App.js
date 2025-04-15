import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyAppLearn from './src/Components/MyAppLearn';
import Card from './src/Components/Card';
import Author from './src/Components/Author';
const App = () => {
 
  return (
    <View style={{backgroundColor:"#f8f4f4",flex:1}}>
      {/* <MyAppLearn/> */}
      <Card
      image={require("./src/assets/jacket.webp")}      
      subTittle={"$ 100"}
      tittle={"red jacket"} 
      
      />
      <Author
      image={require('./src/assets/person.jpeg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({

})

export default App;
