import React, { createContext, useState, ReactNode } from 'react';

type Transaction = {
  id: number;
  description: string;
  amount: number;
};

type BankContextType = {
  balance: number;
  transactions: Transaction[];
  transfer: (amount: number, description: string) => void;
};

export const BankContext = createContext<BankContextType | undefined>(undefined);

export const BankProvider = ({ children }: { children: ReactNode }) => {
  const [balance, setBalance] = useState(10000);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const transfer = (amount: number, description: string) => {
    setBalance(prev => prev - amount);
    setTransactions(prev => [
      ...prev,
      { id: Date.now(), description, amount: -amount },
    ]);
  };

  return (
    <BankContext.Provider value={{ balance, transactions, transfer }}>
      {children}
    </BankContext.Provider>
  );
};
