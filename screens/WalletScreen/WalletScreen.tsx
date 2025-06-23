import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>💼 Billetera</Text>
  </View>
);

const Footer = () => (
  <View style={styles.footerSafe}>
    <Text style={styles.footerText}>
      © 2025 Desarrollador William Cubero. Todos los derechos reservados.
    </Text>
  </View>
);

const WalletScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#0D47A1",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <LinearGradient
        colors={["#ffffff", "#E3F2FD", "#0D47A1"]}
        locations={[0, 0.25, 0.88]}
        style={{ flex: 1 }}
      >
        <View style={styles.wrapper}>
          <Header />

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

          <Footer />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default WalletScreen;
