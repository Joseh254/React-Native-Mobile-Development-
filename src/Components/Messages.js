import React from 'react';
import { FlatList, StyleSheet, View,Text } from 'react-native';

const Messages = () => {
    const messages = [
    {
        id:1,
        tittle:"React  native list",
        
        message:"message goes here"
    }
]
    return (

        // flatlist is like lists in react that use .map
<FlatList
 data={messages}
 keyExtractor={message =>message.id.toString()}
 renderItem={({item})=><View>
<Text>{item.tittle}</Text>
<Text>{item.message}</Text>
 </View>}
/>
    );
}

const styles = StyleSheet.create({})

export default Messages;

