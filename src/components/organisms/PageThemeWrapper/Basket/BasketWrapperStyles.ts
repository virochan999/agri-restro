import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  locationContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
  },
  locationIcon: {
    color: Colors.error,
  },
  container: {
    flex: 1,
  },
  header: {

  },
  content: {
    flex: 1,
    marginTop: -30,
    backgroundColor: Colors.white,
    borderRadius: 30
  },
  searchInputContainer: {
    paddingBlock: 30,
    paddingInline: 8,
    backgroundImage: 'linear-gradient(#3C5140, #0F0F0F)'
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  headerImageContainer: {
    flex: 0.4,
    aspectRatio: 1,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerTextContainer: {
    flex: 0.6
  },
  text: {
    color: Colors.white,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 400
  },
  headerText: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 700,
  },
  link: {
    fontSize: 10,
    lineHeight: 12,
  }
});