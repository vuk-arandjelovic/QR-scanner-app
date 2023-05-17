import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: 44.78825,
          longitude: 20.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />  
        <Text>Mapa</Text>      
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({ 
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: 700,
    width: 300,
  },
})
