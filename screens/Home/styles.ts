import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 60,
    backgroundColor: "transparent",
  },
  header: {
    marginBottom: 20,
    alignItems: "flex-start",
  },
balanceLabel: {
  fontSize: 16,
  color: "#000",
  marginBottom: 4,
  fontWeight: "600",
  marginLeft: 12, // <-- AÑADIDO
},
 balance: {
  fontSize: 26,
  fontWeight: "bold",
  color: "#000",
  marginLeft: 12, // <-- AÑADIDO
},


  card: {
    width: "100%",
    maxWidth: 360,
    aspectRatio: 1.586,
    borderRadius: 20,
    padding: 20,
    marginBottom: 32,
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: "#1E88E5",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    overflow: "hidden",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  bankName: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
    fontWeight: "600",
  },
  chipRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
    gap: 12,
  },
  chipModern: {
    width: 48,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#C0C0C0",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#999",
  },
  chipLine: {
    width: "80%",
    height: 2,
    backgroundColor: "#a0a0a0",
    borderRadius: 1,
  },
  contactlessIcon: {
    transform: [{ rotate: "90deg" }],
    marginLeft: 8,
    color: "#ffffffcc",
  },
  cardNumber: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 2,
    marginBottom: 10,
  },
  cardName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  visaText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 20,
    alignSelf: "flex-end",
    marginTop: 12,
    letterSpacing: 2,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

  // 👇 Íconos responsivos
  actionsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    rowGap: 24,
    columnGap: 30,
    marginBottom: 32,
    paddingHorizontal: 10,
  },
  actionItem: {
    width: "22%",
    minWidth: 70,
    maxWidth: 90,
    alignItems: "center",
    marginBottom: 20,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#0052CC",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  actionLabel: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },

sectionTitle: {
  fontSize: 18,
  fontWeight: "bold",
  marginTop: 30,
  marginBottom: 10,
  marginLeft: 12, // <-- AÑADIDO
},

  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  transactionName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  transactionInfo: {
    color: "#ffffffa0",
    fontSize: 12,
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: "bold",
  },
  transactionAmountPositive: {
    color: "#00e676", // verde vibrante
    fontSize: 14,
    fontWeight: "bold",
  },
  transactionAmountNegative: {
    color: "#ff1744", // rojo fuerte
    fontSize: 14,
    fontWeight: "bold",
  },
  mainContent: {
  paddingTop: 100,  // distancia desde el header
  paddingBottom: 100, // espacio para el footer
}

});
