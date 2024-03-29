import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';

const Cell = ({ id, cellState, onClick }) => {
    const [isLongPress, setIsLongPress] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleLongPress = () => {
        setIsLongPress(true);
    };

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        if (!isLongPress) {
            onClick(id);
        }
        setIsLongPress(false);
        setIsPressed(false);
    };

    return (
        <View style={styles.cedula}>
            <Pressable
                onLongPress={handleLongPress}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={({ pressed }) => [
                    {
                        borderWidth: 5,
                        borderColor: 'black',
                        backgroundColor: pressed || isPressed ? 'darkorange' : 'transparent',
                        borderRadius: 5,
                        padding: 5,
                    },
                ]}
            >
                <Image
                    source={cellState === 1 ? require('../../../../assets/pieces/peca1.png') : cellState === 2 ? require('../../../../assets/pieces/peca2.png') : null}
                    style={styles.imagem}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    cedula: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        width: 110,
        height: 110,
    },
});

export default Cell;
