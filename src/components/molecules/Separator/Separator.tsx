import React from "react";
import { View, Text } from "react-native";
import { styles } from "./SeparatorStyles";

type SeparatorProps = {
  text: string;
};

const Separator = ({ text }: SeparatorProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default Separator;
