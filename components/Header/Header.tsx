import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Ionicons name="wallet-outline" size={24} color="#fff" />
      </View>
      <Text style={styles.title}>My Wallet</Text>
      <View style={styles.iconWrapper}>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>
    </View>
  );
}
