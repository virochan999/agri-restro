import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    width: "100%",
    height: 250,  
    // resizeMode: "contain",
    alignSelf: "center", 
    maxHeight: "100%", 
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    padding: 20,
    paddingTop: 80,
  },
  button: {
    color: Colors.black,
    borderRadius: 7,
    borderColor: Colors.black,
    borderWidth: 1,
    padding: 20,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  text: {
    // fontWeight: spacing.fontWeight.bold,
    lineHeight: 28,
    // fontSize: spacing.fontSize.xl,
  },
  buttonOwner: {
    backgroundColor: Colors.yellow,
  },
  buttonBusiness: {
    backgroundColor: Colors.primary,
  },
  icon: {
    width: 44,
    height: 44
  },
  bottomText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "center",
    color: Colors.black
  }

});