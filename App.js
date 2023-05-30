import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScannerScreen, MapScreen, QueryScreen, LoginScreen, HomeScreen, Tester } from './screens';
import {decode, encode} from 'base-64'

if (!global.btoa) {
global.btoa = encode;
}

if (!global.atob) {
global.atob = decode;
}

const Stack = createNativeStackNavigator()
//const APIKey = "AIzaSyA4cPpI8vEtuH7XsehicnxaJVlTGo2Cs4E"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Query" component={QueryScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="Tester" component={Tester} />
      </Stack.Navigator>
    </NavigationContainer>
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
