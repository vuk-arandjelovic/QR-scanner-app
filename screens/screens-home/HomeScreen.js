import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";

// const HomeScreen = (Token) => {
const HomeScreen = () => {
  // const logInToken = Token.route.params.access_token
  // console.log(logInToken)
  const navigation = useNavigation();
  const username = "Tester";

  // useEffect(() => {
  //   localStorage.getItem("token");
  // }, []);

  const screenQueryMenu = () => {
    navigation.navigate("Query");
  };
  const screenMap = () => {
    navigation.navigate("Map");
  };
  const screenScanner = () => {
    navigation.navigate("Scanner");
  };
  const screenTester = () => {
    // navigation.navigate('Tester',logInToken)
    // navigation.navigate('Tester')
    console.log("Tester currently disabled");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.containerTopText}>Welcome {username}!</Text>
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
