import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {Button, Alert, View, StyleSheet, TouchableOpacity, Text} from "react-native";


export default function HomeScreen() {

    const handleButtonPress = () => {
        Alert.alert('alert','button pressed')
    }

    return (
        <View style={globalStyles.container}>
            <Button onPress={handleButtonPress} title='Start Game' />
            <Button onPress={handleButtonPress} title='Join Game' />
        </View>
    )
}