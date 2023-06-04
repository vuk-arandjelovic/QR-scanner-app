import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const api = require("../API/RacuniAPI").getInstance();

const QueryScreen = () => {
  const [username, setUsername] = useState('...')
  const [brRacuna, setBrRacuna] = useState(0)
  const [ukupnaSuma, setUkupnaSuma] = useState('0 rsd')
  const [listaRacuna, setListaRacuna] = useState([])

  useEffect(() => {
    api.Account.readUsersMeUserMeGet((error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
        setUsername(data['username'])
      }
    })

    api.Racuni.getRacunAllRacunAllGet((error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
        setBrRacuna(data.length)

        var suma = 0.0
        var lista = []
        data.forEach(element => {
          lista.push(element)
          suma += element['ukupanIznos']
        })
        setUkupnaSuma(suma.toFixed(2) + ' rsd')
        setListaRacuna(lista)
      }
    })
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>
          Korisničko ime: {username}
        </Text>
        <Text>
          Ukupno računa: {brRacuna}
        </Text>
        <Text>
          Količina potrošenog novca: {ukupnaSuma}
        </Text>
      </View>
      <View style={styles.container}>
        {listaRacuna.map(racun =>
          <View style={styles.racun}>
            <Text>{racun['firma']['naziv']}</Text>
            <Text>{racun['prodavnica']['naziv']}</Text>
            <View>
              {racun['artikli'].map(artikal =>
                <View style={styles.artikal}>
                  <Text>{artikal['naziv']}</Text>
                  <Text>{artikal['cena']} rsd</Text>
                </View>
              )}
            </View>
            <Text>Ukupan iznos: {racun['ukupanIznos']} rsd</Text>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

export default QueryScreen

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  racun: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#EEE'
  },
  artikal: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#DDE'
  }
})