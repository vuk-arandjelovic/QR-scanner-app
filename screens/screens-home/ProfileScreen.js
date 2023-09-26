import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ProfileScreen = () => {
  const handleDeleteAccount = () => {
    alert("delete account pressed");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileBox}>
        <View style={styles.profileData}>
          <Text style={styles.textStyle}>Username: </Text>
          <Text style={styles.textStyle}>Password: </Text>
          <Text style={styles.textStyle}>Stores Visited: </Text>
          <Text style={styles.textStyle}>Bills Scanned: </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={handleDeleteAccount}
        >
          <Text style={styles.buttonDeleteText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  profileBox: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    borderColor: "#0782F9",
    borderWidth: 1,
    borderRadius: 15,
    width: "90%",
    minHeight: "60%",
    justifyContent: "space-between",
  },
  profileData: {},
  textStyle: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#0782F9",
  },
  buttonDelete: {
    backgroundColor: "#AA4A44",
    borderRadius: 15,
    width: "100%",
    padding: 15,
    color: "white",
  },
  buttonDeleteText: {
    color: "white",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 16,
  },
});
