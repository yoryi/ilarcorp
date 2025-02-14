import React from "react";
import colors from "@theme/colors";
import { View, Text, FlatList, StyleSheet } from "react-native";

const data = [
  { id: "1", title: "BITCOIN", spend: "$30.25", sales: "$149.85", acos: "$149.85" },
  { id: "2", title: "LTC", spend: "$40.00", sales: "$134.00", acos: "$134.50" },
  { id: "3", title: "DAI", spend: "$43.55", sales: "$129.75", acos: "$125.00" },
  { id: "4", title: "SOLANA", spend: "$45.85", sales: "$113.00", acos: "$119.45" },
  { id: "5", title: "TRON", spend: "$54.00", sales: "$99.55", acos: "$85.00" }
];

const Table = () => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.columnHeader}>Title</Text>
        <Text style={styles.columnHeader}>Spend</Text>
        <Text style={styles.columnHeader}>Price</Text>
        <Text style={styles.columnHeader}>Total</Text>
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.title}</Text>
            <Text style={styles.cell}>{item.spend}</Text>
            <Text style={styles.cell}>{item.sales}</Text>
            <Text style={[styles.cell, styles.acos]}>{item.acos}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.gray50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: '100%',
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
  },
  columnHeader: {
    fontWeight: "bold",
    flex: 1,
    color: colors.white,
  },
  cell: {
    flex: 1,
    color: colors.white,
  },
  acos: {
    fontWeight: "bold",
    color: colors.yellow,
  },
});

export default Table;