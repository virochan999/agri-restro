import { SafeAreaView, View } from "react-native";
import { styles } from "@/src/styles/LoginStyles";
import LoginForm from "@/src/components/molecules/LoginForm/LoginForm";
import Heading from "@/src/components/atoms/Heading/Heading";
import Text from "@/src/components/atoms/Text/Text";
import { Link } from "expo-router";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Heading level={1}>Login</Heading>
        <Text>Welcome back to the app</Text>
      </View>
      <LoginForm />
      <View style={styles.footer}>
        <Text>By Creating an account or signing in you are agree to our</Text>
        <Link
          href={"/login"}
          style={styles.link}
        >
          Terms and Conditions
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Login;
