import { SafeAreaView, View } from "react-native";
import Heading from "@/src/components/atoms/Heading/Heading";
import Text from "@/src/components/atoms/Text/Text";
import SignUpForm from "@/src/components/organisms/SignUpForm/SignUpForm";
import styles from "./signUpStyles";
import AuthWrapper from "@/src/components/organisms/PageThemeWrapper/AuthWrapper";

const SignUp = () => {
  return (
    <AuthWrapper>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Heading level={1}>Register</Heading>
          <Text>Enter your details</Text>
        </View>
        <SignUpForm />
        <View style={styles.footer}>
        </View>
      </SafeAreaView>
    </AuthWrapper>
  );
};

export default SignUp;