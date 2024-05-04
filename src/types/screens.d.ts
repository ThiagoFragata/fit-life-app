import { NavigationProp } from '@react-navigation/native';

export type RootParamList = {
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Onboarding4: undefined;

  SignIn: undefined;
};

type RootNavigationProp = NavigationProp<RootParamList>;
