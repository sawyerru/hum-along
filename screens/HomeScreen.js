import React, {useState} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {Button, Alert, View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
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
            <Text style={styles.text}>(1)To start: Lorem ipsum dolor, </Text>
            <Text style={styles.text}>(2)sit amet consectetur adipisicing elit. </Text>
            <Text style={styles.text}>(3)Atque, magni nemo ipsam similique modi</Text>
            <Text style={styles.text}>(4)earum sequi minus doloremque, </Text>
            <Text style={styles.text}>(5)natus distinctio nobis quibusdam voluptatum reprehenderit </Text>
            <Text style={styles.text}>(6)veritatis quidem labore iure. The winner: Autem, soluta?</Text>
            <Image style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 250 }}source={require('./../assets/logo.jpg')} />

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
        backgroundColor: '#18453b',
        justifyContent: 'center',
        color: 'white'
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
        flex: 1,
        marginBottom: 24
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 20,
        // justifyContent: 'center'
        color: 'white',
    },
    text: {justifyContent: 'center',alignItems: 'center', fontSize: 20, color: 'white'}
})