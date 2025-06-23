import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const actions = [
    { icon: "swap-horizontal", label: "Transfer", screen: "Transfer", lib: Ionicons },
    { icon: "file-document-outline", label: "Pay", screen: "Payments", lib: MaterialCommunityIcons },
    { icon: "wallet-outline", label: "Accounts", screen: "Wallet", lib: Ionicons },
    { icon: "receipt-outline", label: "Receipts", screen: "Receipts", lib: Ionicons },
    { icon: "refresh-circle-outline", label: "Reload", screen: "Reload", lib: Ionicons },
    { icon: "bank-outline", label: "Bank", screen: "Bank", lib: MaterialCommunityIcons },
    { icon: "cash-outline", label: "Cash", screen: "Cash", lib: Ionicons },
    { icon: "settings-outline", label: "Settings", screen: "Settings", lib: Ionicons },
    { icon: "home-outline", label: "Home", screen: "Home", lib: Ionicons },
    { icon: "wallet", label: "Balance", screen: "Balance", lib: MaterialCommunityIcons },
    { icon: "credit-card", label: "Withdraw", screen: "Withdraw", lib: MaterialCommunityIcons },
    { icon: "cellphone", label: "Mobile", screen: "Mobile", lib: MaterialCommunityIcons },
  ];

  const transactions = [
    { name: "Mark Zuck", amount: +237, info: "Transfer from 129 00 456" },
    { name: "James Hiu", amount: -200, info: "Transfer to 483 92 001" },
    { name: "Elon Musk", amount: +1450, info: "Transfer from 712 04 333" },
  ];

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
        {/* 🔝 Header fijo */}
        <Header />

        {/* 🔃 Scroll de contenido */}
        <ScrollView contentContainerStyle={{ paddingTop: 40, paddingBottom: 90 }}>
          {/* 💵 Balance */}
          <View style={[styles.header, { marginTop: 20 }]}>
            <Text style={styles.balanceLabel}>Deposit</Text>
            <Text style={styles.balance}>USD 40,900</Text>
          </View>

          {/* 💳 Tarjeta VISA */}
          <LinearGradient colors={["#1E88E5", "#6A1B9A"]} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.bankName}>Bank Name</Text>
            </View>
            <View style={styles.chipRow}>
              <View style={styles.chipModern}>
                <View style={styles.chipLine} />
                <View style={styles.chipLine} />
                <View style={styles.chipLine} />
                <View style={styles.chipLine} />
              </View>
              <Ionicons name="wifi" size={20} color="#fff" style={styles.contactlessIcon} />
            </View>
            <Text style={styles.cardNumber}>5432 12785 45678 101**</Text>
            <Text style={styles.cardName}>John Doe</Text>
            <Text style={styles.visaText}>VISA</Text>
          </LinearGradient>

          {/* 🎯 Acciones */}
          <Text style={styles.sectionTitle}>Actions</Text>
          <View style={styles.actionsWrapper}>
            {actions.map((action, index) => {
              const Icon = action.lib;
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.actionItem}
                  onPress={() => navigation.navigate(action.screen as any)}
                >
                  <View style={styles.iconCircle}>
                    <Icon name={action.icon as any} size={24} color="#fff" />
                  </View>
                  <Text style={styles.actionLabel}>{action.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* 📋 Transacciones */}
          <Text style={styles.sectionTitle}>Latest Transactions</Text>
          {transactions.map((tx, index) => (
            <View key={index} style={styles.transactionItem}>
              <View>
                <Text style={styles.transactionName}>{tx.name}</Text>
                <Text style={styles.transactionInfo}>{tx.info}</Text>
              </View>
              <Text
                style={
                  tx.amount > 0
                    ? styles.transactionAmountPositive
                    : styles.transactionAmountNegative
                }
              >
                {tx.amount > 0 ? `+${tx.amount}` : `${tx.amount}`},00
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* 🔻 Footer fijo */}
        <Footer />
      </LinearGradient>
    </SafeAreaView>
  );
}
