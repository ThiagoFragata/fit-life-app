import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@/screens/private/home/screens';

const Stack = createNativeStackNavigator();

export function PrivateRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'ios',
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
