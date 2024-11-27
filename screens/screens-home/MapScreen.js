import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import MapView, { Callout, Marker } from "react-native-maps";
import StoresService from "@/services/stores.service";
import RecieptsService from "@/services/reciepts.service";

export default function MapScreen() {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [storeReceipts, setStoreReceipts] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [detailsModal, setDetailsModal] = useState(false);
  const [selectedCompanyPib, setSelectedCompanyPib] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const storesRes = await StoresService.getStores();
      console.log("Stores Response:", JSON.stringify(storesRes, null, 2));
      setStores(storesRes);

      // Create list of unique companies from stores
      const companyList = storesRes.reduce((companies, store) => {
        if (
          store.company &&
          !companies.some((c) => c.key === store.company._id)
        ) {
          companies.push({
            key: store.company._id,
            value: store.company.name || "Unknown Company",
          });
        }
        return companies;
      }, []);

      console.log("Companies List:", companyList);
      setCompanies(companyList);
    } catch (err) {
      console.error("Load Data Error:", err);
      alert("Error loading stores");
    }
  };
  const handleStorePress = async (store) => {
    try {
      const receiptsRes = await RecieptsService.getRecieptsDetailed();
      const storeReceipts = receiptsRes.response.filter(
        (receipt) => receipt.store._id === store._id
      );
      setSelectedStore(store);
      setStoreReceipts(storeReceipts);
      setDetailsModal(true);
    } catch (err) {
      console.error(err);
      alert("Error loading receipts");
    }
  };

  const filteredStores = selectedCompanyPib
    ? stores.filter((store) => store.company?._id === selectedCompanyPib)
    : stores;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 44.78825,
          longitude: 20.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {filteredStores.map((store, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: store.x,
              longitude: store.y,
            }}
            onPress={() => handleStorePress(store)}
          >
            <Callout tooltip>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{store.name}</Text>
                <Text style={styles.calloutText}>
                  {store.city}
                  {"\n"}
                  {store.address}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.filterBox}>
        <Text style={styles.filterHeader}>Filter by Company:</Text>
        <SelectList
          setSelected={setSelectedCompanyPib}
          data={[{ key: "all", value: "All Companies" }, ...companies]}
          boxStyles={styles.selectList}
          save="key"
          onSelect={() => {
            if (selectedCompanyPib === "all") {
              setSelectedCompanyPib(null);
            }
          }}
        />
      </View>

      <View style={styles.storeList}>
        {filteredStores.map((store, index) => (
          <TouchableOpacity
            key={index}
            style={styles.storeCard}
            onPress={() => handleStorePress(store)}
          >
            <Text style={styles.storeName}>{store.name}</Text>
            <Text style={styles.storeCompany}>{store.company?.name}</Text>
            <Text style={styles.storeAddress}>{store.address}</Text>
            <Text style={styles.storeCity}>{store.city}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        visible={detailsModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDetailsModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedStore?.name}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setDetailsModal(false)}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <View style={styles.storeInfo}>
                <Text style={styles.infoText}>
                  Company: {selectedStore?.company?.name}
                </Text>
                <Text style={styles.infoText}>
                  Address: {selectedStore?.address}
                </Text>
                <Text style={styles.infoText}>City: {selectedStore?.city}</Text>
              </View>

              <Text style={styles.receiptHeader}>
                Receipts from this store:
              </Text>
              {storeReceipts.map((receipt, index) => (
                <View key={index} style={styles.receiptCard}>
                  <Text style={styles.receiptDate}>
                    {new Date(receipt.date).toLocaleDateString()}
                  </Text>
                  <Text style={styles.receiptTotal}>
                    Total: {receipt.total.toFixed(2)} RSD
                  </Text>
                  <Text style={styles.receiptItems}>
                    Items: {receipt.items.length}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  map: {
    width: "100%",
    aspectRatio: 1,
  },
  filterBox: {
    width: "100%",
    padding: 20,
  },
  filterHeader: {
    fontSize: 20,
    marginBottom: 10,
  },
  selectList: {
    borderColor: "#0782F9",
    backgroundColor: "#fff",
  },
  storeList: {
    padding: 20,
  },
  storeCard: {
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
  storeCompany: {
    fontSize: 16,
    color: "#0782F9",
    marginBottom: 5,
  },
  storeAddress: {
    fontSize: 14,
    color: "#666",
  },
  storeCity: {
    fontSize: 14,
    color: "#666",
  },
  calloutContainer: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 15,
    maxWidth: 200,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  calloutText: {
    fontSize: 14,
    color: "#666",
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
  storeInfo: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  receiptHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0782F9",
  },
  receiptCard: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  receiptDate: {
    fontSize: 16,
    fontWeight: "bold",
  },
  receiptTotal: {
    fontSize: 16,
    color: "#0782F9",
    marginTop: 5,
  },
  receiptItems: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});
