import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native'

import HomeAuth from '../screens/HomeAuth';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function Auth() {
    return (
        <Stack.Navigator initialRouteName='AuthentificationHome'>
            <Stack.Screen options={{headerShown: false}} name="AuthentificationHome" component={HomeAuth} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    );
}