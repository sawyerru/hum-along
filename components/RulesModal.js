import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet,
    Keyboard, TouchableWithoutFeedback, ScrollView, Button, FlatList, Alert, TextInput} from 'react-native';

export default function ConfigModal({setModalVisible, modalVisible}) {
    const closeModal = () => {
        setModalVisible(!modalVisible);
    }
    return(
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Rules of the Game</Text>
                            <TouchableOpacity onPress={closeModal} >
                                <Text style={styles.close}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalBody}>
                            <Text style={styles.text}>(1)To start: Lorem ipsum dolor, </Text>
                            <Text style={styles.text}>(2)sit amet consectetur adipisicing elit. </Text>
                            <Text style={styles.text}>(3)Atque, magni nemo ipsam similique modi</Text>
                            <Text style={styles.text}>(4)earum sequi minus doloremque, </Text>
                            <Text style={styles.text}>(5)natus distinctio nobis quibusdam voluptatum reprehenderit </Text>
                            <Text style={styles.text}>(6)veritatis quidem labore iure. The winner: Autem, soluta?</Text>
                        </View>
                    </View>
                </Modal>
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
    modalBody: {

    },
    close: {
        color: 'red'
    }
})