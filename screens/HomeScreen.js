import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {Button, Alert, View, StyleSheet, TouchableOpacity, Text} from "react-native";


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.main}>
            <Text>Home Screen</Text>


            <View style={styles.buttonContainer}>
                <View style={styles.startGameButton}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Game')}>
                        <Text style={styles.buttonText}>Start Game</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.joinGameButton}>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>Join a Game</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'magenta',
    },
    startGameButton: {
        backgroundColor: 'green',
        borderRadius: 10,
        marginBottom: '5%',
        borderColor: 'grey',
        paddingVertical: '3%',
        paddingHorizontal: '10%'
    },
    joinGameButton: {
        backgroundColor: 'orange',
        borderRadius: 10,
        borderColor: 'grey',
        paddingVertical: '3%',
        paddingHorizontal: '10%'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 20,
        // justifyContent: 'center'
        color: 'white'
    }
})