import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

//const APIKey = "AIzaSyA4cPpI8vEtuH7XsehicnxaJVlTGo2Cs4E"

const styles2 = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: 700,
    width: 300,
  },
 });

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MapView
        style={styles2.map}
        initialRegion={{
          latitude: 58.78825,
          longitude: 58.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />  
      <Text></Text>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
