import React, { useState, useEffect } from "react";
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
  // Filter states
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerMode, setDatePickerMode] = useState("from");

  const getUserId = async () => {
    try {
      const userId = await StorageService.getUserId();
      setUserId(userId);
    } catch (error) {
      console.error("Error getting userId:", error);
    }
  };
  useEffect(() => {
    getUserId();
    loadReceipts();
  }, []);

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

  const applyFilters = () => {
    let filtered = [...receipts];

    if (dateFrom) {
      filtered = filtered.filter((r) => new Date(r.date) >= dateFrom);
    }
    if (dateTo) {
      filtered = filtered.filter((r) => new Date(r.date) <= dateTo);
    }
    if (minAmount) {
      filtered = filtered.filter((r) => r.total >= parseFloat(minAmount));
    }
    if (maxAmount) {
      filtered = filtered.filter((r) => r.total <= parseFloat(maxAmount));
    }

    setFilteredReceipts(filtered);
    setFilterModal(false);
  };

  const clearFilters = () => {
    setDateFrom(null);
    setDateTo(null);
    setMinAmount("");
    setMaxAmount("");
    setFilteredReceipts(receipts);
    setFilterModal(false);
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

      {/* Details Modal - Same as GuaranteeScreen */}
      <Modal
        visible={detailsModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDetailsModal(false)}
      >
        {/* Copy the entire Modal content from GuaranteeScreen */}
      </Modal>

      {/* Filter Modal */}
      <Modal
        visible={filterModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setFilterModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
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

              <Text style={styles.filterLabel}>Amount Range</Text>
              <TextInput
                style={styles.input}
                value={minAmount}
                onChangeText={setMinAmount}
                placeholder="Min Amount"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                value={maxAmount}
                onChangeText={setMaxAmount}
                placeholder="Max Amount"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.clearButton]}
                onPress={clearFilters}
              >
                <Text style={styles.buttonText}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.applyButton]}
                onPress={applyFilters}
              >
                <Text style={styles.buttonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {showDatePicker && (
        <DateTimePicker
          value={
            datePickerMode === "from"
              ? dateFrom || new Date()
              : dateTo || new Date()
          }
          mode="date"
          onChange={handleDateChange}
        />
      )}
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
});
