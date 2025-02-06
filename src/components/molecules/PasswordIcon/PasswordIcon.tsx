import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { styles } from "./PasswordIconStyles";
import { IonIconTypes } from "@/src/types/ionIcons";

const PasswordIcon = ({
  onPress,
  name,
}: {
  onPress: () => void;
  name: IonIconTypes;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.iconContainer}
  >
    <Ionicons
      name={name}
      size={24}
      color="#6B7280"
    />
  </TouchableOpacity>
);

export default PasswordIcon;
