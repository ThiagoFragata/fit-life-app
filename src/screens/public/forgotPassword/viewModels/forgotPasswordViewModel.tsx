import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { useForgotPasswordMutation } from '../hooks/useForgotPasswordMutation';

import { RootNavigationProp } from '@/types/screens';

function useForgotPasswordViewModel() {
  const { navigate } = useNavigation<RootNavigationProp>();
  const { mutate, isPending } = useForgotPasswordMutation();

  const [email, setEmail] = useState<string>('');

  const handleSendEmail = () => {
    mutate({ email });
  };

  return {
    email,
    navigate,
    isPending,
    handleSendEmail,
    onEmailChange: setEmail,
  };
}

export default useForgotPasswordViewModel;
