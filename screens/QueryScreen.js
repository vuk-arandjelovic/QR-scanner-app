import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import getAppVersion from '../APICalls/apiGetAppVersion'

const QueryScreen = () => {
  const [rawData,setRawData] = useState("")
  
  useEffect(() => {
    getAppVersion()
    .then((res)=>{
      setRawData(res["required_version"])
    })
  },[])

  return (
    <View>
      <Text>QueryScreen</Text>
      <Text>{rawData}</Text>
    </View>
  )
}

export default QueryScreen

const styles = StyleSheet.create({})