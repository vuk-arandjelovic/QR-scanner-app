import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileBox}>
        <Text style={styles.textStyle}>Username: </Text>
        <Text style={styles.textStyle}>Password: </Text>
        <Text style={styles.textStyle}>Stores Visited: </Text>
        <Text style={styles.textStyle}>Bills Scanned: </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  profileBox: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#CFCFCF",
    width: "80%",
    height: "80%",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 600,
    color: "#FAFAFA",
    marginBottom: 20,
  },
});
