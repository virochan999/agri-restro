import {
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import Button from "../Button/Button";
import Image from "../Image/Image";
import { Colors } from "@/src/constants/Colors";

export const BasketCard = ({
  heading,
  btnText,
  imageSrc,
  containerStyle,
}: {
  heading: string;
  btnText: string;
  imageSrc: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{heading}</Text>
        <Button text={btnText} btnStyle={styles.button} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={{ width: "70%", height: "70%" }} source={imageSrc} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 225,
    borderRadius: 25,
    paddingInline: 20,
    backgroundColor: Colors.yellow,
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    width: "33%",
  },
  text: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 28,
    wordWrap: "wrap",
  },
  button: {
    borderRadius: 6,
    padding: 10,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "67%",
  },
});
