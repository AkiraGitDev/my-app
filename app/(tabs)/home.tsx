import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PRIMARY = '#6C63FF';

const images = [
  {
    img: require('@/assets/images/banner-avaliacao.png'),
    title: 'Avaliação Institucional',
  },
  {
    img: require('@/assets/images/cachorro-shiu.jpeg'),
    title: 'Cale-se.',
  },
  {
    img: require('@/assets/images/undb.png'),
    title: 'Universidade UNDB',
  },
  {
    img: require('@/assets/images/gato-fome.jpeg'),
    title: 'Proibido Chorar',
  },
  {
    img: require('@/assets/images/gamejam.png'),
    title: 'Game Jam 2026',
  },
];

// Thiago Akira Higashi Amaral
// Davi Emmanuel Moraes Ribeiro

export default function Home() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const carouselWidth = width - 48;
  const carouselHeight = Math.round(carouselWidth * 0.5);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScrollView
      style={s.flex}
      contentContainerStyle={[s.container, { paddingTop: insets.top + 16 }]}
    >
      <Text style={s.greeting}>Bem-vindo!</Text>
      <Text style={s.title}>Universidade</Text>

      <View style={s.carouselWrapper}>
        <Carousel
          width={carouselWidth}
          height={carouselHeight}
          data={images}
          autoPlay
          autoPlayInterval={1800}
          loop
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item }) => (
            <View style={s.slide}>
              <Image
                source={item.img}
                style={s.carouselImage}
                contentFit="cover"
              />
              <View style={s.overlay} />
              <Text style={s.slideTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>

      <View style={s.dots}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[s.dot, activeIndex === index && s.dotActive]}
          />
        ))}
      </View>


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
  carouselWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  slide: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '27%',
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  slideTitle: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 14,
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -8,
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#ccc',
  },
  dotActive: {
    backgroundColor: PRIMARY,
    width: 14,
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
