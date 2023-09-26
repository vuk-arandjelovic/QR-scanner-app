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

const Welcome = createNativeStackNavigator()
// const Drawer = createDrawerNavigator();

export default function App() {
const navOptions = {headerTintColor:"#fafafa",headerStyle:{backgroundColor:"#0782F9"}}
  
  return (
    <NavigationContainer>
      <Welcome.Navigator initialRouteName="Welcome" backBehavior="firstRoute" screenOptions={{cardStyle:{backgroundColor:"#0782F9"}}}>
        <Welcome.Screen options={{headerShown:false}} name="Welcome" component={WelcomeScreen} />
        <Welcome.Screen options={navOptions} name="Login" component={LoginScreen} />
        <Welcome.Screen options={navOptions} name="Register" component={RegisterScreen} />
        <Welcome.Screen options={{headerShown:false}} name="Home" component={HomeNavigator} />
      </Welcome.Navigator>
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
