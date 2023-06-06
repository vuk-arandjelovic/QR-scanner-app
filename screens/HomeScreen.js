import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'

const api = require("../API/RacuniAPI").getInstance();

const HomeScreen = () => {
  console.log(api.accessToken)
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
  const screenTester = () => {
    navigation.navigate('Tester', Token)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
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
          {/* <TouchableOpacity onPress={screenTester} style={styles.button}>
            <Text style={styles.buttonText}>
              Tester
            </Text>
          </TouchableOpacity> */}
      </View>
      <View style={styles.containerBottom}>
          <TouchableOpacity onPress={screenScanner} style={styles.buttonScanner}>
            <Text style={styles.buttonScannerText}>
              Scan
            </Text>
            <Image
              style={styles.logo}
              source={require('../assets/racuni_scanner_logo.png')}
            />
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({ 
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  containerTop: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  containerBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '80%',
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonScanner: {
    backgroundColor: '#0782F9',
    width: '80%',
    aspectRatio: 1/1,
    borderRadius: 15,
    padding: 30,
    paddingTop:15,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  buttonScannerText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    paddingBottom: 13,
  },
  logo:{
    objectFit: 'contain',
    borderRadius: 15,
    height:250,
    aspectRatio: 1/1
  },
})
