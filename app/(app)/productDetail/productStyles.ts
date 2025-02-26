import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerS: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%"
  },
  leftBar: {
    flex: 0.2,
    backgroundColor: Colors.white,
    paddingBlock: 20
  },
  rightBar: {
    flex: 0.8,
    backgroundColor: Colors.background.bgPrimary,
    padding: 10
  },
  gradingImage: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: Colors.grey
  },
  gradingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRightWidth: 10,
    borderRightColor: Colors.grey,
    marginBlock: 10
  },
  productImage: {
    width: 90,
    height: 90
  }
});