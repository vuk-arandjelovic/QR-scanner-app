import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, WelcomeScreen, RegisterScreen, HomeNavigator } from './screens';
import {decode, encode} from 'base-64'

if (!global.btoa) {
global.btoa = encode;
}

if (!global.atob) {
global.atob = decode;
}

const Stack = createNativeStackNavigator()
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" backBehavior="firstRoute">
        <Stack.Screen options={{headerShown:false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeNavigator} />
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
