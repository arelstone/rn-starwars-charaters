import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainScreen from '../screens/MainScreen';
import DetailsScreen from '../screens/DetailsScreen';

export type AppNavigatorParams = {
    Main: undefined;
    Details: { id: number; };
}

const Stack = createStackNavigator<AppNavigatorParams>();

export default function AppNavigator() {
    return <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen
                component={MainScreen}
                name="Main"
                options={{ title: 'Charaters' }}
            />
            <Stack.Screen
                component={DetailsScreen}
                name="Details"
            />
        </Stack.Navigator>
    </NavigationContainer>;
}
