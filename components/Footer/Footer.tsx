import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={24} color="#fff" />
      <Ionicons name="analytics-outline" size={24} color="#fff" />
      <Ionicons name="person-outline" size={24} color="#fff" />
    </View>
  );
}
