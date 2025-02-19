import { useState } from "react";
import { View, Alert } from "react-native";
import PasswordIcon from "@/src/components/molecules/PasswordIcon/PasswordIcon";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema, PasswordFormType } from "@/src/validationSchemas/signupForm";
import styles from './setPasswordStyles';
import TextInput from "@/src/components/atoms/TextInput/TextInput";
import { useAuthStore } from "@/src/store/useAuthStore";
import AuthWrapper from "@/src/components/organisms/PageThemeWrapper/AuthWrapper";
import Button from "@/src/components/atoms/Button/Button";
import { useAuth } from "@/src/hooks/useAuth";
import { useRouter } from "expo-router";
import Text from "@/src/components/atoms/Text/Text";
import Heading from "@/src/components/atoms/Heading/Heading";

const SetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { registrationData } = useAuthStore();
  const { setPassword, isLoading } = useAuth();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm<PasswordFormType>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onBlur",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // // Check if we have the required registration data
  // if (!registrationData.userId || !registrationData.isOtpVerified) {
  //   return (
  //     <AuthWrapper>
  //       <View style={styles.container}>
  //         <Text>Invalid registration state. Please start over.</Text>
  //         <Button 
  //           onPress={() => router.replace("/(auth)/signup")}
  //           text="Go to Registration"
  //         />
  //       </View>
  //     </AuthWrapper>
  //   );
  // }

  const onSubmit = async (formData: PasswordFormType) => {
    try {
      setPassword({
        userId: registrationData.userId!,
        newPassword: formData.password,
        moduleType: process.env.EXPO_PUBLIC_APP_MODULE_TYPE,
        tokenType: "PW_RC",
        verified: registrationData.isOtpVerified,
        userOtp: registrationData.userOtp
      });

      Alert.alert(
        "Success",
        "Password set successfully. Please login with your new credentials.",
        [
          { 
            text: "OK", 
            onPress: () => router.replace("/(auth)/login") 
          }
        ]
      );
    } catch (error: any) {
      Alert.alert(
        "Error",
        error.response?.data?.message || "Failed to set password. Please try again."
      );
    }
  };

  const submit = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <AuthWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Heading level={1}>Set Your Password</Heading>
          <Text>Choose a strong password to secure your account</Text>
        </View>

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
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                textContentType="newPassword"
                id="password"
                labelStyles={styles.label}
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
                placeholder="Confirm your password"
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
                textContentType="newPassword"
                id="confirmPassword"
                labelStyles={styles.label}
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

        {/* Password Requirements */}
        <View style={styles.requirementsContainer}>
          <Text style={styles.requirementsText}>
            Password must contain:
          </Text>
          <Text style={styles.requirementItem}>• At least 8 characters</Text>
          <Text style={styles.requirementItem}>• One uppercase letter</Text>
          <Text style={styles.requirementItem}>• One lowercase letter</Text>
          <Text style={styles.requirementItem}>• One number</Text>
          <Text style={styles.requirementItem}>• One special character</Text>
        </View>

        {/* Submit Button */}
        <View style={styles.buttonContainer}>
          <Button
            disabled={!isValid || isLoading}
            onPress={submit}
            text={isLoading ? "Setting Password..." : "Set Password"}
          />
        </View>
      </View>
    </AuthWrapper>
  );
}

export default SetPassword;