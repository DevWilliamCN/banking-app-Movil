import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { BankProvider } from './contexts/BankContext';

export default function App() {
  return (
    <BankProvider>
      <AppNavigator />
    </BankProvider>
  );
}
