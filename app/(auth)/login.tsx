import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '@/contexts/AuthContext';

const PRIMARY = '#6C63FF';

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState<{ cpf?: string; senha?: string }>({});
  const { login } = useAuth();
  const insets = useSafeAreaInsets();

  function handleLogin() {
    const novosErros: { cpf?: string; senha?: string } = {};
    const cpfNumeros = cpf.replace(/\D/g, '');

    if (!cpfNumeros) {
      novosErros.cpf = 'Informe o CPF';
    } else if (cpfNumeros.length !== 11) {
      novosErros.cpf = 'O CPF deve ter 11 dígitos';
    }

    if (!senha) {
      novosErros.senha = 'Informe a senha';
    } else if (senha.length < 6) {
      novosErros.senha = 'A senha deve ter no mínimo 6 caracteres';
    }

    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    login();
  }

  return (
    <KeyboardAvoidingView
      style={s.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={[s.container, { paddingTop: insets.top + 48 }]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={s.header}>
          <Ionicons name="school" size={64} color={PRIMARY} />
          <Text style={s.title}>Universidade</Text>
          <Text style={s.subtitle}>Acesse sua conta para continuar</Text>
        </View>

        <View style={s.form}>
          <Text style={s.label}>CPF</Text>
          <TextInput
            placeholder="000.000.000-00"
            placeholderTextColor="#999"
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
            autoCapitalize="none"
            maxLength={11}
            style={[s.input, erros.cpf && s.inputErro]}
          />
          {erros.cpf && <Text style={s.erro}>{erros.cpf}</Text>}

          <Text style={s.label}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={[s.input, erros.senha && s.inputErro]}
          />
          {erros.senha && <Text style={s.erro}>{erros.senha}</Text>}

          <Pressable
            onPress={handleLogin}
            style={({ pressed }) => [s.btnPrimary, pressed && s.btnPressed]}
          >
            <Ionicons name="log-in-outline" size={20} color="#fff" />
            <Text style={s.btnPrimaryText}>Entrar</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push('/(auth)/cadastro')}
            style={({ pressed }) => [s.btnOutline, pressed && s.btnPressed]}
          >
            <Ionicons name="person-add-outline" size={20} color={PRIMARY} />
            <Text style={s.btnOutlineText}>Criar conta</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push('/(auth)/esqueceu-senha')}
            style={({ pressed }) => [s.btnLink, pressed && s.btnPressed]}
          >
            <Text style={s.btnLinkText}>Esqueci minha senha</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1, backgroundColor: '#fff' },
  container: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingBottom: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a2e',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginTop: 6,
  },
  form: { gap: 6 },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    marginBottom: 4,
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#f5f5f8',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: '#1a1a2e',
  },
  inputErro: {
    borderColor: '#e53935',
  },
  erro: {
    color: '#e53935',
    fontSize: 13,
    marginTop: 4,
    marginLeft: 4,
  },
  btnPrimary: {
    backgroundColor: PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 20,
  },
  btnPrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  btnOutline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: PRIMARY,
    marginTop: 10,
  },
  btnOutlineText: {
    color: PRIMARY,
    fontSize: 16,
    fontWeight: '700',
  },
  btnLink: {
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 4,
  },
  btnLinkText: {
    color: '#888',
    fontSize: 14,
    fontWeight: '500',
  },
  btnPressed: { opacity: 0.7 },
});
