import React from 'react';

import useSignInViewModel from '../viewModels/signInViewModel';
import SignInView from '../views/signInView';

const SignInScreen: React.FC = () => {
  const viewModel = useSignInViewModel();

  return <SignInView {...viewModel} />;
};

export default SignInScreen;
