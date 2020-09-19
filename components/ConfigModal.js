import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView, Alert, Switch} from 'react-native';
import { Formik } from 'formik';
import SetUpForm from './StartGameForm';
import CustomSubmitButton from './CustomButton'
export default function ConfigModal({setModalVisible, modalVisible}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Set Up Game</Text>
                            <TouchableOpacity onPress={closeModal} >
                                <Text>X</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <Formik>

                            </Formik>
                            <CustomSubmitButton title = "Submit"></CustomSubmitButton>
                            <Switch
                                trackColor={{ false: "#767577", true: "#52e612" }}
                                thumbColor={{false: "#f5dd4b", true : "#f4f3f4"}}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />

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