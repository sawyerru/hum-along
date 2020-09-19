import React from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView, Alert} from 'react-native';
import { Formik } from 'formik';


export default function ConfigModal({setModalVisible, modalVisible}) {
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
                            <Text>Hello from the modal</Text>
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