import React from 'react';

import useOnboardingViewModel from '../viewModels/onboardingViewModel';
import OnboardingStep3View from '../views/onboardingStep3';

const OnboardingStep3Screen: React.FC = () => {
  const viewModel = useOnboardingViewModel();

  return <OnboardingStep3View {...viewModel} />;
};

export default OnboardingStep3Screen;
