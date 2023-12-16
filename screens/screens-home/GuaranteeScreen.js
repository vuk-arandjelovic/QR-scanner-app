import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";

const data = [{ pib: "" }, {}, {}];
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const GuaranteeScreen = () => {
  const handleFilter = () => {
    alert("Filter Pressed");
  };
  const handleAddGuarantee = () => {
    alert("Add Pressed");
  };
  const handleRemoveGuarantee = () => {
    alert("Remove Pressed");
  };
  const handleOpenModal = () => {
    alert(apiUrl);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 25 }}>Garancije:</Text>
          <TouchableOpacity style={styles.filter} onPress={handleFilter}>
            <Image
              style={styles.filterIcon}
              source={require("../../assets/filter_icon.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.contentItem}
            onPress={handleOpenModal}
          >
            <View>
              <Text style={{ fontSize: 22 }}>Patike Nike 97</Text>
              <Text>Vazi do: 30.11.2024</Text>
            </View>
            <Text style={{ fontSize: 20 }}>7.499,00 RSD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentItem}>
            <View>
              <Text style={{ fontSize: 22 }}>ASUS RTX4090Ti</Text>
              <Text>Vazi do: 6.6.2026</Text>
            </View>
            <Text style={{ fontSize: 20 }}>287.949,00 RSD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentItem}>
            <View>
              <Text style={{ fontSize: 22 }}>Jakna Plishana</Text>
              <Text>Vazi do: 5.12.2024</Text>
            </View>
            <Text style={{ fontSize: 20 }}>4.699,00 RSD</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddGuarantee}>
        <Text style={{ fontSize: 40, lineHeight: 45, color: "#0782F9" }}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GuaranteeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    // justifyContent: "center",
    // alignItems: "flex-start",
    marginTop: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomColor: "#0782F9",
    borderBottomWidth: 2,
    marginHorizontal: 20,
  },
  filter: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  filterIcon: {
    aspectRatio: 1 / 1,
    height: 40,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  contentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    // borderColor: "#000",
    // borderWidth: 2,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  addButton: {
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    aspectRatio: 1 / 1,
    bottom: 25,
    right: 25,
  },
});
