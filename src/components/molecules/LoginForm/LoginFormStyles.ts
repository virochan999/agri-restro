import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 16,
    width: "100%",
    paddingHorizontal: 16,
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
  },
  passwordIconPosition: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  errorText: {
    color: "#EF4444",
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    width: "100%",
  },
  buttonContainer: {
    gap: 30,
    alignItems: "center",
    width: "100%",
  },
});
