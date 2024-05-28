import React from 'react';

import useOnboardingViewModel from '../viewModels/onboardingViewModel';
import OnboardingStep2View from '../views/onboardingStep2';

const OnboardingStep2Screen: React.FC = () => {
  const viewModel = useOnboardingViewModel();

  return <OnboardingStep2View {...viewModel} />;
};

export default OnboardingStep2Screen;
