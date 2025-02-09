import { SafeAreaView, View, ImageBackground, StyleSheet } from "react-native";
import { styles } from "./AuthWrapperStyles";

type AuthWrapperProps = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {children}
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground 
          source={require("@/src/assets/images/page-background.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthWrapper;