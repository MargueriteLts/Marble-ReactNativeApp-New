
// import { AsyncStorage } from '@react-native-async-storage/async-storage'
// old - import { AsyncStorage } from 'react-native'
import React, { useState, useEffect } from 'react'
// import { Text, View, Button } from  'react-native'
// import jwtDecode from "jwt-decode"
import { AuthState } from './src/AuthState'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/screens/HomeScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import ProfileScreen from './src/screens/ProfileScreen'


// import { apiUrl } from './src/const'
const Stack = createNativeStackNavigator()


export default App = () => {
  // const [isLoading, setLoading] = useState(true)
  const [token, setToken] = useState("")
  
  // const emptyUser = {
  //   id: 0,
  //   login: "",
  //   password: "",
  //   email: "",
  //   token: ""
  // }
  // const [user, setUser] = useState(emptyUser)

  useEffect(() => {
    saveTokenForTest("123sdfbsmndfbsdmn321")
    retrieveData()
    if (token.length > 0) { // Let's check out this token
      console.log(token)
      // checkOutToken()
    } else { 
      saveTokenForTest("123sdfbsmndfbsdmn321")
      console.log("No token yet")
    }
  }, [])


  const retrieveData = async () => { // Try to get token from local storage 
    try {
      const value = await AsyncStorage.getItem('token')
      if (value !== null) { // We have token and need to check it out!
        setToken(value)
        console.log(value)
      }
    } catch (error) {
      console.log('Error retrieving data')
    }
  }
  

  const saveTokenForTest = async (t) => { // Try to get token from local storage 
    try {
      const value = await AsyncStorage.setItem('token', t)
      if (value !== null) { // We have token and need to check it out!
        console.log(value)
      } else {
        console.log("null-null")
      }
    } catch (error) {
      console.log('Error saving data')
    }
  }


  // const checkOutToken = async () => {
  //   try {
  //     const response = await fetch( 
  //         apiUrl + "/auth/checkout",
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json',
  //             'Authorization': 'Bearer ' + token
  //           }
  //         }
  //       )
  
  //     const json = await response.json()
  //     console.log(json)
  //     console.log(json.message)
  //     console.log(json.id)
  //     console.log(json.token)
  //     setToken(json.token)
  //     // console.log(json.login)
  //     // setUser(json)
  //   } catch (error) {
  //     console.error(error)
  //   } finally {
  //     // setLoading(false)
  //   }
  // }

  // <MainScreen />
  // <Text>Token: {token}</Text>
  // <Stack.Screen name="Home" component={HomeScreen} initialParams={{ 'token': token }}/>
  // let showComponents = true
  
  return (
      <AuthState>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </AuthState>
  )
}
