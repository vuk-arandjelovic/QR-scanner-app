import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const getRacuniFromAPI = () => {
  return fetch('http://192.168.1.17:8000/app_version')
  .then(response => response.json())
  .then(json => {return JSON.stringify(json)})
  .catch(error => {
    console.error(error)
  })
};

const HomeScreen = () => {
  const [rawData,setRawData] = useState({ hits: [] })
  const [data,setData] = useState('')
  // useEffect(()=>{
  //   setData(rawData)
  // },[rawData])
  useEffect(async () => {
    const result = await axios(
      '192.168.1.17:8000/app_version',
    );

    setRawData(result.data);
  });

  return (
    <View style={styles.container}>
        <Text>
          {rawData.hits.map(item => (
            <Text>
              <Text>{item.version_name}</Text>
            </Text>
          ))}
        </Text>
        <TouchableOpacity><Text>Dugme</Text></TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({ 
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
