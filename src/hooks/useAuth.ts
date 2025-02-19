import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/src/api/auth";
import { UserFormType } from "@/src/validationSchemas/loginForm";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useRouter } from "expo-router";
import { SignUpFormType } from "../validationSchemas/signupForm";
import { OTPVerificationType } from "../types/otpVerification";

export const useAuth = () => {
  const router = useRouter();
  const { setAuth, clearAuth, setRegistrationData, setOtpVerified, clearRegistrationData } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: (credentials: UserFormType) => authApi.login(credentials),
    onSuccess: (data) => {
      setAuth(data.data);
      router.push("/");
    },
    onError: (error) => {
      // You might want to show a toast here
      console.error("Login failed:", error);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      clearAuth();
      router.replace("/login");
    },
  });

  const signupMutation = useMutation({
    mutationFn: (userData: SignUpFormType) => authApi.signup(userData),
    onSuccess: (data) => {
      setRegistrationData(data.data);
      router.push("/(auth)/verify");
    },
    onError: (error) => {
      console.error("Signup failed:", error);
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: (otpData: OTPVerificationType) => authApi.verifyOTP(otpData),
    onSuccess: (data) => {
      setOtpVerified({
        status: true,
        userOtp: data.data.userOtp 
      });
      router.push("/(auth)/set-password");
    },
    onError: (error) => {
      console.error("OTP verification failed:", error);
      throw error; // Re-throw to handle in component
    },
  });

  const setPasswordMutation = useMutation({
    mutationFn: (passwordData: {
      userId: string;
      newPassword: string;
      moduleType: string;
      tokenType: string;
      verified: boolean;
      userOtp: string
    }) => authApi.setPassword(passwordData),
    onSuccess: (data) => {
      console.log("data",data)
      clearRegistrationData();
      router.push("/(auth)/login");
    },
    onError: (error) => {
      console.error("Password set failed:", error);
      throw error;
    },
  });

  return {
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    signup: signupMutation.mutate,
    verifyOtp: verifyOtpMutation.mutate,
    setPassword: setPasswordMutation.mutate,
    isLoading: loginMutation.isPending || 
      logoutMutation.isPending ||
      signupMutation.isPending ||
      verifyOtpMutation.isPending ||
      setPasswordMutation.isPending,
    error: loginMutation.error || 
      logoutMutation.error ||
      signupMutation.error ||
      verifyOtpMutation.error ||
      setPasswordMutation.error,
  };
};
