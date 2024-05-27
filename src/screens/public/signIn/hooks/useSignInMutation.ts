import { useMutation } from '@tanstack/react-query';
import { Alert } from 'react-native';

import { SignInService } from '../services/signInService';

interface Credentials {
  email: string;
  password: string;
}

export function useSignInMutation() {
  return useMutation({
    mutationFn: async (credentials: Credentials) => {
      const { accessToken } = await SignInService.signIn(credentials);
      return accessToken;
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
    onSuccess: (data) => {
      console.log('Login bem-sucedido:', data);
    },
  });
}
