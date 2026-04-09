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

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [idade, setIdade] = useState('');
  const [curso, setCurso] = useState('');
  const [cep, setCep] = useState('');

  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  async function buscarCEP(value: string) {
    setCep(value);

    if (value.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        const data = await response.json();

        setRua(data.logradouro);
        setCidade(data.localidade);
        setEstado(data.uf);
      } catch (error) {
        console.log('Erro ao buscar CEP');
      }
    }
  }

  function handleCadastro() {
    console.log({ nome, cpf, idade, curso, cep, rua, cidade, estado });
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
            <Ionicons name="person-add-outline" size={36} color={PRIMARY} />
          </View>
          <Text style={s.title}>Criar Conta</Text>
          <Text style={s.subtitle}>Preencha seus dados para se cadastrar</Text>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Dados Pessoais</Text>

          <Text style={s.label}>Nome completo</Text>
          <TextInput
            placeholder="Seu nome"
            placeholderTextColor="#999"
            onChangeText={setNome}
            style={s.input}
          />

          <Text style={s.label}>CPF</Text>
          <TextInput
            placeholder="000.000.000-00"
            placeholderTextColor="#999"
            onChangeText={setCpf}
            keyboardType="numeric"
            style={s.input}
          />

          <View style={s.row}>
            <View style={s.rowHalf}>
              <Text style={s.label}>Idade</Text>
              <TextInput
                placeholder="Ex: 20"
                placeholderTextColor="#999"
                onChangeText={setIdade}
                keyboardType="numeric"
                style={s.input}
              />
            </View>
            <View style={s.rowHalf}>
              <Text style={s.label}>Curso</Text>
              <TextInput
                placeholder="Ex: ADS"
                placeholderTextColor="#999"
                onChangeText={setCurso}
                style={s.input}
              />
            </View>
          </View>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>Endere\u00e7o</Text>

          <Text style={s.label}>CEP</Text>
          <TextInput
            placeholder="00000-000"
            placeholderTextColor="#999"
            value={cep}
            onChangeText={buscarCEP}
            keyboardType="numeric"
            style={s.input}
          />

          <Text style={s.label}>Rua</Text>
          <TextInput
            placeholder="Preenchido automaticamente"
            placeholderTextColor="#999"
            value={rua}
            editable={false}
            style={[s.input, s.inputDisabled]}
          />

          <View style={s.row}>
            <View style={s.rowHalf}>
              <Text style={s.label}>Cidade</Text>
              <TextInput
                placeholder="Cidade"
                placeholderTextColor="#999"
                value={cidade}
                editable={false}
                style={[s.input, s.inputDisabled]}
              />
            </View>
            <View style={s.rowHalf}>
              <Text style={s.label}>Estado</Text>
              <TextInput
                placeholder="UF"
                placeholderTextColor="#999"
                value={estado}
                editable={false}
                style={[s.input, s.inputDisabled]}
              />
            </View>
          </View>
        </View>

        <Pressable
          onPress={handleCadastro}
          style={({ pressed }) => [s.btn, pressed && s.btnPressed]}
        >
          <Ionicons name="checkmark-circle-outline" size={20} color="#fff" />
          <Text style={s.btnText}>Cadastrar</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1, backgroundColor: '#fff' },
  container: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0eeff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 6,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: PRIMARY,
    marginBottom: 8,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#f0eeff',
  },
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
  inputDisabled: {
    backgroundColor: '#ebebef',
    color: '#888',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  rowHalf: {
    flex: 1,
  },
  btn: {
    backgroundColor: PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 8,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  btnPressed: { opacity: 0.7 },
});
