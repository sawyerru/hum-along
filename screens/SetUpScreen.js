import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function SetUpScreen({navigation}) {
    return (
        <View>
            <View style={styles.splash}>
                <Text>Hum Along</Text>
            </View>
            <View style={styles.startButton}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Game')}}>
                    <Text>Start Game</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    startButton: {
        position: 'absolute',
        width: '60%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        left: '20%',
        bottom: '30%',
        backgroundColor: 'green',


    },
    splash: {
        flex: 1,
        paddingTop: 35,
        backgroundColor: '#DDA0DD',
    }
})