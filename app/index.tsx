import Heading from "@/src/components/atoms/Heading/Heading";
import Image from "@/src/components/atoms/Image/Image";
import Button from "@/src/components/atoms/Button/Button";
import Text from "@/src/components/atoms/Text/Text";
import Separator from "@/src/components/molecules/Separator/Separator";
import { Colors } from "@/src/constants/Colors";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.image}>
          <Image
            source={require("@/src/assets/images/agrilink_logo.png")}
            resizeMode="contain"
          />
        </View>
        <Heading level={1}>Explore the app</Heading>
        <Text>Bridging farmers and restruants for fresh, local produce</Text>
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
          <Separator text="or sign in with" />
          <Button
            url="/signup"
            variant="primary"
            btnStyle={styles.button}
            type="link"
            text="Create account"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Already have an account?</Text>
        <Button
          url="/login"
          variant="underline"
          style={styles.link}
          type="link"
          text="Login"
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 75,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  header: {
    alignItems: "center",
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
