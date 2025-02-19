import React from "react";
import { styles } from "./SignUpFormStyles";
import { View } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/src/components/atoms/TextInput/TextInput";
import { useAuth } from "@/src/hooks/useAuth";
import Text from "@/src/components/atoms/Text/Text";
import Button from "@/src/components/atoms/Button/Button";
import { SignUpFormType, signupSchema } from "@/src/validationSchemas/signupForm";

const SignUpForm = () => {
  const { signup, isLoading, error } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      // username: "",
      fullName: "",
      email: "",
      // phone: "",
      role: "CUSTOMER",
      activeModule: process.env.EXPO_PUBLIC_APP_MODULE_TYPE
    },
  });


  const onSubmit: SubmitHandler<SignUpFormType> = async (data: SignUpFormType) => {
    try {
      signup(data);
    } catch (err) {
      console.log("error")
    }
  };

  const submit = () => {
    handleSubmit(onSubmit)();
  }

  return (
    <View style={styles.container}>
      {/* Username Field */}
      {/* <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            label="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={error?.message}
            touched={touchedFields.username}
            placeholder="Username"
            id="username"
            labelStyles={styles.label}
          />
        )}
        name="username"
      /> */}

      <Controller
        control={control}
        name="fullName"
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <TextInput
            label="Full Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            id="fullname"
            error={error?.message}
            touched={touchedFields.fullName}
            placeholder="Full Name"
            labelStyles={styles.label}
          />
        )}
      />

      {/* Email Field */}
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            label="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={error?.message}
            touched={touchedFields.email}
            placeholder="Enter Email ID"
            keyboardType="email-address"
            autoCapitalize="none"
            id="email"
            labelStyles={styles.label}
          />
        )}
        name="email"
      />

      {/* Phone Field */}
      {/* <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            label="Phone"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={error?.message}
            touched={touchedFields.phone}
            placeholder="Enter Phone Number"
            keyboardType="phone-pad"
            id="phone"
            labelStyles={styles.label}
          />
        )}
        name="phone"
      /> */}

      <View style={styles.buttonContainer}>
        <Button
          onPress={submit}
          disabled={isLoading || !isValid}
          btnStyle={styles.button}
          text={isLoading ? "Registering..." : "Register"}
        />
      </View>

      {error && (
        <Text style={styles.errorText}>
          {error instanceof Error ? error.message : "Registration failed"}
        </Text>
      )}
    </View>
  );
};

export default SignUpForm;