import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { useFonts, Inter_900Black, Inter_500Medium, Inter_600SemiBold, Inter_300Light } from '@expo-google-fonts/inter';

export default function App() {
  const [fonteCarregada] = useFonts({
    "Inter_900Black": Inter_900Black,
    "Inter_500Medium": Inter_500Medium,
    "Inter_600SemiBold": Inter_600SemiBold,
    "Inter_300Light": Inter_300Light
  });

  if (!fonteCarregada) {
    return <View />
  }

  return (
    <Home />
  );
}
