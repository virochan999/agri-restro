import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/src/api/auth";
import { UserFormType } from "@/src/validationSchemas/loginForm";
import { useAuthStore } from "@/src/store/useAuthStore";
import { useRouter } from "expo-router";

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

  return {
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoading: loginMutation.isPending || logoutMutation.isPending,
    error: loginMutation.error,
  };
};
