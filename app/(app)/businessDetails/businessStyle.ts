import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 15,
    paddingTop: 40
  },
  buttonContainer: {
    padding: 15,
  },
  heading: {
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 28,
    paddingBottom: 20
  },
  label: {
   fontSize: 16,
   lineHeight: 20,
   marginBottom: 6
  },
  input: {
    padding: 12,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  button: {
     color: Colors.black,
     borderRadius: 10,
     borderColor: Colors.black,
     borderWidth: 1,
     padding: 15,
     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
     marginBottom: 30
   },
});