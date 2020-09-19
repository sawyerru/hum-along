import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../components/CardComponent'
import ClockCounter from "../components/ClockComponent";
import {SuccessButton, FailureButton, NextButton} from "../components/ActionButtons";
import ScoreCard from "../components/ScoreCard";
import {db} from "../database/db";


export default function GameScreen({route, navigation}) {
    const [isPlaying, setPlaying] = useState(false);
    const config = route.params;

    useEffect( () => {

    });


    return (
        <View style={styles.view}>
            <ClockCounter t={config.time} setPlaying={setPlaying}/>
            <ScoreCard />
            <Card songs = {db}/>

            <View style={styles.buttonContainer}>
                {isPlaying && <FailureButton />}
                {isPlaying && <SuccessButton />}
                {!isPlaying && <NextButton />}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '20%'
    },
    view:{
        backgroundColor: "#18453b",
        height: "100%"
    }
})