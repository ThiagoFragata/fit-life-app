import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OnboardingStep1 } from '@/screens/public/onboarding/step1';
import { OnboardingStep2 } from '@/screens/public/onboarding/step2';
import { OnboardingStep3 } from '@/screens/public/onboarding/step3';
import { OnboardingStep4 } from '@/screens/public/onboarding/step4';

const Stack = createNativeStackNavigator();

export function PublicRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding1" component={OnboardingStep1} />
      <Stack.Screen name="Onboarding2" component={OnboardingStep2} />
      <Stack.Screen name="Onboarding3" component={OnboardingStep3} />
      <Stack.Screen name="Onboarding4" component={OnboardingStep4} />
    </Stack.Navigator>
  );
}
