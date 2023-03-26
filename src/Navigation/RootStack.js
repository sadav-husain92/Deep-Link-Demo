import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home, MenuDetail } from "../Screens";


const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'MenuDetail'} component={MenuDetail} />
        </Stack.Navigator>
    )
}

export default RootStack