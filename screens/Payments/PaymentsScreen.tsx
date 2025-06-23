import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";

const Header = () => (
  <View style={{ backgroundColor: "#0D47A1", padding: 16 }}>
    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
      💳 Pagos
    </Text>
  </View>
);

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2025 Desarollador William Cubero. Todos los derechos reservados.</Text>
  </View>
);

const PaymentsScreen = () => {
  const [beneficiary, setBeneficiary] = useState("Netflix");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Bank Account");

  const handlePay = () => {
    alert(`Pagando ${amount} a ${beneficiary} usando ${method}`);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.wrapper}>
        <Header />

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.sectionTitle}>Facturas por Pagar</Text>

          <View style={styles.card}>
            <Text style={styles.cardHeader}>Servicios Públicos</Text>
            <Text style={styles.listItem}>- Agua CR</Text>
            <Text style={styles.listItem}>- Electricidad CNFL</Text>
            <Text style={styles.listItem}>- Internet Kolbi</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardHeader}>Suscripciones</Text>
            <Text style={styles.listItem}>- Netflix</Text>
            <Text style={styles.listItem}>- Spotify</Text>
            <Text style={styles.listItem}>- Disney+</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.formTitle}>🧾 Nuevo Pago</Text>

            <Text style={styles.label}>Beneficiario:</Text>
            <View style={styles.picker}>
              <Picker selectedValue={beneficiary} onValueChange={setBeneficiary}>
                <Picker.Item label="Netflix" value="Netflix" />
                <Picker.Item label="Spotify" value="Spotify" />
                <Picker.Item label="Kolbi" value="Kolbi" />
                <Picker.Item label="Electricidad CNFL" value="CNFL" />
              </Picker>
            </View>

            <Text style={styles.label}>Monto:</Text>
            <TextInput
              placeholder="₡ o $"
              keyboardType="numeric"
              style={styles.input}
              value={amount}
              onChangeText={setAmount}
            />

            <Text style={styles.label}>Método de pago:</Text>
            <View style={styles.picker}>
              <Picker selectedValue={method} onValueChange={setMethod}>
                <Picker.Item label="Cuenta Bancaria" value="Bank Account" />
                <Picker.Item label="Tarjeta de Crédito" value="Credit Card" />
                <Picker.Item label="Saldo Interno" value="Internal Balance" />
              </Picker>
            </View>

            <TouchableOpacity style={styles.button} onPress={handlePay}>
              <Text style={styles.buttonText}>Pagar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default PaymentsScreen;
