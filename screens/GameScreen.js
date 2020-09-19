import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../components/CardComponent'
import ClockCounter from "../components/ClockComponent";
import {SuccessButton, FailureButton} from "../components/ActionButtons";
import ScoreCard from "../components/ScoreCard";
import {db} from "../database/db";


export default function GameScreen({route, navigation}) {
    const config = route.params;
    // Randomization is happening - loading 5 new songs
    return (
        <View>
            <ClockCounter t={config.time}/>
            <ScoreCard />
            <Card songs = {db}/>

            <View style={styles.buttonContainer}>
                <FailureButton />
                <SuccessButton />
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
    }
})