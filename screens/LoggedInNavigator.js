import { View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
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
import theme from "@/styles/theme";

function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={theme.shared.logoutContainer}>
        <DrawerItem
          label="Log Out"
          onPress={() => props.navigation.navigate("Log Out")}
        />
      </View>
    </View>
  );
}

const LoggedIn = createDrawerNavigator();
export default function LoggedInNavigator() {
  const navOptions = {
    headerTintColor: "#fafafa",
    headerStyle: { backgroundColor: "#0782F9" },
  };
  return (
    <LoggedIn.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
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
      <LoggedIn.Screen
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
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
        name="Guarantee"
        component={GuaranteeScreen}
        options={navOptions}
      />
      <LoggedIn.Screen name="Map" component={MapScreen} options={navOptions} />
      <LoggedIn.Screen
        name="Query"
        component={QueryScreen}
        options={navOptions}
      />
      <LoggedIn.Screen
        options={{
          headerShown: false,
          drawerItemStyle: { display: "none" },
        }}
        name="Log Out"
        component={LogOutScreen}
      />
    </LoggedIn.Navigator>
  );
}
