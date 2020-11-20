import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainScreen from '../main/MainScreen';

export type AppNavigatorParams = {
    Main: undefined;
}

const Stack = createStackNavigator<AppNavigatorParams>();

export default function AppNavigator() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                component={MainScreen}
                name="Main"
            />
        </Stack.Navigator>
    </NavigationContainer>;
}
