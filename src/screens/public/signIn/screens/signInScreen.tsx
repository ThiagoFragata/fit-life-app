import React from 'react';

import SignInView from '../view/signInView';
import useSignInViewModel from '../viewModel/signInViewModel';

const SignInScreen: React.FC = () => {
  const viewModel = useSignInViewModel();

  return <SignInView {...viewModel} />;
};

export default SignInScreen;
