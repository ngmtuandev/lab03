import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductDetailScreen from './screens/ProductDetailScreen';

export default function App() {
  return (
    <View>
      <ProductDetailScreen></ProductDetailScreen>
      <StatusBar style="auto" />
    </View>
  );
}


