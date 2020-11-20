import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text } from 'react-native';
import Screen from '../components/Screen/Screen';
import { AppNavigatorParams } from '../navgators';

interface MainScreenProps {
    navigation: StackNavigationProp<AppNavigatorParams, 'Main'>;
}

const MainScreen: FC<MainScreenProps> = () => {
    return <Screen>
        <Text>MainScreen</Text>
    </Screen>;
};

export default MainScreen;
