import React from "react";
import ProfileWrapper from "@/src/components/organisms/PageThemeWrapper/Profile/ProfileWrapper";
import { View, Text, ScrollView } from "react-native";
import { Input } from "@/src/components/Input/Input";
import Dropdown from "@/src/components/Dropdown";
import Button from "@/src/components/atoms/Button/Button";
import styles from "./businessStyle";
function index() {
  return (
    <ProfileWrapper>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Business Information</Text>
          <View>
            <Input
              labelStyles={[styles.label]}
              inputStyles={[styles.input]}
              label="Restaurant"
              value=""
              onChangeText={(text) => console.log(text)}
              placeholder="Enter Restaurant name"
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
            <Input
              labelStyles={[styles.label]}
              inputStyles={[styles.input]}
              label="FSSAI License Number (Optional)"
              value=""
              onChangeText={(text) => console.log(text)}
              placeholder="Enter License Number"
              secureTextEntry={false}
              error=""
            />
            <Input
              labelStyles={[styles.label]}
              inputStyles={[styles.input]}
              label="Restaurant Location"
              value=""
              onChangeText={(text) => console.log(text)}
              placeholder="Location 1"
              secureTextEntry={false}
              error=""
            />
            <Input
              labelStyles={[styles.label]}
              inputStyles={[styles.input]}
              value=""
              onChangeText={(text) => console.log(text)}
              placeholder="Location 2 (if any)"
              secureTextEntry={false}
              error=""
            />
            <Input
              labelStyles={[styles.label]}
              inputStyles={[styles.input]}
              label="Operating Hours"
              value=""
              onChangeText={(text) => console.log(text)}
              placeholder="Hrs"
              secureTextEntry={false}
              error=""
            />
            <Input
              labelStyles={[styles.label]}
              inputStyles={[styles.input]}
              label="PAN"
              value=""
              onChangeText={(text) => console.log(text)}
              placeholder="PAN Number"
              secureTextEntry={false}
              error=""
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button text="Continue" btnStyle={[styles.button]}></Button>
      </View>
    </ProfileWrapper>
  );
}

export default index;
