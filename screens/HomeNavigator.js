import { View, Text } from 'react-native'
import {  HomeScreen,
  MapScreen,
  // ScannerScreen,
  ProfileScreen,
  QueryScreen,
  GuaranteeScreen,
  Tester, } from "./screens-home" 
import {  WelcomeScreen  } from "../screens"
import {  createDrawerNavigator  } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function HomeNavigation() {
return (

  <Drawer.Navigator initialRouteName="Home" backBehavior="firstRoute">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Map" component={MapScreen} />
    {/* <Drawer.Screen options={{headerShown:false}} name="Scanner" component={ScannerScreen} /> */}
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Query" component={QueryScreen} />
    <Drawer.Screen name="Guarantee" component={GuaranteeScreen} />
    <Drawer.Screen name="Tester" component={Tester} />
    <Drawer.Screen options={{headerShown:false}} name="Welcome" component={WelcomeScreen} style={{margin:'auto'}} />
  </Drawer.Navigator>

);
}