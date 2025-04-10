import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
 
  return (
    <View style={styles.container}>
      <Text >hello joseph</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"red",
    width:"100%"
  }
})
