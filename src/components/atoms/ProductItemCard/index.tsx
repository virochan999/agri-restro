import { ImageStyle, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import Image from "../Image/Image";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { Heart } from "../heart";
import { Colors } from "@/src/constants/Colors";

export const ProductItemCard = ({
  onPress,
  toggleHeart,
  addToCart,
  itemClick,
  productLabel,
  price,
  imageStyle,
  productLabelStyle,
  priceStyle,
  itemStyle,
}: {
  onPress?: () => void;
  addToCart?: () => void;
  toggleHeart?: boolean;
  itemClick?: () => void,
  productLabel: string,
  price: string,
  imageStyle?: ImageStyle,
  productLabelStyle?: TextStyle
  priceStyle?: TextStyle,
  itemStyle?: ViewStyle
}) => {
  return (
    <TouchableOpacity onPress={itemClick}>
      <View style={[styles.cardContainer,itemStyle]}>
        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, imageStyle]}
            source={require("@/src/assets/images/veggies.png")}
          />
          <View>
            <Text style={[styles.text,productLabelStyle]}>{productLabel}</Text>
            <Text style={[styles.price, priceStyle]}>{price}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={addToCart}
            textStyle={styles.AddToCartBtnText}
            btnStyle={styles.AddToCartBtn}
            text="+"
          />
        </View>
        <TouchableOpacity style={styles.heartIcon} onPress={onPress}>
          <Heart heartStyle={toggleHeart ? styles.heartRed : styles.heart} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: "relative",
    flexDirection: "row",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  image: {
    borderRadius: 7,
  },
  text: {
    fontSize: 21,
    fontWeight: 400,
    lineHeight: 30,
  },
  price: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  AddToCartBtnText: {
    color: Colors.black,
    fontSize: 20,
  },
  AddToCartBtn: {
    backgroundColor: Colors.grey,
    borderRadius: 7,
    paddingInline: 30,
    paddingBlock: 3.5,
  },
  heartIcon: {
    position: "absolute",
    right: 10,
  },
  heart: {
    backgroundColor: "grey",
  },
  heartRed: {
    backgroundColor: "red",
  },
});
