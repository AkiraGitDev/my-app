import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

export default function Aluno() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={s.flex}
      contentContainerStyle={[s.container, { paddingTop: insets.top + 16 }]}
    >
      <Text style={s.title}>\u00c1rea do Aluno</Text>
      <Text style={s.subtitle}>Acompanhe sua vida acad\u00eamica</Text>

      <View style={s.card}>
        <View style={[s.cardIconBg, { backgroundColor: '#eef2ff' }]}>
          <Ionicons name="stats-chart" size={28} color={PRIMARY} />
        </View>
        <Text style={s.cardTitle}>Notas</Text>
        <Text style={s.cardText}>
          Consulte suas notas por disciplina e acompanhe seu desempenho ao longo do semestre.
        </Text>
      </View>

      <View style={s.card}>
        <View style={[s.cardIconBg, { backgroundColor: '#fef3c7' }]}>
          <Ionicons name="calendar" size={28} color="#F59E0B" />
        </View>
        <Text style={s.cardTitle}>Frequ\u00eancia</Text>
        <Text style={s.cardText}>
          Verifique seu percentual de presen\u00e7a e evite reprova\u00e7\u00e3o por falta.
        </Text>
      </View>

      <View style={s.card}>
        <View style={[s.cardIconBg, { backgroundColor: '#d1fae5' }]}>
          <Ionicons name="wallet" size={28} color="#10B981" />
        </View>
        <Text style={s.cardTitle}>Financeiro</Text>
        <Text style={s.cardText}>
          Acompanhe boletos, pagamentos e situa\u00e7\u00e3o financeira.
        </Text>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1, backgroundColor: '#fff' },
  container: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  subtitle: {
    fontSize: 15,
    color: '#888',
    marginTop: 4,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#f8f8fc',
    borderRadius: 16,
    padding: 20,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#eeecfa',
  },
  cardIconBg: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
