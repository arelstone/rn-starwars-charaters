import React, { FC, useEffect, useRef } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, ActivityIndicator, ListRenderItemInfo } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Screen from '../components/Screen/Screen';
import { AppNavigatorParams } from '../navgators';

import { fetchPlanets } from '../store/planets/planets.actions';
import { RootState } from '../store';
import { fetchPersons } from '../store/persons/persons.actions';
import { FlatList } from 'react-native-gesture-handler';
import { Person } from '../SwApi';
import PersonCard from '../components/PersonCard';

interface MainScreenProps {
    navigation: StackNavigationProp<AppNavigatorParams, 'Main'>;
}

const MainScreen: FC<MainScreenProps> = () => {
    const dispatch = useDispatch();

    useRef(useEffect(() => {
        dispatch(fetchPersons());
        dispatch(fetchPlanets());
    }, []));

    const { persons, planets } = useSelector(({ planets, persons }: RootState) => ({
        planets,
        persons,
    }));
    const isLoading = planets.loading && persons.loading;


    return <Screen>
        <Text>MainScreen</Text>
        {isLoading && <ActivityIndicator size="large" />}

        <FlatList
            data={persons.results || []}
            renderItem={({ item }: ListRenderItemInfo<Person>) => <PersonCard {...item} />}
            numColumns={3}
            keyExtractor={item => `item_${item.id}`}
        />
    </Screen>;
};

export default MainScreen;
