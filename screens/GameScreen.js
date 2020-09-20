import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Card from '../components/CardComponent'
import ClockCounter from "../components/ClockComponent";
import {SuccessButton, FailureButton, NextButton} from "../components/ActionButtons";
import ScoreCard from "../components/ScoreCard";
import {db} from "../database/db";

export default function GameScreen({route, navigation}) {
    const config = route.params;

    const [round, updateRound] = useState(1);
    const [isPlaying, setPlaying] = useState(false);
    const [cards, updateCards] = useState([]);
    const [team1, updateTeam1] = useState(0);
    const [team2, updateTeam2] = useState(0);


    function SuccessButton() {
        return (
            <View style={styles.successButton}>
                 <TouchableOpacity onPress={successPressed}>
                    <Text style={styles.buttonText}>Got it!</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function FailureButton(props) {
        return (
            <View style={styles.failButton}>
                 <TouchableOpacity onPress={skipPressed}>
                    <Text style={styles.buttonText}>Skip</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function NextButton() {
        return (
            <View style={styles.nextButton}>
                <TouchableOpacity onPress={nextPressed}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }



    const skipPressed = () => {
        console.log('skip')
    }

    const successPressed = () => {
        console.log('add')
    }

    const nextPressed = () => {
        console.log('next')
        updateRound(round + 1);
        console.log(round)
    }

    const refreshCards = () => {
        // get 5 new cards from database to pass to cards component
        const cards = [];
        for (let i=0; i < 12; i++) {
            const r = Math.random() * 12 - 1;
            cards.push(db[r]);
        }
        // Mongo API call will go here
    }

    return (
        <View style={styles.view}>
            <ClockCounter t={config.time} setPlaying={setPlaying}/>
            <ScoreCard />
            <Text>Team 1: {team1}</Text>
            <Text>Team 2: {team2}</Text>
            <Card songs = {db}/>

            <View style={styles.instructions}>

            </View>

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
    },
    instructions: {

    },
    successButton: {
        backgroundColor: 'green',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        width: 200,
        height: 50,
        borderColor: 'black',
        justifyContent: 'center',
    },
    failButton: {
        backgroundColor: 'red',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 200,
        height: 50,
        borderColor: 'black',
        justifyContent: 'center',

    },
    nextButton: {
        backgroundColor: 'orange',
        borderRadius: 10,
        width: 400,
        height: 50,
        justifyContent: 'center',

    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})