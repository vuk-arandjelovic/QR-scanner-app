import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const api = require("../API/RacuniAPI").getInstance();

const LoginScreen = () => {
  const navigation = useNavigation()
  const [authToken, setAuthToken] = useState()
  const [email, setEmail] = useState('tester')
  const [password, setPassword] = useState('tester')

  if (authToken !== undefined) {
    setAuthToken(undefined)
  }

  async function handleLogIn() {
    api.Account.loginForAccessTokenTokenPost(email, password, '', (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully. Returned data: ' + data['access_token']);
        if(data !== undefined){
          api.setAccessToken(data['access_token'])
          navigation.navigate('Home')
        }
      }
    });
  }

  async function handleRegister() {
    // AccountAPI.readUsersMeUserMeGet((error, data, response) => {
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     console.log('API called successfully. Returned data: ' + JSON.stringify(data, 0, 4));
    //   }
    // });
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
          onPress={handleLogIn}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleRegister}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
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
  logoContainer: {
    width: '75%',

  },
  logo: {
    objectFit: 'contain',
    borderRadius: 15,
    height: 250,
    aspectRatio: 1 / 1
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
    borderColor: '#0782F9',
    borderWidth: 2
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16
  },
})