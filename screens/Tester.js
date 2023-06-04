import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React, {useState,useEffect} from 'react'

const Tester = (Token) => {
  const logInToken = Token.route.params
  const [rawData,setRawData] = useState([])

  useEffect(() => {
    api.getRacunAll(logInToken)
    .then((res)=>{
      // console.log(res)
      setRawData(res)
    })
  },[])

  return (
    <ScrollView>
      <Text>QueryScreen</Text>
      {rawData?.map((item)=>{
        // console.log(item.id)
        return (<Text>{item.kasir.toString()}</Text>)    
      })}
      
    </ScrollView>
  )
}

export default Tester

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
