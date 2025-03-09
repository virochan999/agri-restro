import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabSlot: {
    flex: 1,
  },
  tabList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  tabTrigger: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    height: 50,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 50,
  },
  activeIconContainer: {
    backgroundColor: "#e6f7e9",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 2,
    color: Colors.primary,
    fontWeight: "500",
  }
});