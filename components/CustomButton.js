import React, {useState} from "react";
import {View, StyleSheet, Button, Text, TouchableOpacity} from "react-native";
// import {NotificationIcon} from "./VisualObjects";

export default function CustomButton(props){
    console.log(props)
    return (
            <TouchableOpacity style={styles.button}>
                <View>
                    <Text>{props.songName}</Text>
                    <Text>{props.artistName}</Text>
                </View>
            </TouchableOpacity>
            
    )
}

const styles= StyleSheet.create({
    button: {
        backgroundColor: "white",
        elevation: 3,
        height: "40%",
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        margin: "2.5%",
        color: "black",
        // textAlign: "center",
        // alignItems: "center"
    }
})
