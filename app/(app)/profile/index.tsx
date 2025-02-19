import React from "react";
import { View, Text } from "react-native";
import styles from "./ProfileStyles";
import Image from "@/src/components/atoms/Image/Image";
import Button from "@/src/components/atoms/Button/Button";
import ProfileWrapper from "@/src/components/organisms/PageThemeWrapper/Profile/ProfileWrapper";
import { useRouter } from "expo-router";

function index() {
  const router = useRouter();
  const handleOwnerPress = () => {
    router.push("/(app)/owner");
  };
  return (
    <ProfileWrapper>
      <View style={styles.buttonContainer}>
        <Button
          text="Owner Details"
          textStyle={styles.text}
          btnStyle={[styles.button, styles.buttonOwner]}
          onPress={handleOwnerPress}
        >
          <Image
            style={styles.icon}
            source={require("@/src/assets/images/profile/owner_detail_icon.svg")}
          />
        </Button>
        <Button
          text="Business Information"
          btnStyle={[styles.button, styles.buttonBusiness]}
        >
          <Image
            style={styles.icon}
            source={require("@/src/assets/images/profile/business_icon.svg")}
          />
        </Button>
        <Image
          source={require("@/src/assets/images/profile/profile_bottom_image.png")}
          style={styles.image}
        />
        <Text style={styles.bottomText}>
          Progress auto-saves. Resume anytime.
        </Text>
      </View>
    </ProfileWrapper>
  );
}

export default index;
