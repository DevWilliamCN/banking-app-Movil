import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const WalletScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <LinearGradient
        colors={["#ffffff", "#E3F2FD", "#0D47A1"]}
        locations={[0, 0.3, 1]}
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>💼 Billetera</Text>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.balanceCard}>
            <Text style={styles.balanceTitle}>Saldo Disponible</Text>
            <Text style={styles.balanceAmount}>₡ 45,200.00</Text>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>➕ Recargar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>💸 Retirar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>🔄 Transferir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>📄 Movimientos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.transactions}>
            <Text style={styles.sectionTitle}>Movimientos Recientes</Text>

            <View style={styles.transactionItem}>
              <Text style={styles.transactionLabel}>Recarga SINPE</Text>
              <Text style={styles.transactionAmount}>+ ₡10,000</Text>
            </View>

            <View style={styles.transactionItem}>
              <Text style={styles.transactionLabel}>Pago Netflix</Text>
              <Text style={styles.transactionAmount}>- ₡4,500</Text>
            </View>

            <View style={styles.transactionItem}>
              <Text style={styles.transactionLabel}>Retiro</Text>
              <Text style={styles.transactionAmount}>- ₡3,000</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WalletScreen;
