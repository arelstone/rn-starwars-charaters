import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect, useReducer } from 'react';
import { Text, StyleSheet, View, useWindowDimensions } from 'react-native';
import { connect } from 'react-redux';
import { Screen } from '../components';
import Avatar from '../components/Avatar';
import { AppNavigatorParams } from '../navgators';
import { RootState } from '../store';
import { Person, Planet } from '../SwApi';

interface DetailsScreenProps {
    navigation: StackNavigationProp<AppNavigatorParams, 'Details'>;
    route: RouteProp<AppNavigatorParams, 'Details'>;
    charater?: Person;
    planet?: Planet;
}

export const DetailsScreen: FC<DetailsScreenProps> = ({ navigation, charater, planet }) => {
    const { width } = useWindowDimensions();

    useEffect(() => {
        navigation.setOptions({ title: charater?.name });
    }, [navigation, charater]);


    return <Screen style={styles.container}>
        <View style={{ ...StyleSheet.absoluteFillObject, left: (width - 300), right: (width - 300), top: (width - 300) }}>
            {charater && <Avatar
                gender={charater.gender}
                hairColor={charater.hair_color}
                skinColor={charater.skin_color}
                eyeColor={charater.eye_color}
            />}
        </View>
        <View>
            <Text
                testID="CharaterName"
                style={styles.charaterName}
            >
                {charater?.name}
            </Text>
            <Text testID="PlanetName">Lives on: {planet?.name}</Text>
            <Text testID="Gender">Gender: {charater?.gender}</Text>
            <Text testID="HairColor">Hair color: {charater?.hair_color}</Text>
            <Text testID="EyeColor">Eye color: {charater?.eye_color}</Text>
            <Text testID="SkinColor">Skin color: {charater?.skin_color}</Text>
        </View>
    </Screen>;
};

const mapStateToProps = ({ persons, planets }: RootState, { route: { params } }: DetailsScreenProps) => ({
    charater: persons.results.find(person => person.id === params.id),
    planet: planets.results.find(planet => planet.id === params.planetId),
});

export default connect(mapStateToProps)(DetailsScreen);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    charaterName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
