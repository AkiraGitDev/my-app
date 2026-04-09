import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        Bem-vindo à Universidade 🎓
      </Text>

      <Text style={{ marginTop: 10 }}>
        Notícias, eventos e avisos importantes.
      </Text>
    </View>
  );
}