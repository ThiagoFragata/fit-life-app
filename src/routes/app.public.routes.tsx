import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ForgotPasswordStep1 } from '@/screens/public/forgotPassword/screens/step1';
import { ForgotPasswordStep2 } from '@/screens/public/forgotPassword/screens/step2';
import { ForgotPasswordStep3 } from '@/screens/public/forgotPassword/screens/step3';
import { OnboardingStep1 } from '@/screens/public/onboarding/screens/step1';
import { OnboardingStep2 } from '@/screens/public/onboarding/screens/step2';
import { OnboardingStep3 } from '@/screens/public/onboarding/screens/step3';
import { OnboardingStep4 } from '@/screens/public/onboarding/screens/step4';
import { SignIn } from '@/screens/public/signIn/screens';
import { SignUpStep1 } from '@/screens/public/signUp/screens/step1';
import { SignUpStep2 } from '@/screens/public/signUp/screens/step2';

const Stack = createNativeStackNavigator();

export function PublicRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'ios',
      }}>
      <Stack.Screen name="Onboarding1" component={OnboardingStep1} />
      <Stack.Screen name="Onboarding2" component={OnboardingStep2} />
      <Stack.Screen name="Onboarding3" component={OnboardingStep3} />
      <Stack.Screen name="Onboarding4" component={OnboardingStep4} />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          animation: 'fade',
        }}
      />

      <Stack.Screen name="SignUp1" component={SignUpStep1} />
      <Stack.Screen name="SignUp2" component={SignUpStep2} />

      <Stack.Screen name="forgotPasswordStep1" component={ForgotPasswordStep1} />
      <Stack.Screen name="forgotPasswordStep2" component={ForgotPasswordStep2} />
      <Stack.Screen name="forgotPasswordStep3" component={ForgotPasswordStep3} />
    </Stack.Navigator>
  );
}
