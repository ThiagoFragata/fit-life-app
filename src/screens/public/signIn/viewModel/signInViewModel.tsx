import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { useSignInMutation } from '../hooks/useSignInMutation';

import { RootNavigationProp } from '@/types/screens';

function useSignInViewModel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation<RootNavigationProp>();
  const { mutate, isPending } = useSignInMutation();

  const handleSignIn = () => {
    mutate({ email, password });
  };

  return {
    email,
    password,
    isPending,
    onEmailChange: setEmail,
    onPasswordChange: setPassword,
    onSignInPress: handleSignIn,
    onNavigate: navigate,
  };
}

export default useSignInViewModel;
