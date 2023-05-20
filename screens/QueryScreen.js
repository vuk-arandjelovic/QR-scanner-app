import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import apiExporter from '../API/apiExporter'
const api = apiExporter

const QueryScreen = () => {
  const [rawData,setRawData] = useState([])
  
  useEffect(() => {
    api.getAppVersion()
    // api.getProdavnicaAll()
    .then((res)=>{
      setRawData([res])
    })
  },[])

  return (
    <View>
      <Text>QueryScreen</Text>
      {/* <Text>{rawData[0].map((item)=>{
        // console.log(item)
        // console.log(item['naziv'])
        return `${item['naziv']}   
      })}
      </Text> */}
      <Text>{rawData.map((item)=>{
        return item['required_version=']       
      })}
      </Text>
    </View>
  )
}

export default QueryScreen

const styles = StyleSheet.create({})