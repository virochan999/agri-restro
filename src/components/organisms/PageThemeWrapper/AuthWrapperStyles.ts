import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: Colors.background.primary,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.background.primary,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "25%",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
});
