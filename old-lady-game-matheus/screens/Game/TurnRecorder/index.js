import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TurnRecorder = ({ playerName }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{`${playerName}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        borderWidth: 3,
        padding: 10,
        backgroundColor: 'black',
        borderColor: 'white',
    },
    texto: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default TurnRecorder;