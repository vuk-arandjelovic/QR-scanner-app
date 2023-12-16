import {
  HomeScreen,
  MapScreen,
  ProfileScreen,
  QueryScreen,
  GuaranteeScreen,
  Tester,
  ScannerScreen,
  LogOutScreen,
} from "./screens-home";
// import {  WelcomeScreen  } from "../screens"
import { createDrawerNavigator } from "@react-navigation/drawer";

const LoggedIn = createDrawerNavigator();

export default function LoggedInNavigator() {
  const navOptions = {
    headerTintColor: "#fafafa",
    headerStyle: { backgroundColor: "#0782F9" },
  };

  return (
    <LoggedIn.Navigator initialRouteName="Home" backBehavior="firstRoute">
      <LoggedIn.Screen
        name="Home"
        component={HomeScreen}
        options={navOptions}
      />
      <LoggedIn.Screen name="Map" component={MapScreen} options={navOptions} />
      <LoggedIn.Screen
        options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        name="Scanner"
        component={ScannerScreen}
      />
      <LoggedIn.Screen
        name="Profile"
        component={ProfileScreen}
        options={navOptions}
      />
      <LoggedIn.Screen
        name="Query"
        component={QueryScreen}
        options={navOptions}
      />
      <LoggedIn.Screen
        name="Guarantee"
        component={GuaranteeScreen}
        options={navOptions}
      />
      <LoggedIn.Screen name="Tester" component={Tester} options={navOptions} />
      {/* <Drawer.Screen name="Scanner" component={ScannerScreen} /> */}
      <LoggedIn.Screen
        options={{ headerShown: false, drawerItemStyle: { marginTop: "150%" } }}
        name="Log Out"
        component={LogOutScreen}
        style={{ margin: "auto" }}
      />
    </LoggedIn.Navigator>
  );
}
