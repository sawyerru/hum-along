import React, {useState} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {Button, Alert, View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
import ConfigModal from "../components/ConfigModal";
import RulesModal from "../components/RulesModal";

export default function HomeScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [rulesVisible, setRulesVisible] = useState(false);
    const [config, updateConfig] = useState({isReady: false, players:[]})

    const handleStart = () => {
        if (config.isReady) { navigation.navigate('Game', config) }
        else { setModalVisible(true); }
    }
    const showRules = () => {
        console.log('he')
        setRulesVisible(true)
    }
    return (
        <View style={styles.main}>

            <ConfigModal setModalVisible={setModalVisible} modalVisible={modalVisible} config={config} updateConfig={updateConfig} navigation={navigation}/>
            <RulesModal setModalVisible={setRulesVisible} modalVisible={rulesVisible} />

            <View style={styles.imageContainer}>
                <Image style={styles.logo} source={require('./../assets/logo.jpg')} />
                <Text style={styles.subtitle}>In A Hum-Along!</Text>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.startGameButton}>
                    <TouchableOpacity onPress={handleStart}>
                        <Text style={styles.buttonText}>Start Game</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rulesButton}>
                    <TouchableOpacity onPress={showRules}>
                        <Text style={styles.buttonText}>Rules</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fcf5c7',
        justifyContent: 'center',
        color: 'white'
    },
    startGameButton: {
        backgroundColor: '#84dcc6',
        borderRadius: 10,
        marginBottom: '5%',
        borderColor: 'grey',
        paddingVertical: '3%',
        paddingHorizontal: '10%'
    },
    rulesButton: {
        borderRadius: 10,
        borderColor: 'grey',
        paddingVertical: '3%',
        paddingHorizontal: '10%',
        backgroundColor: '#a0ced9'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: 24
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 20,
        // justifyContent: 'center'
        color: 'white',
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20, color: 'white'
    },
    logo: {
        width: 280,
        height: 280,
        borderRadius: 200,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    subtitle: {
        fontSize: 40,
        fontFamily: 'grandstander'
    }
})