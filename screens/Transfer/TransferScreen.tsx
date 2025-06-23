import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from '../Transfer/styles';
import { BankContext } from '../../contexts/BankContext';

export default function TransferScreen({ navigation }: any) {
  const bank = useContext(BankContext);
  if (!bank) return null;

  const { transfer } = bank;

  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleTransfer = () => {
    const num = parseFloat(amount);
    if (!num || num <= 0) {
      Alert.alert('Monto inválido');
      return;
    }

    transfer(num, description || 'Transferencia sin descripción');
    Alert.alert('Transferencia realizada');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nueva transferencia</Text>
      <TextInput
        style={styles.input}
        placeholder="Monto"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Transferir" onPress={handleTransfer} />
    </View>
  );
}
