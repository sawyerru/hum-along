import React, {useState} from "react";
import {View, StyleSheet, Button, Text, FlatList, ScrollView} from "react-native";
// import {NotificationIcon} from "./VisualObjects";
// import {accessDb} from '../database/accessDb'
import CustomSongButton from '../components/CustomButton';

export default function Card(props){

    return (
        <View style={styles.tileContainer}>
            {/* Do this 5 times */}
            {/* {console.log(props.songs)} */}
            <FlatList 
                data={props.songs}
                renderItem={( { item } ) => (
                    // console.log(item)
                    <CustomSongButton songName = {item.title} artistName = {item.artist}></CustomSongButton>
                )}
            />
            {/* <ScrollView>
                {props.songs.map(item => (
                    <CustomButton songName = {item.title} artistName = {item.artist}></CustomButton>
                ))}
            </ScrollView> */}
        </View>
    )
}

const styles= StyleSheet.create({
    tileContainer: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#18453b',
        // height: "70%",
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginHorizontal: 4,
        // marginVertical: 6,
    },
})
