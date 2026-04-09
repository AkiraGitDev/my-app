import { Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        Sobre a Universidade
      </Text>

      <Text style={{ marginTop: 10 }}>
        Nossa universidade oferece ensino de qualidade, inovação e excelência.
      </Text>
    </View>
  );
}