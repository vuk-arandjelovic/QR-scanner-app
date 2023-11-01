import { StyleSheet, Text, ScrollView, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";

const LogOutScreen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      localStorage.clear();
    }

    navigator.navigate("Welcome");
  }, []);

  return <ScrollView></ScrollView>;
};

export default LogOutScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
