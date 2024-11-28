import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/core";
import AuthService from "@/services/auth.service";
import StorageService from "@/services/storage.service";
import theme from "@/styles/theme";
const storeToken = async (value) => {
  try {
    await StorageService.set("token", value);
    return true; // Return true if storing is successful
  } catch (e) {
    console.error(e);
    alert("Error saving token");
    return false; // Return false if storing fails
  }
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const res = await AuthService.login(email, password);
      console.log(res);
      if (res?.status !== "success") {
        console.log("No token received after login.");
        alert("Login failed.");
        return;
      }
      const tokenStored = await storeToken(
        JSON.stringify(res?.response?.token)
      );
      if (!tokenStored) {
        console.error("Token storage failed");
        return;
      }
      navigation.navigate("LoggedIn");
    } catch (err) {
      console.log(err);
      if (err?.response && err?.response?.status === 422) {
        alert("Please fill in both fields.");
      } else
        alert(
          "Code " + err?.response?.status + ": " + err?.response?.data?.detail
        );
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>LogIn</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  ...theme.auth,
});
