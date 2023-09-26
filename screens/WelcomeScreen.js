import React from 'react'
import { StyleSheet,
         Text,
         TextInput,
         View,
         TouchableOpacity,
         Image,
         KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const WelcomeScreen = () => {
  const navigation = useNavigation()

  const navigateLogin = () => {
    navigation.navigate('Login')
  }
  const navigateRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Image
        style={styles.logo}
        source={require('../assets/racuni_scanner_logo.png')}
        />
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={navigateLogin}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={navigateRegister}
                style={[styles.button, styles.button]}
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#0782F9",
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
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#FAFAFA",
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