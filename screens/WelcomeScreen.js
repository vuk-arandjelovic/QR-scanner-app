import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import AuthService from "@/services/auth.service";
import StorageService from "@/services/storage.service";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const navigateLogin = () => {
    navigation.navigate("Login");
  };
  const navigateRegister = () => {
    navigation.navigate("Register");
  };
  useEffect(() => {
    const checkSession = async () => {
      const token = JSON.parse(await StorageService.get("token"));
      if (token) {
        const res = await AuthService.checkSession(token);
        if (res?.status === "success") navigation.navigate("LoggedIn");
      }
    };
    checkSession();
  }, []);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
        style={styles.logo}
        source={require("../assets/racuni_scanner_logo.png")}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={navigateLogin}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateRegister}
          style={[styles.button, styles.button]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0782F9",
  },
  logoContainer: {
    width: "75%",
  },
  logo: {
    objectFit: "contain",
    borderRadius: 15,
    height: 250,
    aspectRatio: 1 / 1,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FAFAFA",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  // Button Variant
  buttonOutline: {
    backgroundColor: "white",
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
