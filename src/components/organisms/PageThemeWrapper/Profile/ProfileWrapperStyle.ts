import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.bgPrimary,
    display: "flex",
  },
  imageContainer: {
    width: "100%",
    flex: 0.2,
    padding: 20,
  },
  content: {
    width: '100%',
    flex: 0.8,
  },
  title: {
    position: 'absolute',
    bottom: 0,
  },
  heading: {
    color: Colors.black,
    fontSize: 20,
    lineHeight: 25
  },
  subHeading: {
    color: Colors.black,
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400'
    
  },
  headingContainer: {
    flex: 0.7,
    justifyContent: 'flex-end'
  },
  profileMobileImage: {
    flex: 0.3,
    justifyContent: 'flex-end'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: "flex-end",
    height: "100%",
    width: "100%",
  }
});