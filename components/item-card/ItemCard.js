import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import theme from "@/styles/theme";

const ItemCard = ({
  item,
  amount,
  total,
  price,
  date,
  highlighted = false,
  onPress,
  renderActions,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemCard, highlighted && styles.highlightedCard, style]}
    >
      <Text style={styles.itemName}>{item?.name}</Text>

      {amount && (
        <Text style={styles.itemDetails}>
          Quantity: {amount} × {price || item?.price} RSD
        </Text>
      )}

      {total && (
        <Text style={styles.itemTotal}>Total: {total.toFixed(2)} RSD</Text>
      )}

      {date && (
        <Text style={styles.dateText}>
          {new Date(date).toLocaleDateString()}
        </Text>
      )}

      {renderActions && (
        <View style={styles.actionsContainer}>{renderActions()}</View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(...theme.itemCard);

export default ItemCard;
