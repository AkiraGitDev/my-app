import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen
        name="cadastro"
        options={{ headerShown: true, title: 'Cadastro' }}
      />
      <Stack.Screen
        name="esqueceu-senha"
        options={{ headerShown: true, title: 'Recuperar Senha' }}
      />
    </Stack>
  );
}
