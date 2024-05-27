import { useMutation } from '@tanstack/react-query';
import { Alert } from 'react-native';

import { SignInService } from '../services/signInService';

import { useAuthStore } from '@/common/stores/useAuthStore';

interface Credentials {
  email: string;
  password: string;
}

export function useSignInMutation() {
  const { onAuthenticated } = useAuthStore();

  return useMutation({
    mutationFn: async (credentials: Credentials) => {
      const { accessToken } = await SignInService.signIn(credentials);
      return accessToken;
    },
    onError: (error) => {
      Alert.alert('Ops, algo deu errado!', error.message);
    },
    onSuccess: (data) => {
      Alert.alert('Sign-in realizado com sucesso!');
      onAuthenticated(data);
    },
  });
}
