import { StackActions, useNavigation } from '@react-navigation/native';

import { useOnboardingStore } from '../stores/useOnboarding';

import { RootNavigationProp } from '@/types/screens';

function useOnboardingViewModel() {
  const { navigate, goBack, dispatch } = useNavigation<RootNavigationProp>();
  const { onViewOnboarding } = useOnboardingStore();

  const handleOnboarding = () => {
    dispatch(StackActions.replace('SignIn'));
    onViewOnboarding();
  };

  return {
    goBack,
    navigate,
    handleOnboarding,
  };
}

export default useOnboardingViewModel;
