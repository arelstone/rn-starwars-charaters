import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { AppNavigatorParams } from '../navgators';
import { RootState } from '../store';

interface DetailsScreenProps {
    navigation: StackNavigationProp<AppNavigatorParams, 'Details'>;
    route: RouteProp<AppNavigatorParams, 'Details'>;
}

const DetailsScreen: FC<DetailsScreenProps> = ({ navigation, route }) => {
    const person = useSelector((state: RootState) => state.persons.results.find(person => person.id === route.params.id));

    useEffect(() => {
        navigation.setOptions({ title: person!.name });
    }, [navigation, person]);



    return <View><Text>DetailsScreen</Text></View>;
};



export default DetailsScreen;
