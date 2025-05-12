import { Colors } from "@/src/constants/Colors";
import { spacing } from "@/src/constants/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainSection: {
    paddingBlock: 30,
    paddingInline: 8,
    backgroundImage: "linear-gradient(#3C5140, #0F0F0F)",
  },
  locationContainer: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 8,
  },
  locationHeading: {
    color: Colors.yellow,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
  },
  locationTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  locationText: {
    color: Colors.lightGrey,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
  },
  locationIcon: {
    color: Colors.error,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.background.primaryGreen,
  },
  header: {},
  menuIcon: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: Colors.background.lightGreen,
  },
  notificationContainer: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: Colors.background.lightGreen,
  },
  notificationIcon: {
    position: "relative",
  },
  notificationCountContainer: {
    position: "absolute",
    backgroundColor: Colors.white,
    top: -5,
    right: -5,
    display: "flex",
    height: 20,
    width: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationCount: {
    color: Colors.error,
  },
  content: {
    flex: 1,
    marginTop: -30,
    backgroundColor: Colors.white,
    borderRadius: 30,
  },
  searchContainer: {
    padding: 20,
    display: "flex",
    gap: 10,
    paddingBottom: 44,
  },
  searchText: {
    color: Colors.white,
    fontWeight: "400",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#4a5a4d",
    borderRadius: 15,
    height: 50,
    marginBottom: 0,
    paddingLeft: 40,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: "25%",
    height: "100%",
    display: "flex",
  },
});
