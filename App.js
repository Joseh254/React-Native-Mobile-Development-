import { StyleSheet, Text, View, SafeAreaView, Image,Alert,TouchableWithoutFeedback,TouchableOpacity,Button } from 'react-native';


export default function App() {
  function handlePress(){
    console.log("you pressed a text");
   Alert.alert("you pressed a text") 
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title} onPress={handlePress}>Helloo Joseph  mbugua👋</Text>
        <TouchableOpacity onPress={()=>console.log("you pressed an image")}>
{/* replace touchables to see the effect on image  */}
       <Image 
       blurRadius={1}
       fadeDuration={2000}
       source={require("./assets/image.jpeg")}
       />
        </TouchableOpacity>

           <Button
       color={"orange"}
       title='Click here to alert'
       onPress={()=>Alert.alert("Title","message goes here",[{text:"yes",onPress:()=>console.log("you pressed yes")
       },{text:"no",onPress:()=>console.log("You pressed no")
       }])}
       />
      <Text onPress={()=>Alert.prompt("Title here","message here",text=>(console.log(text)
      ))}>press here to prompt</Text>
      </View>

   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});
