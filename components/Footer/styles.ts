import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 30,
    backgroundColor: "rgba(13, 71, 161, 0.95)", // azul oscuro casi sólido
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    zIndex: 1000,
    borderTopWidth: 0.5,
    borderTopColor: "#ffffff33",
  },
});
