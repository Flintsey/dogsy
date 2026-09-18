import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Homepage' }} />
      <Stack.Screen name="homescreen" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="SignInScreen" options={{ title: 'Sign In' }} />
      <Stack.Screen name="RegisterScreen" options={{ title: 'Register' }} />
    </Stack>
  );
}
