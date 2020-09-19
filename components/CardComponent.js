import React, {useState} from "react";
import {View, StyleSheet, Button, Text} from "react-native";
// import {NotificationIcon} from "./VisualObjects";
// import {accessDb} from '../database/accessDb'
import CustomButton from '../components/CustomButton';

export default function Card(props){

    return (
        <View>
            <View style={styles.tileContainer}>
                <CustomButton></CustomButton>
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
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
})
