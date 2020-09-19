import React from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet,
    Keyboard, TouchableWithoutFeedback, ScrollView, Button, Alert, TextInput} from 'react-native';
import { Formik } from 'formik';


export default function ConfigModal({setModalVisible, modalVisible, config, updateConfig, navigation}) {

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
                                    updateConfig(values);
                                    setModalVisible(!modalVisible);
                                    navigation.navigate('Game', config);
                                }}
                            >
                                {(props) => (
                                    <View>
                                        <TextInput
                                            placeholder='Timer'
                                            onChangeText={props.handleChange('timer')}
                                            value={props.values.timer}
                                        />
                                        <TextInput
                                            placeholder='Player'
                                            onChangeText={props.handleChange('player')}
                                            value={props.values.player}
                                        />
                                        <TextInput
                                            placeholder='extra'
                                            onChangeText={props.handleChange('extra')}
                                            value={props.values.extra}
                                        />
                                        <Button title='Lets Play' onPress={props.handleSubmit} />

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
})