import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import theme from "@/styles/theme";

const BillCard = ({
  store,
  date,
  total,
  pfr,
  items = [],
  onPress,
  renderActions,
  compact = false,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.billCard, style]}>
      <Text style={styles.storeName}>{store?.name}</Text>
      <Text style={styles.billDate}>{new Date(date).toLocaleDateString()}</Text>

      {!compact && pfr && <Text style={styles.billPfr}>PFR: {pfr}</Text>}

      {!compact && items.length > 0 && (
        <Text style={styles.itemCount}>Items: {items.length}</Text>
      )}

      <Text style={styles.billTotal}>{total?.toFixed(2)} RSD</Text>

      {renderActions && (
        <View style={styles.actionsContainer}>{renderActions()}</View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(...theme.billCard);

export default BillCard;
