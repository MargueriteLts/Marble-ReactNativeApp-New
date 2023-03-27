import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native'

import HomeAuth from '../screens/HomeAuth';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName='Authentification home'>
            <Stack.Screen options={{headerShown: false}} name="Authentification home" component={HomeAuth} />
            <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignInScreen} />
            <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    );
}