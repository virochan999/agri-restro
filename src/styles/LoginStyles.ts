import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { spacing } from "../constants/spacing";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    gap: 25,
  },
  header: {
    padding: 16,
    display: "flex",
    alignItems: "center",
  },
  footer: {
    paddingHorizontal: 32,
  },
  text: {
    fontSize: spacing.fontSize.medium,
    fontWeight: "400",
  },
  link: {
    paddingLeft: 4,
    fontWeight: "600",
    color: Colors.primary,
    textDecorationLine: "underline",
    letterSpacing: 0.5,
  },
});
