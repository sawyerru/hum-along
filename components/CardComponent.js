import React, {useState} from "react";
import {View, StyleSheet, Button, Text, FlatList, ScrollView} from "react-native";
// import {NotificationIcon} from "./VisualObjects";
// import {accessDb} from '../database/accessDb'
import CustomSongButton from '../components/CustomButton';

export default function Card(props){

    return (
        <View style={styles.tileContainer}>
            <FlatList 
                data={props.songs}
                renderItem={( { item } ) => (
                    <CustomSongButton songName = {item.title} artistName = {item.artist}></CustomSongButton>
                )}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    tileContainer: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#ffee93',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginHorizontal: 4,
    },
})
