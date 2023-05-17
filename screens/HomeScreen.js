import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
  const navigation = useNavigation()

  const screenQueryMenu = () => {

    navigation.navigate('Query')
  }
  const screenMap = () => {

    navigation.navigate('Map')
  }
  const screenScanner = () => {

    navigation.navigate('Scanner')
  }


  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={screenQueryMenu} style={styles.button}>
          <Text style={styles.buttonText}>
            Your Data
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={screenMap} style={styles.button}>
          <Text style={styles.buttonText}>
            Map View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={screenScanner} style={styles.button}>
          <Text style={styles.buttonText}>
            QR Scanner
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({ 
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '80%',
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
})
