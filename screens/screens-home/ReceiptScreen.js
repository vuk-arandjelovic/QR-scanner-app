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
import RecieptsService from "@/services/reciepts.service";
import DateTimePicker from "@react-native-community/datetimepicker";
import StorageService from "@/services/storage.service";

export default function ReceiptScreen() {
  const [receipts, setReceipts] = useState([]);
  const [filteredReceipts, setFilteredReceipts] = useState([]);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [detailsModal, setDetailsModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [userId, setUserId] = useState(null);

  const getUserId = async () => {
    try {
      const userId = await StorageService.getUserId();
      setUserId(userId);
    } catch (error) {
      console.error("Error getting userId:", error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      getUserId();
      loadReceipts();
    }, [])
  );

  const loadReceipts = async () => {
    try {
      const res = await RecieptsService.getRecieptsDetailed(userId);
      setReceipts(res.response);
      setFilteredReceipts(res.response);
    } catch (err) {
      console.error(err);
      alert("Error loading receipts");
    }
  };

  const handleReceiptPress = (receipt) => {
    setSelectedReceipt(receipt);
    setDetailsModal(true);
  };
  const applyFilters = (filters) => {
    let filtered = [...receipts];

    if (filters.dateFrom) {
      filtered = filtered.filter((r) => new Date(r.date) >= filters.dateFrom);
    }
    if (filters.dateTo) {
      filtered = filtered.filter((r) => new Date(r.date) <= filters.dateTo);
    }
    if (filters.minAmount) {
      filtered = filtered.filter((r) => r.total >= filters.minAmount);
    }
    if (filters.maxAmount) {
      filtered = filtered.filter((r) => r.total <= filters.maxAmount);
    }

    setFilteredReceipts(filtered);
    setFilterModal(false);
  };

  const FilterModal = ({ visible, onClose, onApply, onClear }) => {
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const [minAmount, setMinAmount] = useState("");
    const [maxAmount, setMaxAmount] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [datePickerMode, setDatePickerMode] = useState("from");
    const handleClear = () => {
      setDateFrom(null);
      setDateTo(null);
      setMinAmount("");
      setMaxAmount("");
      onApply({}); // Pass empty filters to parent
    };

    const handleApply = () => {
      onApply({
        dateFrom,
        dateTo,
        minAmount: minAmount ? parseFloat(minAmount) : null,
        maxAmount: maxAmount ? parseFloat(maxAmount) : null,
      });
    };
    const handleDateChange = (event, date) => {
      setShowDatePicker(false);
      if (date) {
        if (datePickerMode === "from") {
          setDateFrom(date);
        } else {
          setDateTo(date);
        }
      }
    };

    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={onClose}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={styles.modalContainer}
            onPress={(e) => e.stopPropagation()}
          >
            <Text style={styles.modalTitle}>Filter Receipts</Text>

            <View style={styles.filterSection}>
              <Text style={styles.filterLabel}>Date Range</Text>
              <TouchableOpacity
                style={styles.dateInput}
                onPress={() => {
                  setDatePickerMode("from");
                  setShowDatePicker(true);
                }}
              >
                <Text>
                  {dateFrom ? dateFrom.toLocaleDateString() : "From Date"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dateInput}
                onPress={() => {
                  setDatePickerMode("to");
                  setShowDatePicker(true);
                }}
              >
                <Text>{dateTo ? dateTo.toLocaleDateString() : "To Date"}</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={
                    datePickerMode === "from"
                      ? dateFrom || new Date()
                      : dateTo || new Date()
                  }
                  mode="date"
                  onChange={handleDateChange}
                  display="default"
                />
              )}
              <Text style={styles.filterLabel}>Amount Range</Text>
              <TextInput
                style={styles.input}
                value={minAmount}
                onChangeText={setMinAmount}
                placeholder="Min Amount"
                keyboardType="numeric"
                returnKeyType="done"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />
              <TextInput
                style={styles.input}
                value={maxAmount}
                onChangeText={setMaxAmount}
                placeholder="Max Amount"
                keyboardType="numeric"
                returnKeyType="done"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.clearButton]}
                onPress={handleClear}
              >
                <Text style={styles.buttonText}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.applyButton]}
                onPress={handleApply}
              >
                <Text style={styles.buttonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Receipts</Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilterModal(true)}
        >
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        {filteredReceipts.map((receipt) => (
          <TouchableOpacity
            key={receipt._id}
            style={styles.receiptCard}
            onPress={() => handleReceiptPress(receipt)}
          >
            <Text style={styles.storeName}>{receipt.store?.name}</Text>
            <Text style={styles.receiptDate}>
              {new Date(receipt.date).toLocaleDateString()}
            </Text>
            <Text style={styles.receiptTotal}>
              {receipt.total?.toFixed(2)} RSD
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal
        visible={detailsModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDetailsModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView>
              {selectedReceipt && (
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
                      Store: {selectedReceipt?.store?.name}
                    </Text>
                    <Text style={styles.detailText}>
                      Company: {selectedReceipt?.store?.company?.name}
                    </Text>
                    <Text style={styles.detailText}>
                      Address: {selectedReceipt?.store?.address}
                    </Text>
                    <Text style={styles.detailText}>
                      City: {selectedReceipt?.store?.city}
                    </Text>
                    <Text style={styles.detailText}>
                      PIB: {selectedReceipt?.store?.company?.pib}
                    </Text>
                  </View>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Bill Information</Text>
                    <Text style={styles.detailText}>
                      Date: {new Date(selectedReceipt?.date).toLocaleString()}
                    </Text>
                    <Text style={styles.detailText}>
                      Bill Number: {selectedReceipt?.pfr}
                    </Text>
                    <Text style={styles.detailText}>
                      Total Amount: {selectedReceipt?.total?.toFixed(2)} RSD
                    </Text>
                    <Text style={styles.detailText}>
                      Tax (PDV): {selectedReceipt?.pdv?.toFixed(2)} RSD
                    </Text>
                  </View>

                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Items</Text>
                    {selectedReceipt?.items?.map((item, index) => (
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

      <FilterModal
        visible={filterModal}
        onClose={() => setFilterModal(false)}
        onApply={applyFilters}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  filterButton: {
    backgroundColor: "#0782F9",
    padding: 10,
    borderRadius: 8,
  },
  filterButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 15,
  },
  receiptCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  storeName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  receiptDate: {
    color: "#666",
    marginBottom: 5,
  },
  receiptTotal: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0782F9",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0782F9",
  },
  filterSection: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    marginTop: 12,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#0782F9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#0782F9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  buttonRow: {
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
  clearButton: {
    backgroundColor: "#ff4444",
  },
  applyButton: {
    backgroundColor: "#0782F9",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0782F9",
    textAlign: "center",
  },
  filterSection: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    marginTop: 12,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#0782F9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#0782F9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  buttonRow: {
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
  clearButton: {
    backgroundColor: "#ff4444",
  },
  applyButton: {
    backgroundColor: "#0782F9",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
