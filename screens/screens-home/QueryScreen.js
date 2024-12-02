import { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  RefreshControl,
} from "react-native";
import ItemsService from "@/services/items.service";
import theme from "@/styles/theme";

export default function QueryScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [historyModalVisible, setHistoryModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      // Clear existing search results and input
      setItems([]);
      setSearchQuery("");
    } catch (error) {
      console.error("Error refreshing:", error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const response = await ItemsService.searchItems(searchQuery);
      setItems(response.response);
    } catch (err) {
      console.error(err);
      alert("Error searching items");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };
  const handleHistoryPress = (item) => {
    setSelectedItem(item);
    setHistoryModalVisible(true);
  };
  const PriceHistoryModal = ({ visible, item, onClose }) => {
    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{item?.name}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.priceHistoryContainer}>
              {item?.prices?.length > 0 ? (
                <View style={styles.pricesList}>
                  {item.prices.map((price, index) => (
                    <View key={index} style={styles.priceHistoryItem}>
                      <Text style={styles.priceHistoryDate}>
                        {new Date(price.date).toLocaleDateString()}
                      </Text>
                      <Text style={styles.priceHistoryValue}>
                        {price.price.toFixed(2)} RSD
                      </Text>
                    </View>
                  ))}
                </View>
              ) : (
                <Text style={styles.noHistoryText}>
                  No price history available
                </Text>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search items..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0782F9" style={styles.loader} />
      ) : (
        <ScrollView
          style={styles.resultsContainer}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#0782F9"]}
              tintColor="#0782F9"
            />
          }
        >
          {items && items.length > 0 ? (
            items.map((item, index) => {
              const latestPrice = item.prices.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
              )[0];
              return (
                <View key={index} style={styles.itemCard}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}>Latest Price:</Text>
                    <Text style={styles.priceValue}>
                      {latestPrice?.price.toFixed(2)} RSD
                    </Text>
                  </View>
                  <Text style={styles.dateText}>
                    Last updated:{" "}
                    {new Date(latestPrice?.date).toLocaleDateString()}
                  </Text>
                  <TouchableOpacity
                    style={styles.historyButton}
                    onPress={() => handleHistoryPress(item)}
                  >
                    <Text style={styles.historyButtonText}>
                      View Price History
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : (
            <Text style={styles.noResults}>
              {searchQuery ? "No items found" : "Enter a search term to begin"}
            </Text>
          )}
        </ScrollView>
      )}
      <PriceHistoryModal
        visible={historyModalVisible}
        item={selectedItem}
        onClose={() => {
          setHistoryModalVisible(false);
          setSelectedItem(null);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({ ...theme.query, ...theme.shared });
