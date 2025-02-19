import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { styles } from "./HeadingStyles";

type HeadingProps = {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  headingStyle?: StyleProp<TextStyle>;
};

const Heading = ({ level = 1, children, headingStyle }: HeadingProps) => {
  const headingStyles = [styles.base, styles[`h${level}`], headingStyle];

  return <Text style={headingStyles}>{children}</Text>;
};

export default Heading;
