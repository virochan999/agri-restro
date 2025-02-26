import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: "100%"
  },
   header: {
      width: "100%",
      backgroundColor: Colors.text.tertiary,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBlock: 25,
      paddingInline: 20
    },
    arrowIcon: {
      fontSize: 40,
      color: Colors.white
    },
    headerText: {
      fontWeight: 700,
      fontSize: 32,
      lineHeight: 40,
      color: Colors.white
    },
})