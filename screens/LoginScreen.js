import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import apiExporter from '../API/apiExporter'
const api = apiExporter

const LoginScreen = () => {
  const navigation = useNavigation()
  const [authToken, setAuthToken] = useState()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  if(authToken !== undefined){
    setAuthToken(undefined)
  }

  async function handleLogin(){
    // try{
    //     const logInToken = await api.postLogInToken(email,password)
    //     // console.log("Provere")
    //     // console.log(logInToken)
    //     // console.log(logInToken?.access_token)
    //     // console.log(typeof(logInToken?.access_token))
    //     // console.log("Gotove Provere")
    //     if(logInToken !== undefined){
    //         setAuthToken(logInToken)
    //         navigation.navigate('Home',logInToken)
    //     }
    // }catch(err){
    //     // console.log(err)
    //     if(err.response.status == 422){
    //         console.log("Error 422... :)")
    //         return
    //     }
    //     // console.log(err)
    //     // console.log(err.response.data)
    //     // console.log(err.response.status)
    //     // console.log(err.response.headers)
    //     alert("Code " + err.response.status + ": " +err.response.data.detail)
    //     if(logInToken?.access_token == undefined){
    //         return
    //     }
    // }
        navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Image
        style={styles.logo}
        source={require('../assets/racuni_scanner_logo.png')}
        />
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='E-mail'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput 
                placeholder='Password'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer:{
      width: '75%',

    },
    logo:{
        objectFit: 'contain',
        borderRadius: 15,
        height:250,
        aspectRatio: 1/1
    },
    inputContainer: {
        width: '80%',
        marginTop: 40,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 15,
        marginTop: 5,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        borderColor:'#0782F9',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutlineText: {
        color:'#0782F9',
        fontWeight: '700',
        fontSize: 16
    },
})