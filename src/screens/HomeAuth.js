import React, { useContext, useEffect, useState } from 'react'
import { View, Button, Text } from 'react-native'
import { AuthContext } from '../AuthContext'
import { AsyncStorage } from '@react-native-async-storage/async-storage'

// import {SafeAreaView} from 'react-native'

// import { NavigationContainer } from '@react-navigation/native';
// import SafeAreaView from 'react-native-safe-area-view'
// import jwtDecode from "jwt-decode"

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max)
// }

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const HomeAuth = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(true)
  const { token, setToken } = useContext(AuthContext)


  // React.useEffect(() => {
  //   if (route.params?.token) {
  //     setToken(route.params?.token)      
  //   }
  // }, [route.params?.token]);

  // const [token, setToken] = useState('')

  useEffect(() => {
    // retrieveData()
    if (token.length > 0) { // Let's check out this token
      console.log(token)
      // checkOutToken()
    } else console.log("No token yet")
    setLoading(false)
  }, [])


  // const [data, setData] = useState([])
  
  // const emptyUser = {
  //   id: 0,
  //   login: "",
  //   password: "",
  //   email: "",
  //   token: ""
  // }
  // const [user, setUser] = useState(emptyUser)

  useEffect(() => {
    // authorise()
    loadData()
  }, [isLoading])


  function loadData() {
    _storeData = async () => {
        try {
            // await AsyncStorage.setItem('token', token);
            const tok = await AsyncStorage.getItem('token');
            console.log(tok)
            if (tok) {
              setToken(tok)
              // config.headers.Authorization = "Bearer "+token
            }
        } catch (error) {
            console.log(error) // Error saving data
        }
    }
}


  // authorise = async() => {
  //   await fetch('http://127.0.0.1:7000/api/auth/signup',
  //     {
  //       method:'POST',
  //       headers:{
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + token
  //     },
  //     body: JSON.stringify({"login": login, "password": password})
  //   }).then(res => res.json())
  //   .then(resData =>{
  //       alert(resData);
  //       console.log(resData);
  //   });
  // }

  // export default 
  // function MyAwesomeApp() {
    // <SafeAreaView style={{ flex: 1 }}>
    // </SafeAreaView>

    // {children}


    // <AuthContext.Provider
    // value={{"token": token}}
    // >

    // </AuthContext.Provider>

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Sign In"
          onPress={() => navigation.navigate('SignIn')}
        />
      
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
        />

        {/* <Button
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        /> */}

        <Text> {token === '' ? '' : 'Token: ' + token} </Text>
      </View>
  )
}  

export default HomeAuth

//////////////////////////////////////////////////////////////////////////////
// const someData = {data: "Hello at home screen"}

// function LogoTitle() {
//   return (
//     <>
//       <Text>Logo</Text>
//     </>
//   )
// }

    // {/*<SafeAreaView style={{ flex: 1 }}>*/}
    // {/*</SafeAreaView>*/}


// {props => <HomeScreen {...props} extraData={someData} />}
// {props => <HomeScreen />}

// function MainLayout() {
  //  return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="Home">
  //       <Stack.Screen name="Home" component={HomeScreen}
  //         options={{
  //           headerTitle: (props) => <LogoTitle {...props} />,
  //           headerRight: () => (
  //             <Button
  //               onPress={() => alert('This is a home!')}
  //               title="Info"
  //             />
  //           )
  //         }}
  //       >
  //       </Stack.Screen>

  //       <Stack.Screen name="SignUp" component={SignUpScreen}
  //         options={{
  //           title: 'Sign up',
  //           headerStyle: { backgroundColor: '#f4511e' },
  //           headerTintColor: '#fff',
  //           headerTitleStyle: { fontWeight: 'bold' }
  //         }}
  //         initialParams={{  id: 1,
  //                           token: '' }}>
  //       </Stack.Screen>
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // )
// }




