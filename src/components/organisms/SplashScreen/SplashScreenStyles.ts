import { Colors } from "@/src/constants/Colors";
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  borderContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftBorder: {
    height: '100%',
    width: 30,
  },
  rightBorder: {
    height: '100%',
    width: 30,
  },
  handImage: {
    width: width * 0.7,
    height: height * 0.5,
  },
  logoContainer: {
    position: 'absolute',
    top: '15%',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: '30%',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 100,
    fontWeight: 'bold',
    color: Colors.text.tertiary,
  },
  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});