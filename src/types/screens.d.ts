import { NavigationProp } from '@react-navigation/native';

export type RootParamList = {
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  Onboarding4: undefined;

  SignIn: undefined;
  SignUp1: undefined;
  SignUp2: undefined;

  ForgotPasswordStep1: undefined;
  ForgotPasswordStep2: undefined;
  ForgotPasswordStep3: undefined;
};

export type RouteNameList =
  | 'Onboarding1'
  | 'Onboarding2'
  | 'Onboarding3'
  | 'Onboarding4'
  | 'SignIn'
  | 'SignUp1'
  | 'SignUp2'
  | 'ForgotPassword';

type RootNavigationProp = NavigationProp<RootParamList>;
