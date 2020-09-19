import React, {useState} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {Button, Alert, View, StyleSheet, TouchableOpacity, Text} from "react-native";
import ConfigModal from "../components/ConfigModal";

export default function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [config, updateConfig] = useState({isReady: false, players:[]})
    const handleStart = () => {
        if (config.isReady) {
            navigation.navigate('Game', config)
        }
        else { // open modal to set configs
            setModalVisible(true);
        }
    }
    return (
        <View style={styles.main}>

            <ConfigModal setModalVisible={setModalVisible} modalVisible={modalVisible} config={config} updateConfig={updateConfig} navigation={navigation}/>
            <Text>Rules</Text>


            <View style={styles.buttonContainer}>
                <View style={styles.startGameButton}>
                    <TouchableOpacity onPress={handleStart}>
                        <Text style={styles.buttonText}>Start Game</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.joinGameButton}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Game', config)}>
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