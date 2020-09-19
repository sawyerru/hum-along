import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

const handleAction = () => {
    Alert.alert('', 'HAngling alert')
}

export function SuccessButton() {
    return (
        <View style={styles.successButton}>
            <TouchableOpacity onPress={handleAction}>
                <Text>Got it!</Text>
            </TouchableOpacity>
        </View>
    )
}

export function FailureButton(props) {
    return (
        <View style={styles.failButton}>
            <TouchableOpacity onPress={handleAction}>
                <Text>Whoops...</Text>
            </TouchableOpacity>
        </View>
    )
}

export function NextButton() {

    const nextPressed = ()=> {

    }

    return (
        <View style={styles.nextButton}>
            <TouchableOpacity onPress={nextPressed}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    successButton: {
        backgroundColor: 'green',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,

    },
    failButton: {
        backgroundColor: 'red',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    nextButton: {
        backgroundColor: 'orange',
    }
})