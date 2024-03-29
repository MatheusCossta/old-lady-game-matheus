import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Jogo da Velha</Text>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Game')}
            >
                <Text style={styles.textoBotao}>Jogar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 48,
        marginBottom: 70,
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    botao: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: 'black',
        borderWidth: 3,
        borderColor: 'white',
    },
    textoBotao: {
        fontSize: 24,
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold',
    },
});

export default HomeScreen;