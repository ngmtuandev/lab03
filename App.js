import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ChooseColorScreen from './screens/ChooseColorScreen';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <Text className='text-[100px]'>Hello</Text> */}
      <Stack.Navigator>
        <Stack.Screen
        options={{ headerShown: false }} 
        name='Home' component={ProductDetailScreen}></Stack.Screen>
        <Stack.Screen
        options={{ headerShown: false }} 
        name='Option' component={ChooseColorScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

