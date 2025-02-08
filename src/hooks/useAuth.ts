import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/src/api/auth";
import { UserFormType } from "@/src/validationSchemas/loginForm";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useRouter } from "expo-router";
import { SignUpFormType } from "../validationSchemas/signupForm";

export const useAuth = () => {
  const router = useRouter();
  const { setAuth, clearAuth } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: (credentials: UserFormType) => authApi.login(credentials),
    onSuccess: (data) => {
      setAuth(data);
      router.push("/(app)/dashboard");
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
      setAuth(data);
      router.push("/(app)/dashboard");
    },
    onError: (error) => {
      console.error("Signup failed:", error);
    },
  });

  return {
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    signup: signupMutation.mutate,
    isLoading: loginMutation.isPending || logoutMutation.isPending,
    error: loginMutation.error,
  };
};
