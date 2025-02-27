import { AuthProvider } from "@/src/components/organisms/AuthProvider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import "react-native-reanimated";
import "@/src/styles/globalStyles";
import CustomSplashScreen from '@/src/components/organisms/SplashScreen/SplashScreen';
import TabWrapper from "@/src/components/organisms/PageThemeWrapper/TabWrapper/TabWrapper";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const queryClient = new QueryClient();
  const [loaded] = useFonts({
    SpaceMono: require("../src/assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [isAppReady, setIsAppReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      setIsAppReady(true);
    }
  }, [loaded]);

  if (!loaded || !isAppReady) {
    return null;
  }

  if (showSplash) {
    return <CustomSplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <AuthProvider>
          <TabWrapper>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="(auth)/login/index" />
              <Stack.Screen name="(auth)/signup/index" />
              <Stack.Screen name="(auth)/verify/index" />
              <Stack.Screen name="(app)/dashboard/index" />
              <Stack.Screen name="(auth)/set-password/index" />
              <Stack.Screen name="+not-found" />
              <Stack.Screen name="(app)/profile/index" />
              <Stack.Screen name="(app)/owner/index" />
              <Stack.Screen name="(app)/businessDetails/index" />
              <Stack.Screen name="(app)/profileDone/index" />
              <Stack.Screen name="(app)/productDetail/index" />
              <Stack.Screen name="(app)/productDetail/detail" />
              <Stack.Screen name="(app)/feedBack/index" />
              <Stack.Screen name="(app)/wishlist/index" />
            </Stack>
          </TabWrapper>
        </AuthProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}
