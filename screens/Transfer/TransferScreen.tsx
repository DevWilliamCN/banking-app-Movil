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
  <View style={styles.header}>
    <Text style={styles.headerText}>💳 Transferencias</Text>
  </View>
);

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>
      © 2025 Desarrollador William Cubero. Todos los derechos reservados.
    </Text>
  </View>
);

const TransferScreen = () => {
  const [beneficiary, setBeneficiary] = useState("Netflix");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Bank Account");
  const [targetNumber, setTargetNumber] = useState("");

  const handleTransfer = () => {
    alert(
      `Transfiriendo ${amount} a ${beneficiary} usando ${method}, número: ${targetNumber}`
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.wrapper}>
        <Header />

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.sectionTitle}>Cuentas disponibles</Text>

          <View style={styles.card}>
            <Text style={styles.cardHeader}>Favoritos</Text>
            <Text style={styles.listItem}>- Netflix</Text>
            <Text style={styles.listItem}>- Spotify</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardHeader}>Servicios Públicos</Text>
            <Text style={styles.listItem}>- Kolbi</Text>
            <Text style={styles.listItem}>- CNFL</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.formTitle}>📲 Nueva Transferencia</Text>

            <Text style={styles.label}>Beneficiario:</Text>
            <View style={styles.picker}>
              <Picker
                selectedValue={beneficiary}
                onValueChange={setBeneficiary}
              >
                <Picker.Item label="Netflix" value="Netflix" />
                <Picker.Item label="Spotify" value="Spotify" />
                <Picker.Item label="Kolbi" value="Kolbi" />
                <Picker.Item label="CNFL" value="CNFL" />
              </Picker>
            </View>

            <Text style={styles.label}>Número de cuenta o teléfono:</Text>
            <TextInput
              placeholder="Ej: 88885555"
              keyboardType="number-pad"
              style={styles.input}
              value={targetNumber}
              onChangeText={setTargetNumber}
            />

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

            <TouchableOpacity style={styles.button} onPress={handleTransfer}>
              <Text style={styles.buttonText}>Transferir</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default TransferScreen;
