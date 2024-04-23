import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import apiExporter from "../../API/apiExporter";
const api = apiExporter;

const QueryScreen = () => {
  const [rawData, setRawData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    api.getRacunAll().then((res) => {
      setRawData(res);
    });
  }, []);

  const handleFilter = () => {
    console.log(rawData);
    alert("triggered filter");
  };
  const handleDetails = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
    console.log(item);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 30 }}>Skenirani Racuni:</Text>
        <TouchableOpacity style={styles.filter} onPress={handleFilter}>
          <Image
            style={styles.filterIcon}
            source={require("../../assets/filter_icon.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {rawData.map((item, index) => (
          <TouchableOpacity
            style={styles.contentItem}
            key={index}
            onPress={() => handleDetails(item)}
          >
            <View>
              <Text style={{ fontSize: 25 }}>{item?.prodavnica?.naziv}</Text>
              <Text>{item?.pfrVreme}</Text>
            </View>
            <Text style={{ fontSize: 20 }}>{item?.ukupanIznos}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal visible={isModalVisible} animationType="fade" transparent={true}>
        <View
          style={{
            backgroundColor: "#00000080",
            width: "100%",
            height: "100%",
          }}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>Details</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            {selectedItem && (
              <View style={styles.modalContent}>
                <Text>{selectedItem?.prodavnica?.naziv}</Text>
                <Text>{selectedItem?.pfrVreme}</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default QueryScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
  modalContainer: {
    top: 90,
    height: "75%",
    width: "90%",
    alignSelf: "center",
    // justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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
  modalHeader: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 15,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#007AFF",
  },
  modalContent: {
    padding: 20,
  },
});
