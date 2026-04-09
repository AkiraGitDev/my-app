import { router } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, View, Pressable } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useAuth();

  function handleLogin() {
    console.log('Login:', cpf, senha);
    login();
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        Login
      </Text>

      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="default"
        autoCapitalize="none"
        style={{
          borderWidth: 1,
          marginTop: 10,
          padding: 10,
          borderRadius: 15,
        }}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={false}
        keyboardType="default"
        style={{
          borderWidth: 1,
          marginTop: 10,
          marginBottom: 10,
          padding: 10,
          borderRadius: 15,
        }}
      />

      <Pressable
        onPress={handleLogin}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#45a049' : '#4CAF50',
          paddingVertical: 14,
          paddingHorizontal: 20,
          borderRadius: 15,
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#3e8e41',
          opacity: pressed ? 0.8 : 1,
        })}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
          }}
        >
          Entrar
        </Text>
      </Pressable>

      <Pressable
        onPress={() => router.push('/(auth)/cadastro')}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#1976D2' : '#2196F3',
          paddingVertical: 14,
          paddingHorizontal: 20,
          borderRadius: 15,
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#1565C0',
          opacity: pressed ? 0.8 : 1,
        })}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
          }}
        >
          Cadastrar
        </Text>
      </Pressable>

      <Pressable
        onPress={() => router.push('/(auth)/esqueceu-senha')}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#e0e0e0' : '#f5f5f5',
          paddingVertical: 14,
          paddingHorizontal: 20,
          borderRadius: 15,
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          opacity: pressed ? 0.8 : 1,
        })}
      >
        <Text
          style={{
            color: '#333',
            fontSize: 15,
            fontWeight: '500',
          }}
        >
          Esqueci minha senha
        </Text>
      </Pressable>
    </View>
  );
}
