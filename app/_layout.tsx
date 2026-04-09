import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Redirect, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

function RootNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" redirect={isLoggedIn} />
        <Stack.Screen name="(tabs)" redirect={!isLoggedIn} />
        <Stack.Screen name="index" redirect />
      </Stack>
      {isLoggedIn && <Redirect href="/(tabs)/home" />}
    </>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider value={DefaultTheme}>
        <RootNavigator />
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
