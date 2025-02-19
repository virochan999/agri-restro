import React from "react";
import ProfileWrapper from "@/src/components/organisms/PageThemeWrapper/Profile/ProfileWrapper";
import { View, Text } from "react-native";
import { Input } from "@/src/components/Input/Input";
import Dropdown from "@/src/components/Dropdown";
import Button from "@/src/components/atoms/Button/Button";
import styles from "./OwnerStyle";
function index() {
  return (
    <ProfileWrapper>
      <View style={styles.container}>
        <Text style={styles.heading}>Owner Details</Text>
        <View>
          <Input
            labelStyles={[styles.label]}
            inputStyles={[styles.input]}
            label="Owner's Full Name"
            value=""
            onChangeText={(text) => console.log(text)}
            placeholder="Enter your name"
            secureTextEntry={false}
            error=""
          />
          <Input
            labelStyles={[styles.label]}
            inputStyles={[styles.input]}
            label="Mobile Number"
            value=""
            onChangeText={(text) => console.log(text)}
            placeholder="Enter mobile number"
            secureTextEntry={false}
            error=""
          />
          <Input
            labelStyles={[styles.label]}
            inputStyles={[styles.input]}
            label="Business Email"
            value=""
            onChangeText={(text) => console.log(text)}
            placeholder="Enter business email"
            secureTextEntry={false}
            error=""
          />
          <Dropdown
            label="Business Type"
            options={[
              { label: "Number", value: "NM" },
              { label: "WhatsApp", value: "WP" },
              { label: "Email", value: "EMAIL" },
            ]}
            selectedValue=""
            onSelect={(option) => console.log(option)}
          ></Dropdown>
           <Button
          text="Continue"
          btnStyle={[styles.button]}
          >
        </Button>
        </View>
      </View>
    </ProfileWrapper>
  );
}

export default index;
