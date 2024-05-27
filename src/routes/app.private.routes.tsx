import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@/screens/private/home/screens/homeScreen';

const Stack = createNativeStackNavigator();

export function PrivateRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'ios',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
