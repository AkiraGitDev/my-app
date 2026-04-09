import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

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
        // 🔥 DESCOMENTA PARA USAR API VIA CEP
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
    console.log({
      nome,
      cpf,
      idade,
      curso,
      cep,
      rua,
      cidade,
      estado,
    });
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Cadastro</Text>

      <TextInput placeholder="Nome" onChangeText={setNome} style={{ borderWidth: 1, marginTop: 10 }} />
      <TextInput placeholder="CPF" onChangeText={setCpf} style={{ borderWidth: 1, marginTop: 10 }} />
      <TextInput placeholder="Idade" onChangeText={setIdade} style={{ borderWidth: 1, marginTop: 10 }} />
      <TextInput placeholder="Curso" onChangeText={setCurso} style={{ borderWidth: 1, marginTop: 10 }} />

      <TextInput
        placeholder="CEP"
        value={cep}
        onChangeText={buscarCEP}
        style={{ borderWidth: 1, marginTop: 10 }}
      />

      <TextInput placeholder="Rua" value={rua} style={{ borderWidth: 1, marginTop: 10 }} />
      <TextInput placeholder="Cidade" value={cidade} style={{ borderWidth: 1, marginTop: 10 }} />
      <TextInput placeholder="Estado" value={estado} style={{ borderWidth: 1, marginTop: 10 }} />

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}
