import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SelectList } from "react-native-dropdown-select-list";
import RecieptsService from "@/services/reciepts.service";
import GuaranteeService from "@/services/guarantee.service";
import StoresService from "@/services/stores.service";
import StorageService from "@/services/storage.service";
import ItemsService from "@/services/items.service";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function GuaranteeScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [guaranteeName, setGuaranteeName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [receipts, setReceipts] = useState([]);
  const [stores, setStores] = useState([]);
  const [receiptItems, setReceiptItems] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [guarantees, setGuarantees] = useState([]);
  const [userId, setUserId] = useState(null);
  const getUserId = async () => {
    try {
      const userId = await StorageService.getUserId();
      setUserId(userId);
    } catch (error) {
      console.error("Error getting userId:", error);
    }
  };
  const loadGuarantees = async () => {
    try {
      const res = await GuaranteeService.getUserGuarantees();
      setGuarantees(res);
    } catch (err) {
      console.error(err);
      alert("Error loading guarantees");
    }
  };
  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      setExpirationDate(selectedDate.toLocaleDateString());
    }
  };
  useFocusEffect(
    useCallback(() => {
      getUserId();
      loadData();
      loadGuarantees();
    }, [])
  );

  const loadData = async () => {
    try {
      const [receiptsRes, storesRes] = await Promise.all([
        RecieptsService.getReciepts(),
        StoresService.getStores(),
      ]);

      const storesMap = {};
      storesRes.forEach((store) => {
        storesMap[store._id] = store.name;
      });

      setStores(storesMap);
      setReceipts(receiptsRes);
    } catch (err) {
      console.error(err);
      alert("Error loading data");
    }
  };

  const handleSelectReceipt = async (val) => {
    const receipt = receipts.find((r) => r._id === val);
    setSelectedReceipt(receipt);

    if (receipt?.items?.length > 0) {
      try {
        const itemsRes = await ItemsService.getFromBill(receipt._id);
        const formattedItems = itemsRes.map((item) => ({
          key: item.itemId,
          value: `${item.amount}x ${item.name} - ${item.total.toFixed(2)} RSD`,
        }));
        setReceiptItems(formattedItems);
      } catch (err) {
        console.error("Error processing items:", err);
        alert("Error loading items");
      }
    }
    setSelectedItem(null);
  };

  const formatReceiptOption = (receipt) => {
    const date = new Date(receipt.date).toLocaleDateString();
    const storeName = stores[receipt.store] || "Unknown Store"; // Changed from receipt.store._id
    const total = receipt.total?.toFixed(2) || "0.00";
    return {
      key: receipt._id,
      value: `${storeName} - ${date} - ${total} RSD`,
    };
  };
  const handleAddGuarantee = async () => {
    if (!selectedReceipt || !selectedItem || !guaranteeName || !date) {
      alert("Please fill all fields");
      return;
    }
    if (!userId) {
      alert("User ID unavailable");
      return;
    }

    try {
      await GuaranteeService.createGuarantee(
        userId,
        selectedReceipt._id,
        selectedItem,
        guaranteeName,
        date
      );
      alert("Guarantee added successfully!");
      setModalVisible(false);
      clearForm();
      setTimeout(() => {
        loadGuarantees();
      }, 1000);
    } catch (err) {
      console.error(err);
      alert("Error adding guarantee");
    }
  };
  const handleDelete = async (id) => {
    try {
      await GuaranteeService.deleteGuarantee(id);
      alert("Guarantee deleted successfully!");
      loadGuarantees();
    } catch (err) {
      console.error(err);
      alert("Error deleting guarantee");
    }
  };
  const clearForm = () => {
    setSelectedReceipt(null);
    setSelectedItem(null);
    setGuaranteeName("");
    setExpirationDate("");
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Garancije:</Text>
        </View>
        <View style={styles.content}>
          {guarantees.map((guarantee) => (
            <View key={guarantee._id} style={styles.guaranteeCard}>
              <Text style={styles.guaranteeName}>{guarantee.name}</Text>
              <Text style={styles.guaranteeDate}>
                Expires: {new Date(guarantee.expiration).toLocaleDateString()}
              </Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(guarantee._id)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>Add Guarantee</Text>

            <View style={styles.formContainer}>
              <Text style={styles.label}>Select Receipt:</Text>
              <SelectList
                setSelected={handleSelectReceipt}
                data={receipts.map(formatReceiptOption)}
                boxStyles={styles.selectBox}
                save="key"
              />

              {selectedReceipt && (
                <>
                  <Text style={styles.label}>Select Item:</Text>
                  <SelectList
                    setSelected={setSelectedItem}
                    data={receiptItems}
                    boxStyles={styles.selectBox}
                    save="key"
                  />
                </>
              )}

              <Text style={styles.label}>Guarantee Name:</Text>
              <TextInput
                style={styles.input}
                value={guaranteeName}
                onChangeText={setGuaranteeName}
                placeholder="Enter guarantee name"
              />

              <Text style={styles.label}>Expiration Date:</Text>
              <TouchableOpacity
                style={styles.dateInput}
                onPress={() => setShowDatePicker(true)}
              >
                <Text style={styles.dateText}>
                  {expirationDate || "Select expiration date"}
                </Text>
              </TouchableOpacity>

              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onDateChange}
                  minimumDate={new Date()}
                />
              )}

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.cancelButton]}
                  onPress={() => {
                    setModalVisible(false);
                    clearForm();
                  }}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.submitButton]}
                  onPress={handleAddGuarantee}
                >
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#0782F9",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#0782F9",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  addButtonText: {
    fontSize: 30,
    color: "white",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  selectBox: {
    borderWidth: 1,
    borderColor: "#0782F9",
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#0782F9",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "#ff4444",
  },
  submitButton: {
    backgroundColor: "#0782F9",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#0782F9",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  dateText: {
    color: "#000",
  },
  guaranteeCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  guaranteeName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  guaranteeDate: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: "#ff4444",
    padding: 8,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
