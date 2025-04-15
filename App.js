import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyAppLearn from './src/Components/MyAppLearn';
import Card from './src/Components/Card';
import Author from './src/Components/Author';
import Messages from './src/Components/Messages';
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
      name={"Joseph Mbugua"}
      details={"Affordable warm amarican jacket"}
      />
      <Messages/>
    </View>
  );
}

const styles = StyleSheet.create({

})

export default App;
