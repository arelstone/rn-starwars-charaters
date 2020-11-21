import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Person } from '../SwApi';
import { NUMBER_OF_COLUMNS } from '../screens/MainScreen';
import colors from '../colors';

interface PersonCardProps {
    charater: Person;
    onPress: () => void;
}

export const PersonCard: FC<PersonCardProps> = ({ onPress, charater }) => {
    const { width } = useWindowDimensions();
    const dimentions = (width / NUMBER_OF_COLUMNS) - 15;
    const planet = useSelector((state: RootState) => state.planets.results.find(planet => planet.id === charater.id));

    return <TouchableOpacity
        onPress={() => onPress()}
        style={[styles.container, { width: dimentions, height: dimentions }]}
    >
        <View style={styles.textContainer}>
            <Text
                style={styles.text}
                testID="CharaterName"
            >
                {charater.name}
            </Text>
            <Text
                style={styles.text}
                testID="PlanetName"
            >
                {planet?.name || 'N/A'}
            </Text>
        </View>
    </TouchableOpacity>;
};

export default PersonCard;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.cardBackgroundColor,
    },
    textContainer: {
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
    },
});
