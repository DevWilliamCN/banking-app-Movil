// src/components/BackgroundWrapper.tsx
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  Platform,
  ViewStyle,
  StyleProp,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function BackgroundWrapper({ children, style }: Props) {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: "#0D47A1",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
        style,
      ]}
    >
      <LinearGradient
        colors={["#ffffff", "#E3F2FD", "#0D47A1"]}
        locations={[0, 0.25, 0.88]}
        style={{ flex: 1 }}
      >
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
}
