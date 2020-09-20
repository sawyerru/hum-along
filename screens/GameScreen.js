import React, {useState, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated, Alert, Button} from 'react-native';
import Card from '../components/CardComponent'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import {SuccessButton, FailureButton, NextButton} from "../components/ActionButtons";
import {db, SIZE} from "../database/db";

export default function GameScreen({route, navigation}) {
    const config = route.params;

    const [message, updateMessage] = useState("Press 'Go' to Play")
    const [round, updateRound] = useState(0);
    const [isPlaying, setPlaying] = useState(false);
    const [cards, updateCards] = useState([]);
    const [team1, updateTeam1] = useState(0);
    const [team2, updateTeam2] = useState(0);

    const handleGameEnd = () => {
        let winner = '';
        if (team1 > team2) { winner = 'Team 1 Wins!'}
        if (team2 > team1) { winner = 'Team 2 Wins!'}
        if (team2 === team1 ) {winner = 'Its a Tie!'}

        Alert.alert('Game Finished!', winner,
            [
                {
                    text: 'Return to Home Menu',
                    onPress: () => navigation.navigate('Home')
                },
            ])
    }

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
        refreshCards();
    }

    const successPressed = () => {
        if (round%2 === 0) { // evens are for team 2
            updateTeam2(team2 + 1)
        } else {
            updateTeam1(team1 + 1)
        }

        if (team1 === config.scores-1 || team2 === config.scores-1) {
            setPlaying(false);
            handleGameEnd();
        }
        refreshCards();
    }

    const nextPressed = () => {
        setPlaying(true);
        if (round + 1 >= config.rounds) {
            setPlaying(false);
            handleGameEnd();
        } else {
            updateRound(round + 1);

            refreshCards();
            if (round % 2 === 0) { //even means team 2
                updateMessage('Team 1 is guessing')
            } else {
                updateMessage('Team 2 is guessing')
            }
        }
    }

    const refreshCards = () => {
        // get 5 new cards from database to pass to cards component
        const idx = []
        for (let i=0; i < 5; i++) {
            let r = Math.floor(Math.random() * SIZE);
            while (idx.includes(r)) { r = Math.floor(Math.random() * SIZE); }
            idx.push(r);
        }
        const c = []
        idx.forEach( i => {c.push(db[i])});
        updateCards(c);
        // Mongo API call will go here
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={styles.optionsContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert('Quit the Game?',
                                'Are you sure?',
                                [
                                    {text: 'Quit', onPress: ()=>navigation.navigate('Home'), style:'destructive'},
                                    {text: 'Cancel', style:'cancel'}])
                        }}>
                        <Text style={styles.quit}>...</Text>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.view}>
            <View style={styles.status}>
                <View style={styles.timer}>
                    <CountdownCircleTimer
                        size={100}
                        key={round}
                        isPlaying={isPlaying}
                        duration={config.time}
                        colors="#a0ced9"
                        onComplete={() => {
                            setPlaying(false);
                            updateMessage('Pass to the next team')
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
                    <Text style={styles.scoreBoardHeader}>Round: {round}</Text>
                    <Text style={styles.text}>Team 1: {team1}</Text>
                    <Text style={styles.text}>Team 2: {team2}</Text>
                </View>
            </View>


            <Card songs = {cards}/>

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
        backgroundColor: "#fcf5c7",
        height: "100%"
    },
    instructions: {
        fontSize: 28,
        marginVertical: 8,
        color: '#859fd5',
        alignSelf: 'center',
        fontFamily: 'grandstander-semibold'
    },
    successButton: {
        backgroundColor: '#A5FFD6',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        width: 200,
        height: 50,
        borderColor: 'black',
        justifyContent: 'center',
    },
    failButton: {
        backgroundColor: '#FFA69E',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        width: 200,
        height: 50,
        borderColor: 'black',
        justifyContent: 'center',
    },
    nextButton: {
        backgroundColor: '#adf7b6',
        borderRadius: 10,
        width: 400,
        height: 50,
        justifyContent: 'center',

    },
    buttonText: {
        color: '#859fd5',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontFamily: 'grandstander-bold'
    },
    text: {
        fontSize: 20,
        color: '#859fd5',
        fontFamily: 'grandstander-semibold'
    },
    optionsContainer: {
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    scoreBoardHeader: {
        fontSize: 30,
        color: '#859fd5',
        fontFamily: 'grandstander-bold',
        fontWeight: 'bold'
    },
    quit: {
        fontSize: 30,
        fontWeight: 'bold'
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
        color: '#a0ced9',
        fontFamily: 'grandstander-semibold'
    }
})