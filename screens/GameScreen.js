import React from 'react';
import {View, Text} from 'react-native';
import  Card from '../components/CardComponent'


export default function GameScreen({navigation}) {
    return (
        <View>
            <Card></Card>
            <Text>This is the game screen</Text>
        </View>
    )
}