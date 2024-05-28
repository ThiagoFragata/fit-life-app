import React from 'react';

import useOnboardingViewModel from '../viewModels/onboardingViewModel';
import OnboardingStep4View from '../views/onboardingStep4';

const OnboardingStep4Screen: React.FC = () => {
  const viewModel = useOnboardingViewModel();

  return <OnboardingStep4View {...viewModel} />;
};

export default OnboardingStep4Screen;
