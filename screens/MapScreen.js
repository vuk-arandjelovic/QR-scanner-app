import { StyleSheet, Text, ScrollView, View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import React, {useEffect, useState} from 'react'
import MapView, {Callout} from 'react-native-maps'
import {Marker} from 'react-native-maps'
import apiExporter from '../API/apiExporter'

const api = apiExporter

const MapScreen = () => {

  const [selected, setSelected] = React.useState("")
  const [markers, setMarkers] = React.useState([])
  const [rawData, setRawData] = React.useState([])
  const [listBoxData, setListBoxData] = React.useState([])

  // Ucitavanje prodavnica sa API-ja i punjenje lista
  useEffect(() => {
    // API poziv
    api.getProdavnicaAll()
    .then((res)=>{
      // Podatci za debugging
      setRawData([res])

      // Ciscenje lista
      setListBoxData([])
      setMarkers([])

      // Obrada dobijenih prodavnica
      res.forEach(element => {
        var listBoxObject = {}
        var markersObject = {}

        // Objekat za DropDown listu prodavnica
        listBoxObject["key"] = element['id'].toString()
        listBoxObject["value"] = element['naziv']
        listBoxData.push(listBoxObject)

        // Objekat za marker na mapi
        markersObject['latitude'] = element['x']
        markersObject['longitude'] = element['y']
        markersObject['naziv'] = element['naziv'].toString()
        markersObject['grad'] = element['grad'].toString()
        markersObject['adresa'] = element['adresa'].toString()
        markers.push(markersObject)
      })

      // Pozivanje set metoda da bi se izazvalo ponovno crtanje
      setListBoxData(listBoxData)
      setMarkers(markers)
    })
  },[])

  return (
    <ScrollView>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: 44.78825,
          longitude: 20.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
          {markers && markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker['latitude'],
                longitude: marker['longitude'],
              }}
              >
              <Callout tooltip>
                <View style={{backgroundColor: 'white', borderColor: 'black', borderRadius: 5, padding: 20}}>
                  <Text style={{fontWeight: 'bold'}}>
                    {marker['naziv']}
                  </Text>
                  <Text style={{marginTop: 10}}>
                    {marker['grad'] + '\n' + marker['adresa']}
                  </Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView> 

        <Text style={styles.text}>
          Lista prodavnica:
        </Text>
        
        <SelectList 
          boxStyles={{width:'80%'}}
          inputStyles={{width:'100%'}}
          setSelected={(val) => setSelected(val)} 
          data={listBoxData} 
          save="value"
        />

        <Text>
          {this.width}
        </Text>

        <Text>
          {JSON.stringify(rawData, 0, 4)}
        </Text>
    </ScrollView>
  )
}

export default MapScreen

const styles = StyleSheet.create({ 
  map: {
    width: '100%',
    aspectRatio: 1
  },
  text: {
    fontSize: 20, 
    textAlign: 'left', 
    width: '90%', 
    margin: 10
  },
})