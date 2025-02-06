import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    gap: 8,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#000",
  },
  text: {
    color: "#6B7280",
    fontSize: 14,
    paddingHorizontal: 8,
  },
});
