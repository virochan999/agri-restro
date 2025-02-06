import React from "react";
import { Text } from "react-native";
import { styles } from "./HeadingStyles";

type HeadingProps = {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
};

const Heading = ({ level = 1, children }: HeadingProps) => {
  const headingStyles = [styles.base, styles[`h${level}`]];

  return <Text style={headingStyles}>{children}</Text>;
};

export default Heading;
