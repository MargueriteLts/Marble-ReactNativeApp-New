import React, { useContext } from 'react'
import { View, Button, Text } from 'react-native'

// import { token } from AuthContext

import { AuthContext } from '../AuthContext'


// import {SafeAreaView} from 'react-native'

// import { NavigationContainer } from '@react-navigation/native';
// import SafeAreaView from 'react-native-safe-area-view'
// import jwtDecode from "jwt-decode"

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max)
// }


const ProfileScreen = ({ navigation, route }) => {
  const { token } = useContext(AuthContext)


  // React.useEffect(() => {
  //   if (route.params?.token) {
  //     setToken(route.params?.token)      
  //   }
  // }, [route.params?.token]);


  // !!!
  // const [token, setToken] = useState('')
  // !!!


  // useEffect(() => {
  //   retrieveData()
  //   if (token.length > 0) { // Let's check out this token
  //     console.log(token)
  //     checkOutToken()
  //   } else console.log("No token yet")
  // }, [])


  // const [isLoading, setLoading] = useState(true)
  // const [data, setData] = useState([])
  
  // const emptyUser = {
  //   id: 0,
  //   login: "",
  //   password: "",
  //   email: "",
  //   token: ""
  // }
  // const [user, setUser] = useState(emptyUser)

  // useEffect(() => {
  //   authorise()
  // }, [])

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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> {token === '' ? '' : 'Token: ' + token} </Text>
    </View>
  )
}  

export default ProfileScreen

