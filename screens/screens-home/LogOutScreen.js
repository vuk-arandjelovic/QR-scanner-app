import { StyleSheet, Text, ScrollView, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
const LogOutScreen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    AsyncStorage.removeItem("token");
    navigator.navigate("Welcome");
  }, []);
  return <ScrollView></ScrollView>;
};
export default LogOutScreen;
