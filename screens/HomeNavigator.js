import {  HomeScreen,
  MapScreen,
  ProfileScreen,
  QueryScreen,
  GuaranteeScreen,
  Tester,
  ScannerScreen, } from "./screens-home" 
// import {  WelcomeScreen  } from "../screens"
import {  createDrawerNavigator  } from '@react-navigation/drawer';

const Home = createDrawerNavigator();

export default function HomeNavigation() {
  const navOptions = {headerTintColor:"#fafafa",headerStyle:{backgroundColor:"#0782F9"}}

return (
  <Home.Navigator initialRouteName="Home" backBehavior="firstRoute">
    <Home.Screen name="Home" component={HomeScreen} options={navOptions} />
    <Home.Screen name="Map" component={MapScreen} options={navOptions} />
    <Home.Screen options={{headerShown:false, drawerItemStyle:{display:'none'}}} name="Scanner" component={ScannerScreen} />
    <Home.Screen name="Profile" component={ProfileScreen} options={navOptions} />
    <Home.Screen name="Query" component={QueryScreen} options={navOptions} />
    <Home.Screen name="Guarantee" component={GuaranteeScreen} options={navOptions} />
    <Home.Screen name="Tester" component={Tester} options={navOptions} />
    {/* <Drawer.Screen name="Scanner" component={ScannerScreen} /> */}
    {/* <Drawer.Screen options={{headerShown:false, drawerItemStyle:{marginTop:'150%'}}} name="Welcome" component={WelcomeScreen} style={{margin:'auto'}} /> */}
  </Home.Navigator>
);
}