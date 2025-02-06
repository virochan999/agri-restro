import React, { useState } from "react";
import { View } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormType, userSchema } from "@/src/validationSchemas/loginForm";
import TextInput from "@/src/components/atoms/TextInput/TextInput";
import { styles } from "./LoginFormStyles";
import { useAuth } from "@/src/hooks/useAuth";
import Text from "@/src/components/atoms/Text/Text";
import PasswordIcon from "../PasswordIcon/PasswordIcon";
import Button from "@/src/components/atoms/Button/Button";
import Separator from "../Separator/Separator";

const LoginForm = () => {
  const { login, isLoading, error } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
    // reset,
  } = useForm<UserFormType>({
    resolver: zodResolver(userSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<UserFormType> = async (data: UserFormType) => {
    login(data);
    // reset();
  };

  return (
    <View style={styles.container}>
      {/* Email Field */}
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            label="Email ID"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={error?.message}
            touched={touchedFields.email}
            placeholder="Email address"
            keyboardType="email-address"
            autoCapitalize="none"
            id="email"
          />
        )}
        name="email"
      />

      {/* Age Field */}
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

      <View style={styles.buttonContainer}>
        <Button
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading || !isValid}
          btnStyle={styles.button}
          text={isLoading ? "Loading..." : "Login"}
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

      {error && (
        <Text style={styles.errorText}>
          {error instanceof Error ? error.message : "An error occurred"}
        </Text>
      )}
    </View>
  );
};

export default LoginForm;
