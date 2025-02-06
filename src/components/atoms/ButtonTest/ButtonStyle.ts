import { Colors } from "@/src/constants/Colors";
import { spacing } from "@/src/constants/spacing";
import { typography } from "@/src/constants/typography";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Styles {
  button: ViewStyle;
  buttonText: TextStyle;
  googleButton: ViewStyle;
  googleText: TextStyle;
  googleIcon: ImageStyle;
}

export const styles = StyleSheet.create<Styles>({
  button: {
    width: "100%",
    height: 48,
    borderRadius: spacing.borderRadius.medium,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: spacing.spacing.small,
  },
  buttonText: {
    ...typography.button,
    color: Colors.white,
  },
  googleButton: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: "row",
  },
  googleText: {
    color: Colors.text.primary,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: spacing.spacing.small,
  },
});
