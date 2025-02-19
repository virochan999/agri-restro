import { TextInput, View, Text, TextStyle, StyleProp } from "react-native";
import { styles } from "./InputStyles";
import { Colors } from "@/src/constants/Colors";

type InputProps = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: string;
  inputStyles?: StyleProp<TextStyle>;
  labelStyles?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
};

export const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  error,
  inputStyles,
  labelStyles,
  errorStyle
}: InputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, labelStyles]}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError , inputStyles]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={Colors.text.secondary}
      />
      {error && <Text style={[styles.errorText, errorStyle]}>{error}</Text>}
    </View>
  );
};
