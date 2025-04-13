// Importing necessary React Native components
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  Alert, 
  TouchableOpacity, 
  Button ,
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';

export default function App() {
  // Function triggered when the text is pressed
  function handlePress() {
    console.log("you pressed a text");
    Alert.alert("you pressed a text");
  }
// console.log("StatusBar height:", StatusBar.currentHeight);  get the height of status bar or notch
// console.log(Dimensions.get("screen"));   screen is entire screen size
console.log(Dimensions.get);




// Density Indipendent pixels  DIPS
// physical pixels = dips * scale factor

// EXAMPLE
// IPHONE MODEL 4,4S

// Points 320 X 480
// Scale Factor 2X
// Pixels  640 X 960 (points*scale Factor)

// if you set width of 150,,actual width will be 150*2=300
  return (
    // SafeAreaView ensures content does not overlap with notches or system UI
    <SafeAreaView style={styles.safeArea}>

      {/* Main container that centers children */}
      <View style={styles.container}>

        {/* Tappable Text that shows an alert when pressed */}
        <Text style={styles.title} onPress={handlePress}>
          Helloo Joseph Mbugua 👋
        </Text>

        {/* TouchableOpacity makes the image pressable */}
        <TouchableOpacity onPress={() => console.log("you pressed an image")}>
          {/* Image with blur and fade effect */}
          <Image 
            blurRadius={1}                    // Blurs the image slightly
            fadeDuration={2000}               // Image fades in over 2 seconds
            source={require("./assets/image.jpeg")} // Loads local image from assets folder
            style={styles.image}              // Applies styling to the image
          />
        </TouchableOpacity>

        {/* Button that triggers an alert with Yes/No options */}
        <Button
          color={"orange"}                     // Button color
          title='Click here to alert'          // Button text
          onPress={() =>
            Alert.alert(
              "Title",                         // Alert title
              "message goes here",             // Alert message
              [
                { text: "yes", onPress: () => console.log("you pressed yes") }, // "Yes" action
                { text: "no", onPress: () => console.log("You pressed no") }    // "No" action
              ]
            )
          }
        />

        {/* Text that triggers a prompt (only works on iOS) */}
        <Text onPress={() =>
          Alert.prompt(
            "Title here",                      // Prompt title
            "message here",                    // Prompt message
            text => console.log(text)          // Logs user input
          )
        }>
          press here to prompt if you are on Ios
        </Text>
        {/* Note: Alert.prompt only works on iOS devices */}

      </View>
    </SafeAreaView>
  );
}

// Stylesheet for the app
const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Takes up the full screen height
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Avoid overlapping status bar on Android
  },
  container: {
    flex: 1, // Takes up full space within SafeAreaView
    // alignItems: "center", // Centers children horizontally
    // justifyContent: "center", // Centers children vertically
    // marginTop:Platform.OS==='android'? 20:0 or
   safeArea: {
  flex: 1,
},

  },
  title: {
    fontSize: 20,
    marginBottom: 20, // Adds space below the title text
  },
  image: {
    width: 300,         // Image width
    height: 200,        // Image height
    borderRadius: 10,   // Rounded corners
    marginBottom: 20,   // Adds space below the image
  },
});
