import React from 'react';

import useOnboardingViewModel from '../viewModels/onboardingViewModel';
import OnboardingStep1View from '../views/onboardingStep1';

const OnboardingStep1Screen: React.FC = () => {
  const viewModel = useOnboardingViewModel();

  return <OnboardingStep1View {...viewModel} />;
};

export default OnboardingStep1Screen;
