import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import UserService from "@/services/user.service";

const ProfileScreen = () => {
  const [rawData, setRawData] = useState();
  useEffect(() => {
    UserService.getUserData().then((response) => {
      setRawData(response.response);
    });
  }, []);

  const handleDeleteAccount = () => {
    alert("delete account pressed");
    console.log(rawData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileBox}>
        <View style={styles.profileData}>
          <Text style={styles.textStyle}>Username: {rawData?.username}</Text>
          {/* <Text style={styles.textStyle}>Password: {rawData?.password}</Text> */}
          <Text style={styles.textStyle}>
            Stores Visited: {rawData?.stores_visited?.length}
          </Text>
          <Text style={styles.textStyle}>
            Bills Scanned: {rawData?.bills?.length}
          </Text>
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
    // minHeight: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  profileBox: {
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    // borderColor: "#0782F9",
    // borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    // minHeight: "60%",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  profileData: {},
  textStyle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#0782F9",
  },
  buttonDelete: {
    backgroundColor: "#AA4A44",
    borderRadius: 10,
    width: "100%",
    padding: 15,
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonDeleteText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
