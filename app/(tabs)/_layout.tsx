import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';

export default function TabsLayout() {
  const { logout } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6C63FF',
      }}
    >

      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="aluno"
        options={{
          title: 'Aluno',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="sair"
        options={{
          title: 'Sair',
          tabBarButton: () => (
            <Pressable
              onPress={logout}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="log-out" size={24} color="#687076" />
              <Text style={{ fontSize: 10, color: '#687076' }}>Sair</Text>
            </Pressable>
          ),
        }}
      />
      
    </Tabs>
  );
}
