import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LoadingProps { }

const Loading: FC<LoadingProps> = () => {
    return <View style={styles.container}>
        <Text style={styles.text}>Loading</Text>
    </View>;
};

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 26,
    },
});
