import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

export default function ClockCounter(props) {
    return (
        <View>
            <Text>This is my Clock</Text>
            <Text>{props.t}</Text>
        </View>
    )
}