import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 25,
  },
  header: {
    padding: 16,
  },
  footer: {
    padding: 64,
    // display: ""
  },
  link: {
    color: Colors.primary,
    textDecorationLine: "underline",
    letterSpacing: 0.5,
  },
});
