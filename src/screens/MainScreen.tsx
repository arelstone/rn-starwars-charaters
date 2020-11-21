import React, { FC, useEffect, useRef, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ListRenderItemInfo, Text, View, FlatList } from 'react-native';
import { connect, DispatchProp } from 'react-redux';
import { AppNavigatorParams } from '../navgators';
import { RootState } from '../store';
import { fetchPlanets } from '../store/planets/planets.actions';
import { fetchPersons } from '../store/persons/persons.actions';
import { Person } from '../SwApi';
import { Screen, Loading } from '../components';
import PersonCard from '../components/PersonCard';

interface MainScreenProps extends DispatchProp<any> {
    navigation: StackNavigationProp<AppNavigatorParams, 'Main'>;
    charaters: RootState['persons'];
    planets: RootState['planets'];
}

export const NUMBER_OF_COLUMNS = 3;

const MainScreen: FC<MainScreenProps> = ({ navigation: { navigate }, charaters, dispatch, planets }) => {
    const [isLoading] = useState<boolean>(planets.loading || charaters.loading);

    useRef(useEffect(() => {
        dispatch(fetchPersons());
        dispatch(fetchPlanets());
    }, []));

    console.log(planets.results[0]);

    const hasError = planets.error.hasError || charaters.error.hasError;
    const errorMessage = planets.error.message || charaters.error.message;

    if (isLoading) {
        return <Loading />;
    }

    return <Screen>

        {hasError && <View><Text>{errorMessage}</Text></View>}

        <FlatList
            contentContainerStyle={{ padding: 10 }}
            data={charaters.results || []}
            renderItem={({ item }: ListRenderItemInfo<Person>) => <PersonCard
                charater={item}
                onPress={() => navigate('Details', { id: item.id })}
            />}
            numColumns={NUMBER_OF_COLUMNS}
            keyExtractor={item => `item_${item.id}`}
        />
    </Screen>;
};

export default connect(
    (state: RootState) => ({
        charaters: state.persons,
        planets: state.planets,
    }),
)(MainScreen);
