import { StackActions, useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { Alert } from 'react-native';

import { ForgotPasswordService } from '../services/forgotPasswordService';

import { RootNavigationProp } from '@/types/screens';

interface Credentials {
  email: string;
}

export function useForgotPasswordMutation() {
  const { dispatch } = useNavigation<RootNavigationProp>();

  return useMutation({
    mutationFn: async ({ email }: Credentials) => {
      const { message } = await ForgotPasswordService.forgotPassword(email);
      return message;
    },
    onError: (error) => {
      Alert.alert('Ops, algo deu errado!', error.message);
    },
    onSuccess: (data) => {
      Alert.alert(data, 'Verifique sua caixa de e-mail');
      dispatch(StackActions.replace('SignIn'));
    },
  });
}
