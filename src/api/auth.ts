import { api } from "@/src/lib/axios";
import { UserFormType } from "@/src/validationSchemas/loginForm";
import { SignUpFormType } from "../validationSchemas/signupForm";
import { OTPVerificationType } from "../types/otpVerification";

export const authApi = {
  login: async (credentials: UserFormType) => {
    const payload = {
      username: credentials.email,
      password: credentials.password,
      moduleType: process.env.EXPO_PUBLIC_APP_MODULE_TYPE,
    };
    const { data } = await api.post("/auth/login", payload);
    return data;
  },

  logout: async () => {
    const { data } = await api.post("/auth/logout");
    return data;
  },

  verifyOTP: async (otpData: OTPVerificationType) => {
    const payload = {
      userOtp: otpData.userOtp,
      userId: otpData.userId,
      moduleType: process.env.EXPO_PUBLIC_APP_MODULE_TYPE,
      tokenType: "PW_RC",
    }
    const { data } = await api.post("/auth/verify-otp", payload);
    return data;
  },

  signup: async (userData: SignUpFormType) => {
    const payload = {
      username: userData.username,
      contactInfo: {
        fullName: userData.fullName,
        email: userData.email,
      },
      roles: [userData.role],
      activeModule: userData.activeModule
    };
    const response = await api.post('/auth/register', payload);
    return response.data;
  },

  setPassword: async (passwordData: {
    userId: string;
    newPassword: string;
    moduleType: string;
    tokenType: string;
    verified: boolean;
    userOtp: string
  }) => {
    const { data } = await api.post("/auth/reset-password", passwordData);
    return data;
  },
};
