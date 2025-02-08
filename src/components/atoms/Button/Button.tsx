import {
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
  Linking,
} from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./ButtonStyles";
import { AppRoutePaths } from "@/src/types/routes";
import { Colors } from "@/src/constants/Colors";

type Variant = "default" | "primary" | "secondary" | "underline";
type ComponentType = "link" | "button";

interface LinkProps {
  url?: string; // Optional for button type
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  variant?: Variant;
  btnStyle?: StyleProp<ViewStyle> & StyleProp<TextStyle>;
  external?: boolean;
  type?: ComponentType; // Determines if it's a link or button
  onPress?: () => void; // Custom click handler for button type
  disabled?: boolean;
  text?: string;
}

const Button = ({
  url,
  children,
  style,
  variant = "default",
  btnStyle,
  external,
  text,
  type = "button",
  disabled = false,
  onPress,
}: LinkProps) => {
  const router = useRouter();

  const handlePress = () => {
    if (type === "button" && onPress) {
      // Handle button click
      onPress();
    } else if (external && url) {
      // Handle external link
      Linking.openURL(url).catch((err) =>
        console.error("Failed to open URL:", err)
      );
    } else if (url) {
      // Handle internal navigation
      router.push(url as AppRoutePaths);
    }
  };

  // Define dynamic styles based on the variant
  const buttonStyle = {
    backgroundColor:
      variant === "default"
        ? Colors.primary
        : variant === "primary"
        ? Colors.secondary
        : Colors.background.primary,
    borderColor: Colors.border,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      disabled={disabled}
      style={[buttonStyle, styles.button, styles[variant], btnStyle]}
    >
      <Text style={[styles.link, style]}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
