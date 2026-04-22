import { Alert, Platform } from 'react-native';

export function showAlert(title: string, message?: string): void {
  if (Platform.OS === 'web') {
    const texto = message ? `${title}\n\n${message}` : title;
    if (typeof window !== 'undefined' && typeof window.alert === 'function') {
      window.alert(texto);
    } else {
      console.log(texto);
    }
    return;
  }

  Alert.alert(title, message);
}
