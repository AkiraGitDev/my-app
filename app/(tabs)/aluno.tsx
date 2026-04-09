import { Text, View } from 'react-native';

export default function Aluno() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        Área do Aluno
      </Text>

      <Text style={{ marginTop: 10 }}>
        📊 Notas{'\n'}
        📅 Frequência{'\n'}
        💰 Financeiro
      </Text>
    </View>
  );
}