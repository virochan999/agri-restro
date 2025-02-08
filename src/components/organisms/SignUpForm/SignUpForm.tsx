import React, { useState } from "react";
import { styles } from "./SignUpFormStyles";
import { View } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/src/components/atoms/TextInput/TextInput";
import { useAuth } from "@/src/hooks/useAuth";
import Text from "@/src/components/atoms/Text/Text";
import PasswordIcon from "@/src/components/molecules/PasswordIcon/PasswordIcon";
import Button from "@/src/components/atoms/Button/Button";
import { SignUpFormType, signupSchema } from "@/src/validationSchemas/signupForm";

const SignUpForm = () => {
  const { signup, isLoading, error } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<SignUpFormType> = async (data: SignUpFormType) => {
    signup(data);
  };

  return (
    <View style={styles.container}>
      {/* Username Field */}
      <Controller
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
          />
        )}
        name="username"
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
          />
        )}
        name="email"
      />

      {/* Password Field */}
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View style={styles.passwordContainer}>
            <TextInput
              label="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={error?.message}
              touched={touchedFields.password}
              placeholder="Password"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              textContentType="password"
              id="password"
            />
            <View style={styles.passwordIconPosition}>
              <PasswordIcon
                onPress={() => setShowPassword(!showPassword)}
                name={showPassword ? "eye-off" : "eye"}
              />
            </View>
          </View>
        )}
        name="password"
      />

      {/* Confirm Password Field */}
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View style={styles.passwordContainer}>
            <TextInput
              label="Confirm Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={error?.message}
              touched={touchedFields.confirmPassword}
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
              textContentType="password"
              id="confirmPassword"
            />
            <View style={styles.passwordIconPosition}>
              <PasswordIcon
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                name={showConfirmPassword ? "eye-off" : "eye"}
              />
            </View>
          </View>
        )}
        name="confirmPassword"
      />

      <View style={styles.buttonContainer}>
        <Button
          onPress={handleSubmit(onSubmit)}
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