import React, {useState} from "react";
import {View, StyleSheet, Button, Text, TouchableOpacity} from "react-native";
// import {NotificationIcon} from "./VisualObjects";

export default function CustomSongButton(props){
    // console.log(props)
    return (
            <TouchableOpacity style={styles.button}>
                    <Text style={styles.song}>{props.songName}</Text>
                    <Text>{props.artistName}</Text>
            </TouchableOpacity>
            
    )
}


export function CustomSubmitButton(props){
    console.log(props)
    return (
        <TouchableOpacity style={styles.button2}>
                <Text style={styles.song}>{props.title}</Text>
        </TouchableOpacity>
        
)
}


const styles= StyleSheet.create({
    button: {
        backgroundColor: "white",
        elevation: 3,
        height: 80,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        margin: "2%",
        color: "black",
        // textAlign: "center",
        // alignItems: "center"
    },
    song: {
        fontSize: 20
    },
    button2: {
        backgroundColor: "white",
        elevation: 3,
        height: 80,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        margin: "2%",
        color: "black",
        textAlign: 'center'
    }
})
