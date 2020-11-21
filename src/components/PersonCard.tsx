import React, { FC } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { Person } from '../SwApi';

interface PersonCardProps extends Person { }

const PersonCard: FC<PersonCardProps> = ({ id, name, skin_color, hair_color, eye_color }) => {
    const { width } = useWindowDimensions();
    const dimentions = width / 3;

    return <View
        style={{
            width: dimentions,
            height: dimentions,
            borderWidth: 1,
            borderColor: 'red',
            margin: 5,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Text>{name}</Text>
        <Text>{skin_color}</Text>
        <Text>{hair_color}</Text>
        <Text>{eye_color}</Text>
    </View>;
};

export default PersonCard;
