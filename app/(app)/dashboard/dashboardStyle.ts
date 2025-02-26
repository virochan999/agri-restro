import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.white,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  topContainer: {
    padding: 20,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: 20,
  },
  mainHeading: {
    color: Colors.black,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 500,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
