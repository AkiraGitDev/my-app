import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function EsqueceuSenha() {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  function handleRecuperar() {
    console.log('Recuperar senha:', email, cpf);
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        Recuperar Senha
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginTop: 10 }}
      />

      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        style={{ borderWidth: 1, marginTop: 10 }}
      />

      <Button title="Recuperar" onPress={handleRecuperar} />
    </View>
  );
}
