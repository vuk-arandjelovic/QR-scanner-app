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
  const [editModal, setEditModal] = useState(false);
  const [editingGuarantee, setEditingGuarantee] = useState(null);
  const [detailsModal, setDetailsModal] = useState(false);
  const [selectedGuarantee, setSelectedGuarantee] = useState(null);
  const [billDetails, setBillDetails] = useState(null);

  const getUserId = async () => {
    try {
      const userId = await StorageService.getUserId();
      setUserId(userId);
    } catch (error) {
      console.error("Error getting userId:", error);
    }
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
  const clearForm = () => {
    setSelectedReceipt(null);
    setSelectedItem(null);
    setGuaranteeName("");
    setExpirationDate("");
  };
  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      setExpirationDate(selectedDate.toLocaleDateString());
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
  const handleEdit = (guarantee) => {
    setEditingGuarantee(guarantee);
    setGuaranteeName(guarantee.name);
    setDate(new Date(guarantee.expiration));
    setExpirationDate(new Date(guarantee.expiration).toLocaleDateString());
    setEditModal(true);
  };
  const handleUpdate = async () => {
    if (!guaranteeName || !date) {
      alert("Please fill all fields");
      return;
    }

    try {
      await GuaranteeService.updateGuarantee(editingGuarantee._id, {
        name: guaranteeName,
        expiration: date,
      });

      alert("Guarantee updated successfully!");
      setEditModal(false);
      clearForm();
      loadGuarantees();
    } catch (err) {
      console.error(err);
      alert("Error updating guarantee");
    }
  };
  const handleCardPress = async (guarantee) => {
    setSelectedGuarantee(guarantee);
    try {
      const billData = await RecieptsService.getReciept(guarantee.bill);
      setBillDetails(billData.response);
      setDetailsModal(true);
    } catch (err) {
      console.error(err);
      alert("Error loading bill details");
    }
  };
  useFocusEffect(
    useCallback(() => {
      getUserId();
      loadData();
      loadGuarantees();
    }, [])
  );
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Garancije:</Text>
        </View>
        <View style={styles.content}>
          {guarantees.map((guarantee) => (
            <TouchableOpacity
              key={guarantee._id}
              style={styles.guaranteeCard}
              onPress={() => handleCardPress(guarantee)}
            >
              <Text style={styles.guaranteeName}>{guarantee.name}</Text>
              <Text style={styles.guaranteeDate}>
                Expires: {new Date(guarantee.expiration).toLocaleDateString()}
              </Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[styles.cardButton, styles.editButton]}
                  onPress={() => handleEdit(guarantee)}
                >
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.cardButton, styles.deleteButton]}
                  onPress={() => handleDelete(guarantee._id)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
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
      <Modal
        visible={editModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setEditModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>Edit Guarantee</Text>

            <View style={styles.formContainer}>
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
                    setEditModal(false);
                    clearForm();
                  }}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.submitButton]}
                  onPress={handleUpdate}
                >
                  <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        visible={detailsModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDetailsModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView>
              {billDetails && (
                <>
                  <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Bill Details</Text>
                    <TouchableOpacity
                      style={styles.closeButton}
                      onPress={() => setDetailsModal(false)}
                    >
                      <Text style={styles.closeButtonText}>×</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Store Information</Text>
                    <Text style={styles.detailText}>
                      Store: {billDetails?.store?.name}
                    </Text>
                    <Text style={styles.detailText}>
                      Company: {billDetails?.store?.company?.name}
                    </Text>
                    <Text style={styles.detailText}>
                      Address: {billDetails?.store?.address}
                    </Text>
                    <Text style={styles.detailText}>
                      City: {billDetails?.store?.city}
                    </Text>
                    <Text style={styles.detailText}>
                      PIB: {billDetails?.store?.company?.pib}
                    </Text>
                  </View>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Bill Information</Text>
                    <Text style={styles.detailText}>
                      Date: {new Date(billDetails?.date).toLocaleString()}
                    </Text>
                    <Text style={styles.detailText}>
                      Bill Number: {billDetails?.pfr}
                    </Text>
                    <Text style={styles.detailText}>
                      Total Amount: {billDetails?.total?.toFixed(2)} RSD
                    </Text>
                    <Text style={styles.detailText}>
                      Tax (PDV): {billDetails?.pdv?.toFixed(2)} RSD
                    </Text>
                  </View>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Items</Text>
                    {billDetails?.items?.map((item, index) => (
                      <View key={index} style={styles.itemCard}>
                        <Text style={styles.itemName}>{item?.item?.name}</Text>
                        <Text style={styles.itemDetails}>
                          Quantity: {item?.amount} × {item?.item?.price} RSD
                        </Text>
                        <Text style={styles.itemTotal}>
                          Total: {item?.total?.toFixed(2)} RSD
                        </Text>
                      </View>
                    ))}
                  </View>
                </>
              )}
            </ScrollView>
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
    alignItems: "center",
    backgroundColor: "#ff4444",
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "#0782F9",
  },
  buttonText: {
    color: "white",
    width: "100%",
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
  guaranteeHeader: {
    marginBottom: 8,
  },
  guaranteeName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemName: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  guaranteeDate: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  cardButton: {
    padding: 8,
    borderRadius: 5,
    minWidth: 70,
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#0782F9",
  },
  deleteButton: {
    backgroundColor: "#ff4444",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  detailsModal: {
    maxHeight: "80%",
  },
  detailsSection: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  detailsHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0782F9",
    marginBottom: 10,
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  itemRow: {
    flexDirection: "column",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "500",
  },
  itemDetails: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#0782F9",
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0782F9",
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 30,
    color: "#666",
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0782F9",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  itemCard: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemDetails: {
    fontSize: 14,
    color: "#666",
  },
  itemTotal: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 4,
    color: "#0782F9",
  },
});
