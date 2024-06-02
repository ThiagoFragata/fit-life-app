import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ForgotPasswordScreen from '@/screens/public/forgotPassword/screens/forgotPasswordScreen';
import OnboardingStep1Screen from '@/screens/public/onboarding/screens/onboardingStep1Screen';
import OnboardingStep2Screen from '@/screens/public/onboarding/screens/onboardingStep2Screen';
import OnboardingStep3Screen from '@/screens/public/onboarding/screens/onboardingStep3Screen';
import OnboardingStep4Screen from '@/screens/public/onboarding/screens/onboardingStep4Screen';
import { useOnboardingStore } from '@/screens/public/onboarding/stores/useOnboarding';
import SignInScreen from '@/screens/public/signIn/screens/signInScreen';
import SignUpStep1Screen from '@/screens/public/signUp/screens/signUpStep1Screen';
import SignUpStep2Screen from '@/screens/public/signUp/screens/signUpStep2Screen';

const Stack = createNativeStackNavigator();

export function PublicRoutes() {
  const { isViewOnboarding } = useOnboardingStore();

  return (
    <Stack.Navigator
      initialRouteName={isViewOnboarding ? 'SignIn' : 'Onboarding1'}
      screenOptions={{
        headerShown: false,
        animation: 'ios',
      }}>
      <Stack.Screen name="Onboarding1" component={OnboardingStep1Screen} />
      <Stack.Screen name="Onboarding2" component={OnboardingStep2Screen} />
      <Stack.Screen name="Onboarding3" component={OnboardingStep3Screen} />
      <Stack.Screen name="Onboarding4" component={OnboardingStep4Screen} />

      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          animation: 'fade',
        }}
      />

      <Stack.Screen name="SignUp1" component={SignUpStep1Screen} />
      <Stack.Screen name="SignUp2" component={SignUpStep2Screen} />

      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
