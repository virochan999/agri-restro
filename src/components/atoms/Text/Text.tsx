import { typography } from "@/src/constants/typography";
import React from "react";
import { Text as RNText, TextStyle, StyleProp } from "react-native";

type TextVariant = keyof typeof typography;

interface CustomTextProps {
  variant?: TextVariant;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const Text = ({ variant = "text", style, children }: CustomTextProps) => {
  const textStyle = {
    fontSize: typography[variant].fontSize,
    fontWeight: typography[variant].fontWeight,
    lineHeight: typography[variant].lineHeight,
  };

  return <RNText style={[textStyle, style]}>{children}</RNText>;
};

export default Text;
