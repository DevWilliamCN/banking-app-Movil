import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "../screens/Home/HomeScreen";
import WalletScreen from "../screens/WalletScreen/WalletScreen";
import PaymentsScreen from "../screens/Payments/PaymentsScreen";
import SendScreen from "../screens/Send/SendScreen";
import TransferScreen from "../screens/Transfer/TransferScreen";
import TransactionsScreen from "../screens/Transactions/TransactionsScreen";
import ReceiptsScreen from "../screens/Receipts/ReceiptsScreen";
import ReloadScreen from "../screens/Reload/ReloadScreen";
import BankScreen from "../screens/Bank/BankScreen";
import CashScreen from "../screens/CashScreen/CashScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import BalanceScreen from "../screens/Balance/BalanceScreen";
import WithdrawScreen from "../screens/Withdraw/WithdrawScreen";
import MobileScreen from "../screens/Mobile/MobileScreen";


export type RootStackParamList = {
  Home: undefined;
  Wallet: undefined;
  Payments: undefined;
  Send: undefined;
  Transfer: undefined;
  Transactions: undefined;
  Receipts: undefined;
  Reload: undefined;
  Bank: undefined;
  Cash: undefined;
  Settings: undefined;
  Balance: undefined;
  Withdraw: undefined;
  Mobile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="Payments" component={PaymentsScreen} />
      <Stack.Screen name="Send" component={SendScreen} />
      <Stack.Screen name="Transfer" component={TransferScreen} />
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
      <Stack.Screen name="Receipts" component={ReceiptsScreen} />
      <Stack.Screen name="Reload" component={ReloadScreen} />
      <Stack.Screen name="Bank" component={BankScreen} />
      <Stack.Screen name="Cash" component={CashScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Balance" component={BalanceScreen} />
      <Stack.Screen name="Withdraw" component={WithdrawScreen} />
      <Stack.Screen name="Mobile" component={MobileScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
