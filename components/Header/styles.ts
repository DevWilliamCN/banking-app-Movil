import { StyleSheet } from "react-native";

export default StyleSheet.create({
 container: {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  paddingHorizontal: 16,
  paddingVertical: 14,
  backgroundColor: "rgba(13, 71, 161, 0.95)",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottomWidth: 0.5,
  borderBottomColor: "#ffffff33",
},

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  iconWrapper: {
    width: 50,
    alignItems: "center",
  },
});
