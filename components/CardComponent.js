import React from "react";
import {View, StyleSheet, Button, Text} from "react-native";
import {NotificationIcon} from "./VisualObjects";

export default function Card(props){
    return (
        <View style={}>
            <View style={styles.tileContainer}>
                <Button title = "Song 1" ></Button>
                <Button title = "Song 2" ></Button>
                <Button title = "Song 3" ></Button>
                <Button title = "Song 4" ></Button>
                <Button title = "Song 5" ></Button>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    tileContainer: {
        marginHorizontal: 18,
        marginVertical: 10,
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