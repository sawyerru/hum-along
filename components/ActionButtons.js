import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

export function SuccessButton() {
    return (
        <View style={styles.successButton}>
            <Text style={styles.buttonText}>Got it!</Text>
        </View>
    )
}

export function FailureButton(props) {
    return (
        <View style={styles.failButton}>
            <Text style={styles.buttonText}>Skip</Text>
        </View>
    )
}

export function NextButton() {
    return (
        <View style={styles.nextButton}>
            <Text style={styles.buttonText}>Next</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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