import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { Person, Planet } from '../SwApi';
import { NUMBER_OF_COLUMNS } from '../screens/MainScreen';
import colors from '../colors';

interface PersonCardProps {
    charater: Person;
    planet?: Planet;
    onPress: () => void;
}

export const PersonCard: FC<PersonCardProps> = ({ onPress, charater, planet }) => {
    const { width } = useWindowDimensions();
    const dimentions = (width / NUMBER_OF_COLUMNS) - 15;

    return <TouchableOpacity
        onPress={onPress}
        style={[styles.container, { width: dimentions, height: dimentions }]}
    >
        <View style={styles.textContainer}>
            <Text
                style={[styles.text, styles.charaterName]}
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

const mapStateToProps = ({ planets }: RootState, { charater }: PersonCardProps) => ({
    planet: planets.results.find(planet => planet.id === charater.id),
});

export default connect(mapStateToProps)(PersonCard);

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
    charaterName: {
        fontSize: 20,
    },
});
