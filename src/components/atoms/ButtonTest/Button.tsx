import {
  TouchableOpacity,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { styles } from "./ButtonStyle";

type ButtonProps = {
  title: string;
  variant?: "primary" | "google";
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({
  title,
  variant = "primary",
  onPress,
  style,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === "google" && styles.googleButton,
        style,
      ]}
      onPress={onPress}
    >
      {variant === "google" && (
        <Image
          source={require("../../assets/images/react-logo.png")}
          style={styles.googleIcon}
        />
      )}
      <Text
        style={
          [
            styles.buttonText,
            variant === "google" && styles.googleText,
          ] as StyleProp<TextStyle>
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
