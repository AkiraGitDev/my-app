import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

export default function Sobre() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={s.flex}
      contentContainerStyle={[s.container, { paddingTop: insets.top + 16 }]}
    >
      <View style={s.header}>
        <View style={s.logoBg}>
          <Ionicons name="school" size={40} color="#fff" />
        </View>
        <Text style={s.title}>Sobre a Universidade</Text>
      </View>

      <View style={s.card}>
        <Text style={s.cardText}>
          Nossa universidade oferece ensino de qualidade, inova\u00e7\u00e3o e
          excel\u00eancia. Formamos profissionais preparados para os desafios do
          mercado de trabalho, com foco em tecnologia e desenvolvimento humano.
        </Text>
      </View>

      <View style={s.statsRow}>
        <View style={s.statItem}>
          <Ionicons name="people" size={24} color={PRIMARY} />
          <Text style={s.statNumber}>5.000+</Text>
          <Text style={s.statLabel}>Alunos</Text>
        </View>
        <View style={s.statItem}>
          <Ionicons name="book" size={24} color="#F59E0B" />
          <Text style={s.statNumber}>30+</Text>
          <Text style={s.statLabel}>Cursos</Text>
        </View>
        <View style={s.statItem}>
          <Ionicons name="trophy" size={24} color="#10B981" />
          <Text style={s.statNumber}>20</Text>
          <Text style={s.statLabel}>Anos</Text>
        </View>
      </View>

      <View style={s.infoSection}>
        <View style={s.infoRow}>
          <Ionicons name="location-outline" size={20} color="#888" />
          <Text style={s.infoText}>Rua Exemplo, 123 - Centro</Text>
        </View>
        <View style={s.infoRow}>
          <Ionicons name="call-outline" size={20} color="#888" />
          <Text style={s.infoText}>(81) 3333-4444</Text>
        </View>
        <View style={s.infoRow}>
          <Ionicons name="mail-outline" size={20} color="#888" />
          <Text style={s.infoText}>contato@universidade.edu.br</Text>
        </View>
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
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoBg: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  card: {
    backgroundColor: '#f8f8fc',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eeecfa',
  },
  cardText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },
  statItem: {
    flex: 1,
    backgroundColor: '#f8f8fc',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eeecfa',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a2e',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  infoSection: {
    backgroundColor: '#f8f8fc',
    borderRadius: 16,
    padding: 18,
    gap: 14,
    borderWidth: 1,
    borderColor: '#eeecfa',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
  },
});
