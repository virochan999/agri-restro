import React from "react";
import {
  View,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
} from "react-native";
import { styles } from "./TextInputStyles";

interface CustomTextInputProps extends TextInputProps {
  label?: string;
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
  autoComplete = "off",
  ...props
}: CustomTextInputProps) => {
  const showError = error && touched;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
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
