import * as React from 'react'
import { useState, useEffect } from 'react'
import { SafeAreaView, TextInput, Button, View, Text, StyleSheet } from 'react-native'
import { apiUrl } from '../const'

// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'


// const doSignUp = async() => {
//     await fetch(apiUrl + '/data',
//       {
//         method:'GET',
//         headers:{
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + token
//         }
//       })
//     .then(res => res.json())
//     .then(resData => {
//         //var d = JSON.parse(resData); // convert it to an object
//         // alert(d.data);
//         alert(resData['data']);
//         // console.log(resData);
//         console.log(resData['data']);
//         // console.log(d.data);
//     });
// }


const SignUpScreen = ({ navigation, route }) => {
    // const [isLoading, setLoading] = useState(true)
    const [login, onChangeLogin] = React.useState('user2')
    const [password1, onChangePassword1] = React.useState('password2')
    const [password2, onChangePassword2] = React.useState('password2')
    const [email, onChangeEmail] = React.useState('advev@mail.ru')
    // const [token, setToken] = React.useState('')
    // const [userId, setUserId] = React.useState(0)
    // const [userName, setUserName] = React.useState('')
    // const [userPassword, setUserPassword] = React.useState('')
    // const [userEmail, setUserEmail] = React.useState('')

    const emptyUser = {
        id: 0,
        login: '',
        password: '',
        email: '',
        token: ''
    }
    const [user, setUser] = useState(emptyUser)


    function signUp() {
        // if (token.length > 0) 
        if (password1 === password2) {
            signOut()
            doSignUp()    
        } else {
            alert('Password 1 and password 2 must be equal')
        }
    }
    
    function signOut() {
        setUser(emptyUser)
        // setToken('')
        // setUserId(0)
        // setUserName('')
        // setUserPassword('')
        // setUserEmail('')
    }

    const doSignUp = async () => {
        try {
            const response = await fetch( 
                apiUrl + "/auth/signup",
                {
                    method:'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({'login': login, 'password': password1, 'email': email})
                }
            )
            const json = await response.json()

            if (typeof json['token'] !== 'undefined') {
                setUser(json)
                // setData(json)
                // const usr = {
                //     token: json.token,
                //     id: json.id,
                //     login: json.login,
                //     password: json.password,
                //     email: json.email
                // }
                // setUser(usr)
    
                // console.log(json)
                // console.log(json.message)
                // console.log(json.id)
                // console.log(json.login)
                // console.log(json.token)
                
                // setToken(json.token)
                // setUserId(json.id)
                // setUserName(json.login)
                // setUserPassword(json.password)
                // setUserEmail(json.email)
                alert('You are successfully signed up as a user "' +
                      json.login +'"')
            } else if (typeof json['message'] !== 'undefined') {
                alert(json.message)
            } else console.log(json)
        } catch (error) {
            console.error(error)
        } finally {
            // setLoading(false)
        }
    }

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeLogin}
                value={login}
                placeholder="Enter login"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword1}
                value={password1}
                placeholder="Enter password"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword2}
                value={password2}
                placeholder="Enter password again"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Enter email"
            />
            <Button
                onPress={signUp}
                title="Sign up"
                color="#841584"
                accessibilityLabel="Learn more"
            />
            <View style={styles.text}>
                <Text> {user.token === '' ? '' : 'Token: ' + user.token} </Text>
                <Text> {user.id === 0 ? '' : 'User id: ' + user.id} </Text>
                <Text> {user.login === '' ? '' : 'User name: ' + user.login} </Text>
                <Text> {user.password === '' ? '' : 'User password: ' + user.password} </Text>
                <Text> {user.email === '' ? '' : 'User email: ' + user.email} </Text>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    text: {
        margin: 12
    }
})
  