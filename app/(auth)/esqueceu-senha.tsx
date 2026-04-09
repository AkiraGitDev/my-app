import { Ionicons } from '@expo/vector-icons';
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

const PRIMARY = '#6C63FF';

export default function EsqueceuSenha() {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  function handleRecuperar() {
    console.log('Recuperar senha:', email, cpf);
  }

  return (
    <KeyboardAvoidingView
      style={s.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={s.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={s.header}>
          <View style={s.iconCircle}>
            <Ionicons name="lock-open-outline" size={36} color={PRIMARY} />
          </View>
          <Text style={s.title}>Recuperar Senha</Text>
          <Text style={s.subtitle}>
            Informe seu e-mail e CPF para redefinir sua senha.
          </Text>
        </View>

        <View style={s.form}>
          <Text style={s.label}>E-mail</Text>
          <TextInput
            placeholder="seu@email.com"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={s.input}
          />

          <Text style={s.label}>CPF</Text>
          <TextInput
            placeholder="000.000.000-00"
            placeholderTextColor="#999"
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
            style={s.input}
          />

          <Pressable
            onPress={handleRecuperar}
            style={({ pressed }) => [s.btn, pressed && s.btnPressed]}
          >
            <Ionicons name="send-outline" size={20} color="#fff" />
            <Text style={s.btnText}>Enviar</Text>
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
    paddingTop: 32,
    paddingBottom: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0eeff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
    paddingHorizontal: 16,
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
  btn: {
    backgroundColor: PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 24,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  btnPressed: { opacity: 0.7 },
});
