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
  if (!value) {
    console.error("No token provided to store");
    return false;
  }
  try {
    await StorageService.set("token", value);
    return true;
  } catch (e) {
    console.error(e);
    alert("Error saving token");
    return false;
  }
};

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
    try {
      const res = await AuthService.login(email, password);
      if (res?.status !== "success") {
        alert("Login failed. Please try again later.");
        return;
      }
      const tokenStored = await storeToken(res?.response?.token);
      if (!tokenStored) {
        console.error("Token storage failed");
        return;
      }
      navigation.navigate("LoggedIn");
    } catch (err) {
      console.log(err);
      alert("Code " + err?.status + ": " + err?.message);
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
