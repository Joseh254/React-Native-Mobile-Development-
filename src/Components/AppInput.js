import React from 'react';
import { StyleSheet, TextInput, View,Platform, Text } from 'react-native';

// reusable text input
const AppInput = ({icon,...otherProps}) => {
    return (
        <View style={styles.container}>
           {icon && < Text>{icon}</Text> }
           <TextInput style={styles.Input} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderColor:"grey",
        padding:15,
        marginVertical:10,
        alignItems:"center",
        flexDirection:"row",
        width:"100%",
    borderRadius:25,
    },
    Input:{
fontSize:18,
   fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})

export default AppInput;
