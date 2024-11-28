import {
  HomeScreen,
  MapScreen,
  ProfileScreen,
  ReceiptScreen,
  QueryScreen,
  GuaranteeScreen,
  ScannerScreen,
  LogOutScreen,
} from "./screens-home";
import { createDrawerNavigator } from "@react-navigation/drawer";

const LoggedIn = createDrawerNavigator();
export default function LoggedInNavigator() {
  const navOptions = {
    headerTintColor: "#fafafa",
    headerStyle: { backgroundColor: "#0782F9" },
  };
  return (
    <LoggedIn.Navigator
      initialRouteName="Home"
      backBehavior="firstRoute"
      screenOptions={{
        drawerStyle: {
          borderColor: "#f0f0f0",
          borderWidth: 5,
          borderStyle: "solid",
        },
      }}
    >
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
        name="Receipts"
        component={ReceiptScreen}
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
      <LoggedIn.Screen
        options={{
          headerShown: false,
          drawerItemStyle: {
            marginTop: "140%",
            // borderColor: "#f0f0f0",
            // borderWidth: 5,
            // borderStyle: "solid",
            // position: "absolute",
            // width: "93%",
            // bottom: 50,
            // justifyContent: "flex-end",
            // alignSelf: "flex-end",
          },
        }}
        name="Log Out"
        component={LogOutScreen}
        style={{ alignSelf: "flex-end" }}
      />
    </LoggedIn.Navigator>
  );
}
