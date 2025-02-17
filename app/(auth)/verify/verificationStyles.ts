import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
    padding: 20,
    gap: 64
  },
  header: {
    alignItems: 'center',
    gap: 10
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeInput: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
  },
  footer: {
    justifyContent: 'center',
    gap: 16
  },
  resendText: {
    color: '#fff',
    display: 'flex',
    gap: 16
  },
  verifyButton: {
  },
});