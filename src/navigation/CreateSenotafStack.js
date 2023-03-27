import React from 'react'
import { useContext } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { AuthContext } from '../../context/AuthContext';
import { AuthContext } from '../AuthContext'

// import AuthStack from '../../navigation/AuthStack';
// import AuthStack from '../navigation/AuthStack';
import Auth from '../navigation/AuthStack';
import CreateSenotaf_1 from '../screens/SenotafCreation/CreateSenotaf_1';
import CreateSenotaf_2 from '../screens/SenotafCreation/CreateSenotaf_2';

const Stack = createNativeStackNavigator();

export default function CreateSenotafStack() {
    // const {userToken} = useContext(AuthContext);
    // console.log(userToken)
    const { token } = useContext(AuthContext)
    return (
        <Stack.Navigator>
            {/* {token === '' ? <Stack.Screen name="Authentification" component={AuthStack} /> : <Stack.Screen name="Создание ценотафа" component={CreateSenotaf_1} />} */}
            {token === '' ? <Stack.Screen name="Authentification" component={Auth}  /> : <Stack.Screen name="Создание ценотафа" component={CreateSenotaf_1} />}
            {/* <Stack.Screen options={{headerShown: false}} name="Создание ценотафа 1" component={CreateSenotaf_1} /> */}
            <Stack.Screen options={{headerShown: false}} name="Создание ценотафа 2" component={CreateSenotaf_2} />
        </Stack.Navigator>
    );
}