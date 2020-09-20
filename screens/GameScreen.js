import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Card from '../components/CardComponent'
import ClockCounter from "../components/ClockComponent";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import {SuccessButton, FailureButton, NextButton} from "../components/ActionButtons";
import ScoreCard from "../components/ScoreCard";
import {db} from "../database/db";

export default function GameScreen({route, navigation}) {
    const config = route.params;

    let message = 'Get Ready to Play!'
    const [round, updateRound] = useState(0);
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

    function FailureButton() {
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
                    <Text style={styles.buttonText}>Go</Text>
                </TouchableOpacity>
            </View>
        )
    }


    const skipPressed = () => {
        // Update Cards
    }

    const successPressed = () => {
        if (round%2 === 0) { // evens are for team 2
            updateTeam2(team2 + 1)
        } else {
            updateTeam1(team1 + 1)
        }
        // Update Cards
    }

    const nextPressed = () => {
        setPlaying(true);
        updateRound(round + 1);
        // Update Cards
        // Start Countdown again
        if (round %2 == 0) { //even means team 2
            message ='Team 2 is guessing'
        } else {
            message = 'Team 1 is guessing'
        }
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
            {/*<ClockCounter t={config.time} setPlaying={setPlaying}/>*/}
            <View style={styles.status}>
                <View style={styles.timer}>
                    <CountdownCircleTimer
                        size={100}
                        key={round}
                        isPlaying={isPlaying}
                        duration={config.time}
                        colors="red"
                        onComplete={() => {
                            setPlaying(false);
                            return [false, 0]
                        }}
                    >
                        {({ remainingTime, animatedColor }) => (
                            <Animated.Text style={styles.timerText}>
                                {remainingTime}
                            </Animated.Text>
                        )}
                    </CountdownCircleTimer>
                </View>

                {/*<ScoreCard />*/}
                <View style={styles.scoreBoard}>
                    <Text style={styles.scoreBoardHeader}>Scores:</Text>
                    <Text style={styles.text}>Team 1: {team1}</Text>
                    <Text style={styles.text}>Team 2: {team2}</Text>
                </View>
            </View>


            <Card songs = {db}/>

            <View>
                <Text style={styles.instructions}>{message}</Text>
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
        fontSize: 28,
        marginVertical: 8,
        color: 'white',
        alignSelf: 'center'
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
    },
    text: {
        fontSize: 16,
        color: 'white'
    },
    scoreBoard: {

    },
    scoreBoardHeader: {
        fontSize: 30,
        color: 'white'
    },
    timer: {

    },
    status: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 80,
    },
    timerText: {
        fontSize: 30,
        color: 'red'
    }
})