import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthState {
  token: string | null;
  user: any | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuth: (data: any) => Promise<void>;
  clearAuth: () => Promise<void>;
  initializeAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,
  isLoading: true,
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
}));
