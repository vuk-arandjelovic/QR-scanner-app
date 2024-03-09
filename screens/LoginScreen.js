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
import apiExporter from "../API";
const api = apiExporter;
import AsyncStorage from "@react-native-async-storage/async-storage";
// https://react-native-async-storage.github.io/async-storage/docs/usage/

const storeToken = async (value) => {
  try {
    await AsyncStorage.setItem("token", value);
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
      const logInToken = await api.postLogInToken(email, password);
      if (logInToken) {
        // Attempt to store the token
        const tokenStored = await storeToken(logInToken);
        if (tokenStored) {
          // Navigate to "LoggedIn" screen only after token is stored
          navigation.navigate("LoggedIn");
        } else {
          console.error("Token storage failed");
          // Optionally show an alert or handle the failure as needed
        }
      } else {
        console.log("No token received after login.");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        alert("Please fill in both fields.");
        console.log("Error 422... :)");
        return;
      }
      alert("Code " + err.response.status + ": " + err.response.data.detail);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>LogIn</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="E-mail"
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#0782F9",
  },
  inputContainer: {
    width: "80%",
    marginTop: 40,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 15,
    marginTop: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
