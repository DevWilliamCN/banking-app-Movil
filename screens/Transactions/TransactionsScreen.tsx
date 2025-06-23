import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { BankContext } from '../../contexts/BankContext';

export default function TransactionsScreen() {
  const bank = useContext(BankContext);
  if (!bank) return null;

  const { transactions } = bank;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de movimientos</Text>
      {transactions.length === 0 ? (
        <Text style={styles.empty}>No hay movimientos aún.</Text>
      ) : (
        <FlatList
          data={transactions}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.amount}>₡ {item.amount.toLocaleString()}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
