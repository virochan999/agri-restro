import { SafeAreaView, View } from "react-native";
import { styles } from "@/src/styles/LoginStyles";
import LoginForm from "@/src/components/molecules/LoginForm/LoginForm";
import Heading from "@/src/components/atoms/Heading/Heading";
import Text from "@/src/components/atoms/Text/Text";
import { Link } from "expo-router";
import AuthWrapper from "@/src/components/organisms/PageThemeWrapper/AuthWrapper";

const Login = () => {
  return (
    <AuthWrapper>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Heading level={1}>Login</Heading>
          <Text>Login to continue the app</Text>
        </View>
        <LoginForm />
        <View style={styles.footer}>
          <Text style={styles.text}>
            By Creating an account or signing in you are agree to our
            <Link
              href={"/login"}
              style={styles.link}
            >
              Terms and Conditions
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    </AuthWrapper>
  );
};

export default Login;
