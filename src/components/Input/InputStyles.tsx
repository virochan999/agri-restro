import { Colors } from "@/src/constants/Colors";
import { spacing } from "@/src/constants/spacing";
import { typography } from "@/src/constants/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.spacing.medium,
  },
  label: {
    ...typography.label,
    marginBottom: spacing.spacing.tiny,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: spacing.borderRadius.small,
    paddingHorizontal: spacing.spacing.medium,
    ...typography.text,
  },
  inputError: {
    borderColor: Colors.error,
  },
  errorText: {
    ...typography.caption,
    color: Colors.error,
    marginTop: spacing.spacing.tiny,
  },
});
