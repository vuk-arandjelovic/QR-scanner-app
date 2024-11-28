import { RootSiblingParent } from "react-native-root-siblings";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LoginScreen,
  WelcomeScreen,
  RegisterScreen,
  LoggedInNavigator,
} from "./screens";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}
const Welcome = createNativeStackNavigator();

export default function App() {
  const navOptions = {
    headerTintColor: "#fafafa",
    headerStyle: { backgroundColor: "#0782F9" },
  };

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Welcome.Navigator
          initialRouteName="Welcome"
          backBehavior="firstRoute"
          screenOptions={{ cardStyle: { backgroundColor: "#0782F9" } }}
        >
          <Welcome.Screen
            options={{ headerShown: false }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Welcome.Screen
            options={navOptions}
            name="Login"
            component={LoginScreen}
          />
          <Welcome.Screen
            options={navOptions}
            name="Register"
            component={RegisterScreen}
          />
          <Welcome.Screen
            options={{ headerShown: false }}
            name="LoggedIn"
            component={LoggedInNavigator}
          />
        </Welcome.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
