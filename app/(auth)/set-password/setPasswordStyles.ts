import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 40,
    gap: 16,
    zIndex: 1,
  },
  header: {
    alignItems: "center",
  },
  passwordContainer: {
    position: "relative",
  },
  passwordIconPosition: {
    position: "absolute",
    right: 10,
    top: 35,
  },
  label: {
    fontWeight: 500,
  },
  buttonContainer: {
    paddingTop: 35,
  },
  requirementsContainer: {},
  requirementItem: {
    fontSize: 12,
  },
  requirementsText: {
    fontSize: 14,
    fontWeight: 500,
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
});
