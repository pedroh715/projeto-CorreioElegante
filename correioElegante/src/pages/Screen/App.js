import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Start from '../Start/index'
import Register from '../Register/Register'

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default function App() {
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
}