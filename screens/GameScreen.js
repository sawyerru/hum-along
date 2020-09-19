import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../components/CardComponent'
import ClockCounter from "../components/ClockComponent";
import {SuccessButton, FailureButton} from "../components/ActionButtons";
import ScoreCard from "../components/ScoreCard";


export default function GameScreen({navigation}) {
    return (
        <View>
            <ClockCounter />
            <ScoreCard />
            <Card />

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