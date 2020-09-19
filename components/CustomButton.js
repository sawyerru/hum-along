import React, {useState} from "react";
import {View, StyleSheet, Button, Text, TouchableOpacity} from "react-native";
// import {NotificationIcon} from "./VisualObjects";

export default function CustomButton(props){
    return (
        <TouchableOpacity>
            <View>
                <View style={styles.button}>
                    <Text>I am a Button</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    button: {
        backgroundColor: "white",
        elevation: 3,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: "black"
    },
    notify: {
        position: 'relative',
        elevation: 3,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        alignSelf: 'flex-end'
    }
})
