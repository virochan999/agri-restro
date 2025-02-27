import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%"
  },
   header: {
      width: "100%",
      backgroundColor: Colors.text.tertiary,
      paddingBlock: 25,
      paddingInline: 20
    },
    nav: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    searchInput: {
      padding: 15,
      color: Colors.white,
      borderWidth: 1,
      borderColor: Colors.white,
      fontSize: 20,
      borderRadius: 10,
      paddingEnd: 50
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