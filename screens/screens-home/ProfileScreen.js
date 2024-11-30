import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import UserService from "@/services/user.service";
import RecieptsService from "@/services/reciepts.service";
import theme from "@/styles/theme";

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState({
    totalSpent: 0,
    monthlySpent: 0,
    lastBillAmount: 0,
    averagePerBill: 0,
    mostVisitedStore: { name: "", visits: 0 },
    largestPurchase: { amount: 0, date: null },
    totalBills: 0,
    uniqueStores: 0,
  });
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );
  const loadData = async () => {
    try {
      const [userRes, receiptsRes] = await Promise.all([
        UserService.getUserData(),
        RecieptsService.getRecieptsDetailed(),
      ]);
      if (userRes.status === "error") {
        console.error(userRes.message);
        alert("Error loading profile data");
        return;
      }
      if (receiptsRes.status === "error") {
        console.error(receiptsRes.message);
        alert("Error loading profile data");
        return;
      }

      setUserData(userRes.response);
      calculateStats(receiptsRes.response);
    } catch (err) {
      console.log(err);
      alert("Error loading profile data");
    }
  };

  const calculateStats = (receipts) => {
    if (!receipts?.length) return;

    const now = new Date();
    const monthAgo = new Date(now.setMonth(now.getMonth() - 1));

    // Sort receipts by date for easier processing
    const sortedReceipts = [...receipts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    // Calculate store visits
    const storeVisits = receipts.reduce((acc, receipt) => {
      const storeName = receipt.store?.name || "Unknown Store";
      acc[storeName] = (acc[storeName] || 0) + 1;
      return acc;
    }, {});

    const mostVisitedStore = Object.entries(storeVisits).reduce(
      (max, [store, visits]) =>
        visits > max.visits ? { name: store, visits } : max,
      { name: "", visits: 0 }
    );

    // Calculate various stats
    const totalSpent = receipts.reduce((sum, r) => sum + (r.total || 0), 0);
    const monthlySpent = receipts
      .filter((r) => new Date(r.date) >= monthAgo)
      .reduce((sum, r) => sum + (r.total || 0), 0);

    // Find largest purchase
    const largestPurchase = receipts.reduce(
      (max, receipt) =>
        receipt.total > max.amount
          ? { amount: receipt.total, date: receipt.date }
          : max,
      { amount: 0, date: null }
    );

    setStats({
      totalSpent,
      monthlySpent,
      lastBillAmount: sortedReceipts[0]?.total || 0,
      averagePerBill: totalSpent / receipts.length,
      mostVisitedStore,
      largestPurchase,
      totalBills: receipts.length,
      uniqueStores: new Set(receipts.map((r) => r.store?._id)).size,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.username}>{userData?.username}</Text>
        <Text style={styles.email}>{userData?.email}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.totalBills}</Text>
            <Text style={styles.statLabel}>Total Bills</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{stats.uniqueStores}</Text>
            <Text style={styles.statLabel}>Unique Stores</Text>
          </View>
        </View>

        <View style={styles.financialCard}>
          <Text style={styles.cardHeader}>Spending Overview</Text>
          <View style={styles.cardRow}>
            <Text style={styles.cardLabel}>Total Spent:</Text>
            <Text style={styles.cardValue}>
              {stats.totalSpent.toFixed(2)} RSD
            </Text>
          </View>
          <View style={styles.cardRow}>
            <Text style={styles.cardLabel}>Last 30 Days:</Text>
            <Text style={styles.cardValue}>
              {stats.monthlySpent.toFixed(2)} RSD
            </Text>
          </View>
          <View style={styles.cardRow}>
            <Text style={styles.cardLabel}>Average per Bill:</Text>
            <Text style={styles.cardValue}>
              {stats.averagePerBill.toFixed(2)} RSD
            </Text>
          </View>
          <View style={styles.cardRow}>
            <Text style={styles.cardLabel}>Last Bill:</Text>
            <Text style={styles.cardValue}>
              {stats.lastBillAmount.toFixed(2)} RSD
            </Text>
          </View>
        </View>

        <View style={styles.highlightsCard}>
          <Text style={styles.cardHeader}>Highlights</Text>
          <View style={styles.highlight}>
            <Text style={styles.highlightLabel}>Most Visited Store</Text>
            <Text style={styles.highlightValue}>
              {stats.mostVisitedStore.name}
              {stats.mostVisitedStore.visits > 0 &&
                ` (${stats.mostVisitedStore.visits} visits)`}
            </Text>
          </View>
          <View style={styles.highlight}>
            <Text style={styles.highlightLabel}>Largest Purchase</Text>
            <Text style={styles.highlightValue}>
              {stats.largestPurchase.amount.toFixed(2)} RSD
            </Text>
            <Text style={styles.highlightSubtext}>
              {stats.largestPurchase.date &&
                new Date(stats.largestPurchase.date).toLocaleDateString()}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  ...theme.profile,
});

export default ProfileScreen;
