import React from "react";
import {
  View,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  StyleProp,
} from "react-native";
import { styles } from "./TextInputStyles";
import { TextStyle } from "react-native";

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  labelStyles?: StyleProp<TextStyle>;
  error?: string;
  touched?: boolean;
}

const TextInput = ({
  label,
  error,
  touched,
  onChangeText,
  value,
  placeholder,
  style,
  labelStyles,
  autoComplete = "off",
  ...props
}: CustomTextInputProps) => {
  const showError = error && touched;

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, labelStyles]}>{label}</Text>}
      <RNTextInput
        style={[styles.input, style, showError && styles.errorInput]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#6B7280"
        autoComplete={autoComplete}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default TextInput;
