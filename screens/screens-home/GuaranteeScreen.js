import React, { useEffect, useState } from 'react'
import {  StyleSheet,
          Text,
          TouchableOpacity,
          View,
          Image } from 'react-native'
import React from 'react'

const GuaranteeScreen = () => {
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
          <TouchableOpacity onPress={screenTester} style={styles.button}>
            <Text style={styles.buttonText}>
              Tester
            </Text>
          </TouchableOpacity>
      </View>
      <View style={styles.containerBottom}>
          <TouchableOpacity onPress={screenScanner} style={styles.buttonScanner}>
            <Text style={styles.buttonScannerText}>
              Scan
            </Text>
            <Image
              style={styles.logo}
              source={require('../../assets/racuni_scanner_logo.png')}
            />
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default GuaranteeScreen