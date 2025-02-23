import Button from "@/src/components/atoms/Button/Button";
import Text from "@/src/components/atoms/Text/Text";
import Separator from "@/src/components/molecules/Separator/Separator";
import { Colors } from "@/src/constants/Colors";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AuthWrapper from "@/src/components/organisms/PageThemeWrapper/AuthWrapper";

const Index = () => {
  return (
    <AuthWrapper>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.mainText}>K</Text>
          <Text style={styles.text}>KHET-TO-KHARIDAR</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.buttonContainer}>
            <Button
              url="/login"
              variant="default"
              btnStyle={styles.button}
              type="link"
              text="Login"
            />
            <Separator text="or" />
            <Button
              url="/signup"
              variant="primary"
              btnStyle={styles.button}
              type="link"
              text="Create account"
            />
          </View>
          <View style={styles.footer}>
            <Text>Already have an account?</Text>
            <Button
              url="/login"
              variant="underline"
              type="link"
              text="Login"
            />
          </View>
        </View>
      </SafeAreaView>
    </AuthWrapper>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: 100,
    paddingTop: 40,
  },
  header: {
    paddingVertical: 20,
    paddingTop: 40,
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  mainText: {
    fontSize: 100,
    fontWeight: "bold",
    color: Colors.text.tertiary,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    flexDirection: "row",
  },
  wrapper: {
    gap: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    gap: 30,
    alignItems: "center",
    width: "100%",
  },
  button: {
    width: "80%",
  },
  link: {
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});
