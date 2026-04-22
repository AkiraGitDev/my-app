import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={s.flex}
      contentContainerStyle={[s.container, { paddingTop: insets.top + 16 }]}
    >
      <Text style={s.greeting}>Bem-vindo!</Text>
      <Text style={s.title}>Universidade</Text>

      <View style={s.card}>
        <View style={s.cardIcon}>
          <Ionicons name="megaphone-outline" size={24} color={PRIMARY} />
        </View>
        <View style={s.cardContent}>
          <Text style={s.cardTitle}>Avisos</Text>
          <Text style={s.cardText}>
            Fique atento aos comunicados da coordenação e prazos importantes.
          </Text>
        </View>
      </View>

      <View style={s.card}>
        <View style={s.cardIcon}>
          <Ionicons name="calendar-outline" size={24} color="#F59E0B" />
        </View>
        <View style={s.cardContent}>
          <Text style={s.cardTitle}>Eventos</Text>
          <Text style={s.cardText}>
            Confira a agenda de palestras, workshops e atividades do semestre.
          </Text>
        </View>
      </View>

      <View style={s.card}>
        <View style={s.cardIcon}>
          <Ionicons name="newspaper-outline" size={24} color="#10B981" />
        </View>
        <View style={s.cardContent}>
          <Text style={s.cardTitle}>Notícias</Text>
          <Text style={s.cardText}>
            Acompanhe as novidades sobre a universidade e os cursos.
          </Text>
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
  greeting: {
    fontSize: 16,
    color: '#888',
    fontWeight: '500',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 24,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f8f8fc',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#eeecfa',
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#eeecfa',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
