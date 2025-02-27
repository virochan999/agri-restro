import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  subContainer: {
    height: "100%"
  },
  content: {
    backgroundColor: Colors.background.lightPink,
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingInline: 20,
    paddingBlock: 10
  },
  heading: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 40
  },
  subHeading: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 30
  },
  locationHeading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingInline: 20,
    paddingBottom: 20
  },
  location: {
    fontSize: 20,
    lineHeight: 25
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  locationBox: {
    width: "23%",
    height: 100,
    backgroundColor: Colors.white
  },
  discriptionContainer: {
    paddingInline: 20,
    paddingBlock: 10,
    paddingBottom: 15
  },
  customContainer: {
    borderTopColor: Colors.black,
    borderTopWidth: 1,
    paddingInline: 20,
    paddingBlock: 15
  },
  customerHeading: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 25
  },
  subCustomerHeading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  reviewHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  imageContainer: {
    width: '100%',
  },
  productImage: {
    width: '100%',
    height: undefined,
  },
  buttonSet: {
    borderTopColor: Colors.black,
    borderTopWidth: 1,
    paddingInline: 20,
    paddingBlock: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  addToCartBtn: {
    borderRadius: 4,
    backgroundColor: Colors.yellow
  },
  shopBtn: {
    borderRadius: 4,
    backgroundColor: Colors.darkSkin
  }
})