import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiExporter from "../../API";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState(null); // Initialize username state with null
  const [loading, setLoading] = useState(true); // Initialize loading state
  const fetchUsername = async () => {
    try {
      const user = await apiExporter.getUserData(); // Assuming this fetches user data from API
      setUsername(user.username); // Set username state
    } catch (error) {
      console.error("Error fetching username:", error);
    } finally {
      setLoading(false); // Update loading state when fetching is done (whether successful or not)
    }
  };
  useEffect(() => {
    fetchUsername(); // Call the fetchUsername function when component mounts
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

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  containerTop: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    // backgroundColor:'#fafafa',
    borderRadius: 15,
    aspectRatio: 2 / 1,
  },
  containerTopText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0782F9",
  },
  containerBottom: {
    // borderWidth: 2,
    // borderColor: "red",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonScanner: {
    backgroundColor: "#0782F9",
    width: "80%",
    aspectRatio: 1 / 1,
    borderRadius: 10,
    padding: 30,
    paddingTop: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonScannerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    paddingBottom: 13,
  },
  logo: {
    objectFit: "contain",
    borderRadius: 10,
    height: 250,
    aspectRatio: 1 / 1,
  },
});
