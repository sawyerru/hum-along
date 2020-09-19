import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet,
    Keyboard, TouchableWithoutFeedback, ScrollView, Button, FlatList, Alert, TextInput} from 'react-native';
import { Formik } from 'formik';
import {Picker} from '@react-native-community/picker';

export default function ConfigModal({setModalVisible, modalVisible, config, updateConfig, navigation}) {
    const [time, updateTime] = useState(0);
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
                                <Text>X</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <Formik
                                initialValues={config}
                                onSubmit={(values)=> {
                                    values['time']= time;
                                    values['players']= players;
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
                                            onValueChange={(itemValue, itemIndex) =>
                                                updateTime(itemValue)
                                            }>
                                            <Picker.Item label="30 Seconds" value={30}/>
                                            <Picker.Item label="1 Minute" value={60} />
                                            <Picker.Item label="1.5 Minutes" value={90} />
                                            <Picker.Item label="2 Minutes" value={120} />
                                        </Picker>
                                        <Text>Players:</Text>
                                        <TextInput
                                            placeholder='Player'
                                            onChangeText={(val)=>updatePlayer(val)}
                                            returnKeyType='done'
                                            clearButtonMode="always"
                                            onSubmitEditing={
                                                () => {
                                                    const item = {key: player}
                                                    updatePlayer('')
                                                    updatePlayers(players => [...players, item]);
                                                }
                                            }
                                        />
                                        <FlatList
                                            data={players}
                                            renderItem={({item}) => <Text>{item.key}</Text>}
                                        />
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
    }
})