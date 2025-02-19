import { useAuthStore } from "@/src/store/useAuthStore";
import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, initializeAuth, user } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    initializeAuth();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === "(auth)";
    const inAppGroup = segments[0] === "(app)";

    const isRoot = segments.join("/") === "";

    if (isAuthenticated) {
      if (inAuthGroup || isRoot) {
        // Redirect authenticated users to dashboard
        if(!user.contactInfo.contactType) {
          router.push("/(app)/profile");
          return
        }
        router.push("/(app)/dashboard");
      }
    } else {
      if (inAppGroup || isRoot) {
        // Redirect unauthenticated users to login
        router.replace("/");
      }
    }
  }, [isAuthenticated, segments, isLoading]);

  if (isLoading) {
    return null; // Or a loading screen
  }

  return children;
}
