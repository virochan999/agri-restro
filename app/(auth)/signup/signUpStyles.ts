
import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
    gap: 25,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: Colors.primary
  },
});