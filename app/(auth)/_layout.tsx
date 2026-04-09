import { Stack } from 'expo-router';

const PRIMARY = '#6C63FF';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen
        name="cadastro"
        options={{
          headerShown: true,
          title: 'Cadastro',
          headerTintColor: PRIMARY,
          headerTitleStyle: { fontWeight: '600', color: '#1a1a2e' },
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="esqueceu-senha"
        options={{
          headerShown: true,
          title: 'Recuperar Senha',
          headerTintColor: PRIMARY,
          headerTitleStyle: { fontWeight: '600', color: '#1a1a2e' },
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
