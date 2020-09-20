import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet,
    Keyboard, TouchableWithoutFeedback, ScrollView, Button, FlatList, Alert, TextInput} from 'react-native';
import { Formik } from 'formik';
import {Picker} from '@react-native-community/picker';
import {round} from "react-native-reanimated";

export default function ConfigModal({setModalVisible, modalVisible, config, updateConfig, navigation}) {
    const [time, updateTime] = useState(30);
    const [rounds, updateRounds] = useState(10);
    const [score, updateScore] = useState(20);
    const [player, updatePlayer] = useState('');
    const [players, updatePlayers] = useState([]);

    const closeModal = () => {
        Alert.alert(
            'Are you sure?',
            '',
            [
                {
                    text: 'Yes',
                    onPress: () => setModalVisible(!modalVisible),
                    style: 'destructive'
                },
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
            ],
            { cancelable: false })
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Set Up Game</Text>
                            <TouchableOpacity onPress={closeModal} >
                                <Text style={styles.close}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <Formik
                                initialValues={config}
                                onSubmit={(values)=> {
                                    values['time']= time;
                                    values['players']= players;
                                    values['rounds']=rounds;
                                    values['scores']=score;
                                    updateConfig(values);
                                    setModalVisible(!modalVisible);
                                    navigation.navigate('Game', config);
                                }}
                            >
                                {(props) => (
                                    <View>
                                        <Text>Clock Time:</Text>
                                        <Picker
                                            selectedValue={time}
                                            onValueChange={(itemValue, itemIndex) => {
                                                updateTime(itemValue)
                                            }
                                            }>
                                            <Picker.Item label="30 Seconds" value={30}/>
                                            <Picker.Item label="1 Minute" value={60} />
                                            <Picker.Item label="1.5 Minutes" value={90} />
                                            <Picker.Item label="2 Minutes" value={120} />
                                        </Picker>
                                        <Text>Max Rounds:</Text>
                                        <Picker
                                            selectedValue={rounds}
                                            onValueChange={(itemValue, itemIndex) => {
                                                updateRounds(itemValue)
                                            }
                                            }>
                                            <Picker.Item label="3" value={3}/>
                                            <Picker.Item label="5" value={5} />
                                            <Picker.Item label="8" value={8} />
                                            <Picker.Item label="10" value={10} />
                                        </Picker>
                                        <Text>Max Score:</Text>
                                        <Picker
                                            selectedValue={score}
                                            onValueChange={(itemValue, itemIndex) => {
                                                updateScore(itemValue)
                                            }
                                            }>
                                            <Picker.Item label="10" value={10}/>
                                            <Picker.Item label="12" value={12} />
                                            <Picker.Item label="15" value={15} />
                                            <Picker.Item label="20" value={20} />
                                        </Picker>
                                        {/*<Text>Players:</Text>*/}
                                        {/*<TextInput*/}
                                        {/*    placeholder='Player'*/}
                                        {/*    onChangeText={(val)=>updatePlayer(val)}*/}
                                        {/*    returnKeyType='done'*/}
                                        {/*    clearButtonMode="always"*/}
                                        {/*    onSubmitEditing={*/}
                                        {/*        () => {*/}
                                        {/*            const item = {key: player}*/}
                                        {/*            updatePlayer('')*/}
                                        {/*            updatePlayers(players => [...players, item]);*/}
                                        {/*        }*/}
                                        {/*    }*/}
                                        {/*/>*/}
                                        {/*<FlatList*/}
                                        {/*    data={players}*/}
                                        {/*    renderItem={({item}) => <Text>{item.key}</Text>}*/}
                                        {/*/>*/}
                                        <TouchableOpacity style={styles.submitButton} onPress={props.handleSubmit}>
                                            <Text style={styles.buttonText}>Lets Play</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </Formik>
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        marginTop: 65,
        marginHorizontal: 30,
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 20,
        flex: 1,
        backgroundColor: '#E2E9FF',
        justifyContent: 'flex-start',
    },
    modalHeader: {
        borderBottomColor: '#333',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 3,
    },
    modalTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    submitButton: {
        backgroundColor: 'green',
        width: '50%',
        alignSelf: 'center',
        // height: '2
        paddingVertical: '3%',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
    },
    close: {
        color: 'red'
    }
})