import { StyleSheet, View } from "react-native";
import Image from "../Image/Image";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { Colors } from "@/src/constants/Colors";

export const ProductItemCard = ({
  addToCart,
  productLabel,
  label,
  price,
  imageSrc,
}: {
  addToCart: () => void;
  productLabel: string;
  label: string;
  price: number;
  imageSrc: string;
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={require("@/src/assets/images/products/bell_pepper_red.png")}
      />
      <Text style={styles.productLabel}>{productLabel}</Text>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹{price} /kg</Text>
        <Button
          onPress={addToCart}
          textStyle={styles.addToCartBtnText}
          btnStyle={styles.addToCartBtn}
          text="+"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFF9E6",
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 5,
    alignItems: "center",
    width: 120,
    height: 200,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "contain",
  },
  productLabel: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    color: Colors.grey,
    textAlign: "center",
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
  },
  addToCartBtn: {
    backgroundColor: Colors.grey,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  addToCartBtnText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "bold",
  },
});
