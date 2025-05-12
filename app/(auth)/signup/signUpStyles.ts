import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.background.primary,
    gap: 35,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: Colors.primary,
  },
});
