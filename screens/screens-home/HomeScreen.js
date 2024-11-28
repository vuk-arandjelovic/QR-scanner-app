import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";

import UserService from "@/services/user.service";
import theme from "@/styles/theme";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("user");
  const [loading, setLoading] = useState(true);
  const fetchUsername = async () => {
    try {
      const response = await UserService.getUserData();
      if (response.response.username) {
        setUsername(response.response.username);
      }
    } catch (error) {
      console.error("Error fetching username:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsername();
  }, []);

  const screenScanner = () => {
    navigation.navigate("Scanner");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        {!loading && (
          <Text style={styles.containerTopText}>Welcome {username}!</Text>
        )}
      </View>
      <View style={styles.containerBottom}>
        <TouchableOpacity onPress={screenScanner} style={styles.buttonScanner}>
          <Text style={styles.buttonScannerText}>Scan</Text>
          <Image
            style={styles.logo}
            source={require("../../assets/racuni_scanner_logo.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({ ...theme.home });
