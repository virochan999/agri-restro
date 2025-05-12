import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../types/user";

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  userId: string | null;
  registrationData: {
    userId: string;
    isOtpVerified: boolean;
    userOtp: string;
  };
  pendingVerification: boolean;
  setAuth: (data: any) => Promise<void>;
  clearAuth: () => Promise<void>;
  initializeAuth: () => Promise<void>;
  setUserId: (userId: string) => void;
  setPendingVerification: (status: boolean) => void;
  setRegistrationData: (data: { id: string }) => void;
  clearRegistrationData: () => void;
  setOtpVerified: ({
    status,
    userOtp,
  }: {
    status: boolean;
    userOtp: string;
  }) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  userId: null,
  isAuthenticated: false,
  isLoading: true,
  pendingVerification: false,
  registrationData: {
    userId: "",
    isOtpVerified: false,
    userOtp: "",
  },
  setAuth: async (data) => {
    // Store auth data in AsyncStorage
    await AsyncStorage.setItem("auth_token", data.token ?? null);
    await AsyncStorage.setItem("user_data", JSON.stringify(data.user ?? null));

    set({
      token: data.token,
      user: data.user,
      isAuthenticated: true,
      isLoading: false,
    });
  },
  clearAuth: async () => {
    // Remove auth data from AsyncStorage
    await AsyncStorage.multiRemove(["auth_token", "user_data"]);

    set({
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },
  initializeAuth: async () => {
    try {
      const [token, userData] = await Promise.all([
        AsyncStorage.getItem("auth_token"),
        AsyncStorage.getItem("user_data"),
      ]);

      if (token && userData) {
        set({
          token,
          user: JSON.parse(userData),
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        set({ isLoading: false });
      }
    } catch (error) {
      console.error("Error initializing auth:", error);
      set({ isLoading: false });
    }
  },
  setUserId: (userId) => set({ userId }),
  setPendingVerification: (status) => set({ pendingVerification: status }),
  setRegistrationData: (data) => {
    set((state) => ({
      registrationData: {
        ...state.registrationData,
        userId: data.id,
      },
    }));
  },
  clearRegistrationData: () =>
    set({
      registrationData: { userId: "", isOtpVerified: false, userOtp: "" },
    }),
  setOtpVerified: ({ status, userOtp }) =>
    set((state) => ({
      registrationData: {
        ...state.registrationData,
        isOtpVerified: status,
        userOtp: userOtp,
      },
    })),
}));
