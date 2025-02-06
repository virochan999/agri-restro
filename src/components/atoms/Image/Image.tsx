import React from "react";
import {
  Image as RNImage,
  ImageProps,
  ImageStyle,
  StyleProp,
} from "react-native";
import { styles } from "./ImageStyles";

type ReusableImageProps = {
  style?: StyleProp<ImageStyle>;
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
} & ImageProps;

const Image = ({
  source,
  style,
  resizeMode = "cover",
  ...rest
}: ReusableImageProps) => {
  return (
    <RNImage
      source={source}
      style={[styles.image, style]}
      resizeMode={resizeMode}
      {...rest}
    />
  );
};

export default Image;
