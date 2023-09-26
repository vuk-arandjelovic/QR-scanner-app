import React, { useEffect, useState } from 'react'
import {  StyleSheet,
          Text,
          TouchableOpacity,
          View,
          Image } from 'react-native'

const GuaranteeScreen = () => {
  return (
    <View>
      <View>
          <TouchableOpacity>
            <Text>
              Your Data
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>
              Map View
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>
              Tester
            </Text>
          </TouchableOpacity>
      </View>
      <View>
          <TouchableOpacity>
            <Text>
              Scan
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default GuaranteeScreen