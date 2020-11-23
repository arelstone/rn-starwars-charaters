import React, { FC, useEffect, useRef } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ListRenderItemInfo, Text, View, FlatList, StyleSheet } from 'react-native';
import { connect, DispatchProp } from 'react-redux';
import { AppNavigatorParams } from '../navgators';
import { RootState } from '../store';
import { fetchPlanets } from '../store/planets/planets.actions';
import { Person } from '../SwApi';
import { Screen, Loading } from '../components';
import { fetchPersons } from '../store/persons/persons.actions';
import PersonCard from '../components/PersonCard';

interface MainScreenProps extends DispatchProp<any> {
    navigation: StackNavigationProp<AppNavigatorParams, 'Main'>;
    charaters: RootState['persons'];
    planets: RootState['planets'];
}

export const NUMBER_OF_COLUMNS = 3;

export const MainScreen: FC<MainScreenProps> = ({ navigation: { navigate }, charaters, dispatch, planets }) => {
    useRef(useEffect(() => {
        dispatch(fetchPersons());
        dispatch(fetchPlanets());
    }, []));

    const isLoading = planets.loading || charaters.loading;
    const hasError = planets.error.hasError || charaters.error.hasError;
    const errorMessage = planets.error.message || charaters.error.message;

    if (isLoading) {
        return <Loading />;
    }

    console.log([...new Set(charaters.results.map(c => c.eye_color))]);


    return <Screen>
        {hasError && <View
            testID="Error"
        >
            <Text>{errorMessage}</Text>
        </View>}

        <FlatList
            contentContainerStyle={styles.contentContainer}
            data={charaters.results || []}
            renderItem={({ item }: ListRenderItemInfo<Person>) => <PersonCard
                charater={item}
                onPress={() => navigate('Details', { id: item.id, planetId: item.homeworld_id })}
            />}
            numColumns={NUMBER_OF_COLUMNS}
            keyExtractor={item => `item_${item.id}`}
        />
    </Screen>;
};

const mapStateToprops = (state: RootState) => ({
    charaters: state.persons,
    planets: state.planets,
});

export default connect(mapStateToprops)(MainScreen);

const styles = StyleSheet.create({
    contentContainer: { padding: 10 },
});
