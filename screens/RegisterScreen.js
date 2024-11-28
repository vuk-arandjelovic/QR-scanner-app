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
import theme from "@/styles/theme";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    try {
      const usernameTaken = await AuthService.checkUsername(username);
      if (usernameTaken?.status === "error") {
        alert("Username already taken.");
        return;
      }
      const registered = await AuthService.register(username, email, password);

      if (registered?.status === "success") {
        navigation.navigate("Welcome");
        alert("Registration successful!");
      } else {
        alert(`Registration failed: ${registered?.message}`);
      }
    } catch (err) {
      console.log(err);
      if (err?.response && err?.response?.status === 422) {
        alert("Please fill in both fields.");
        console.log("Error 422... :)");
        return;
      }
      alert(
        "Code " + err?.response?.status + ": " + err?.response?.data?.detail
      );
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
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
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  ...theme.auth,
});
